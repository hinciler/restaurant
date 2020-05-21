import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';
import Database from '../../../db/database';
import {func} from 'prop-types';
import {useState} from 'react';
const db = new Database();

export function* getMenu(action) {
  const saveProductGroup = (productGroupData) => {
    return new Promise((resolve) => {
      db.addProductGroup(productGroupData)
        .then((result) => {
          const group_id = result.insertId;
          resolve(group_id);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const saveProduct = (productData) => {
    db.addProduct(productData).then((productResult) => {
      // console.log('results_id', productResult);
    });
  };

  const savePortion = (portionData) => {
    db.addPortion(portionData).then((portionResult) => {});
  };

  const saveOrderTagGroup = (orderTagGroupData) => {
    return new Promise((resolve) => {
      db.addOrderTagGroup(orderTagGroupData)
        .then((result) => {
          const orderTagGroupId = result.insertId;
          resolve(orderTagGroupId);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const saveOrderTag = (orderTagData) => {
    db.addOrderTags(orderTagData).then((portionResult) => {});
  };

  try {
    const response = yield api.getMenu(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.GET_MENU,
        error: response.error,
      });
    } else {
      const categories = response.data.getMenu.categories;
      console.log('categories', categories);
      categories.map((item, categoryIdx) => {
        const groupId = item.id;
        const name = item.name;
        const color = item.color;
        const foreground = item.foreground;
        const image = item.image;
        const header = item.header;
        const menuId = item.menuId;
        const isFastMenu = item.isFastMenu;
        const productGroupData = {
          groupId,
          name,
          color,
          foreground,
          image,
          header,
          menuId,
          isFastMenu,
        };

        //save product group to local database and get return id to save in product
        saveProductGroup(productGroupData).then((groupId) => {
          item.menuItems.map((menuItem, idx) => {
            const productId = menuItem.productId;
            const productName = menuItem.name;
            const productColor = menuItem.color;
            const productForeground = menuItem.foreground;
            const productImage = menuItem.image;
            const productHeader = menuItem.header;
            const productCaption = menuItem.caption;
            const productCategoryId = menuItem.categoryId;
            const productQuantity = menuItem.quantity;

            const productData = {
              productId,
              groupId,
              name: productName,
              color: productColor,
              foreground: productForeground,
              image: productImage,
              header: productHeader,
              caption: productCaption,
              categoryId: productCategoryId,
              quantity: productQuantity,
            };

            //save products to local database
            saveProduct(productData);
            menuItem.product.portions.map(async function (portionItem, idx) {
              const portionId = portionItem.id;
              const portionName = portionItem.name;
              const portionPrice = portionItem.price;
              const productId = portionItem.productId;

              const portionData = {
                portionId,
                productId,
                portionName,
                portionPrice,
              };

              //save portions to local database
              savePortion(portionData);
              const terminal_setting = 'Server';
              const payloadOrderTag = {
                query: `
                    {getOrderTagGroups(productId: ${menuItem.productId}, portion:"${portionItem.name}",terminal:"${terminal_setting}"){id,name,color,max,min,hidden,tags{id,name,color,description,price,maxQuantity,rate}}}
                  `,
              };
              const responsePortion = await api.getOrderTagGroups(
                payloadOrderTag,
              );
              const orderTagGroup = responsePortion.data.getOrderTagGroups;
              orderTagGroup.map((orderTagGroupItem, idx) => {
                const orderTagGroupId = orderTagGroupItem.id;
                const orderTagGroupName = orderTagGroupItem.name;
                const orderTagGroupColor = orderTagGroupItem.color;
                const orderTagGroupMax = orderTagGroupItem.max;
                const orderTagGroupMin = orderTagGroupItem.min;
                const orderTagGroupHidden = orderTagGroupItem.hidden;
                const orderTagGroupData = {
                  orderTagGroupId,
                  productId: menuItem.productId,
                  portionName: portionItem.name,
                  name: orderTagGroupName,
                  color: orderTagGroupColor,
                  max: orderTagGroupMax,
                  min: orderTagGroupMin,
                  hidden: orderTagGroupHidden,
                };

                //save OrderTagGroup to local database and get id to save in order tag
                saveOrderTagGroup(orderTagGroupData).then((orderTagGroupId) => {
                  orderTagGroupItem.tags.map((tagItem) => {
                    if (orderTagGroupId != 0) {
                      const tagId = tagItem.id;
                      const tagName = tagItem.name;
                      const tagColor = tagItem.color;
                      const tagPrice = tagItem.price;
                      const tagRate = tagItem.rate;
                      const tagMaxQuantity = tagItem.maxQuantity;
                      const orderTagData = {
                        orderTagGroupId,
                        orderTagId: tagId,
                        name: tagName,
                        color: tagColor,
                        price: tagPrice,
                        maxQuantity: tagMaxQuantity,
                      };

                      //save OrderTag to local database
                      saveOrderTag(orderTagData);
                    }
                  });
                });
              });
            });
          });
        });
      });
      yield put({
        type: type.GET_MENU_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.GET_MENU_FAILED,
      error,
    });
  }
}

function* watch_getMenu() {
  yield takeLatest(type.GET_MENU, getMenu);
}

export function* getProductPortion(action) {
  try {
    const response = yield api.getProductPortion(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.GET_PRODUCT_PORTION,
        error: response.error,
      });
    } else {
      yield put({
        type: type.GET_PRODUCT_PORTION_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.GET_PRODUCT_PORTION_FAILED,
      error,
    });
  }
}

function* watch_getProductPortion() {
  yield takeLatest(type.GET_PRODUCT_PORTION, getProductPortion);
}

export function* getOrderTagGroups(action) {
  try {
    const response = yield api.getOrderTagGroups(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.GET_ORDER_TAG,
        error: response.error,
      });
    } else {
      yield put({
        type: type.GET_ORDER_TAG_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.GET_PRODUCT_PORTION_FAILED,
      error,
    });
  }
}

function* watch_getOrderTagGroups() {
  yield takeLatest(type.GET_ORDER_TAG, getOrderTagGroups);
}

export {watch_getMenu, watch_getProductPortion, watch_getOrderTagGroups};
