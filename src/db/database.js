import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);
const database_name = 'sambaposClient.db';
const database_version = '1.0';
const database_displayname = 'SQLite SambaPos Client Database';

export default class Database {
  initDB() {
    let db;
    return new Promise((resolve) => {
      SQLite.echoTest()
        .then(() => {
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
          )
            .then((DB) => {
              db = DB;
              db.executeSql('SELECT 1 FROM order_line LIMIT 1')
                .then(() => {})
                .catch((error) => {
                  db.transaction((tx) => {
                    tx.executeSql('DROP TABLE IF EXISTS order_line', []);
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS order_line (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, quantity TEXT, price TEXT, productId TEXT, portion TEXT, orderTags TEXT, orderTagGroups TEXT, differentSituation TEXT)',
                    );
                  })
                    .then(() => {
                      console.log('Table order_line created successfully');
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                });
              db.executeSql('SELECT 1 FROM product_groups LIMIT 1')
                .then(() => {})
                .catch((error) => {
                  db.transaction((tx) => {
                    tx.executeSql('DROP TABLE IF EXISTS product_groups', []);
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS product_groups (id INTEGER PRIMARY KEY AUTOINCREMENT, group_id TEXT, name TEXT, color TEXT, foreground TEXT, image TEXT, header TEXT, menuId TEXT, isFastMenu TEXT)',
                    );
                  })
                    .then(() => {
                      console.log('Table product_groups created successfully');
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                });
              db.executeSql('SELECT 1 FROM products LIMIT 1')
                .then(() => {})
                .catch((error) => {
                  db.transaction((tx) => {
                    tx.executeSql('DROP TABLE IF EXISTS products', []);
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, group_id TEXT, product_id TEXT, name TEXT, color TEXT, foreground TEXT, image TEXT, header TEXT, caption TEXT, category_id TEXT, quantity TEXT)',
                    );
                  })
                    .then(() => {
                      console.log('Table products created successfully');
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                });

              resolve(db);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log('echoTest failed - plugin not functional');
        });
    });
  }

  closeDatabase(db) {
    if (db) {
      console.log('Closing DB');
      db.close()
        .then((status) => {
          console.log('Database CLOSED');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Database was not OPENED');
    }
  }

  addProductGroup(prodGroup) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(
              'INSERT INTO product_groups (group_id, name, color,foreground, image, header, menuId, isFastMenu) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
              [
                prodGroup.groupId,
                prodGroup.name,
                prodGroup.color,
                prodGroup.foreground,
                prodGroup.image,
                prodGroup.header,
                prodGroup.menuId,
                prodGroup.isFastMenu,
              ],
            ).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then((result) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  addProduct(prod) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(
              'INSERT INTO products (group_id, product_id, name, color, foreground, image, header, caption, category_id, quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
              [
                prod.groupId,
                prod.productId,
                prod.name,
                prod.color,
                prod.foreground,
                prod.image,
                prod.header,
                prod.caption,
                prod.categoryId,
                prod.quantity,
              ],
            ).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then((result) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
