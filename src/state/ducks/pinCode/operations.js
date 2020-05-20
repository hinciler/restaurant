import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';
import Database from '../../../db/database';
import {func} from 'prop-types';
const db = new Database();
export function* getMenu(action) {
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
            name: productName,
            color: productColor,
            foreground: productForeground,
            image: productImage,
            header: productHeader,
            caption: productCaption,
            categoryId: productCategoryId,
            quantity: productQuantity,
          };
          saveProduct(productGroupData, productData);

          menuItem.product.portions.map(async function (productItem, idx) {
            const terminal_setting = 'Server';
            const payloadOrderTag = {
              query: `
                    {getOrderTagGroups(productId: ${menuItem.productId}, portion:"${productItem.name}",terminal:"${terminal_setting}"){id,name,color,max,min,hidden,tags{id,name,color,description,price,maxQuantity,rate}}}
                  `,
            };
            const responsePortion = await api.getOrderTagGroups(
              payloadOrderTag,
            );
            // console.log('portionTags', responsePortion);
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

function saveProduct(productGroupData, productData) {
  db.addProductGroup(productGroupData)
    .then((result) => {
      console.log(result);
      const groupId = result.insertId;
      productData.groupId = groupId;
      db.addProduct(productData).then((productResult) => {
        console.log('results_id', productResult);
      });
      // console.log('results_id', result.insertId);
    })
    .catch((err) => {
      console.log(err);
    });
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
