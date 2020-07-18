import _ from 'lodash';

const contains = (item, query, columnName) => {
  if (columnName) {
    if (item[columnName].toLowerCase().includes(query)) {
      return true;
    }
  } else {
    if (item.toLowerCase().includes(query)) {
      return true;
    }
  }

  return false;
};

export const SearchItems = (
  list,
  limit = 20,
  query = '',
  columnName = null,
) => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(list, list.length));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(list, (user) => {
        return contains(user, formattedQuery, columnName);
      });
      resolve(_.take(results, limit));
    }
  });
};

export default SearchItems;
