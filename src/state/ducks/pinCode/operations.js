import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import {getUser} from '@duck_utils/queries';
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

export function* connectionControl(action) {
  try {
    const {data = {}, error, status} = yield api.connection_control(
      action.payload,
    );
    console.log('data', data);
    if (status === 200 || (status && data)) {
      const getUserPayload = getUser(action.code);
      const get_user = yield api.getUser(getUserPayload);
      console.log('getUser', get_user);
      if (getUser.data) {
        const requestBody = new URLSearchParams({
          grant_type: 'password',
          username: 'pda',
          password: '1111',
          client_id: 'pda',
        });

        const {data: token} = yield api.token(requestBody);
        yield put({
          type: 'token',
          token: token?.access_token,
        });
      }
      yield put({
        type: type.CONNECTION_CONTROL_SUCCESS,
        data: data,
      });
    } else if (error) {
      yield put({
        type: type.CONNECTION_CONTROL_FAILED,
        error: error,
      });
    } else {
      yield put({
        type: type.CONNECTION_CONTROL_FAILED,
        error: {msg: 'Something was wrong'},
      });
    }
  } catch (error) {
    console.log('error.response', error.response);
    yield put({
      type: type.CONNECTION_CONTROL_FAILED,
      error,
    });
  }
}

function* watch_connectionControl() {
  yield takeLatest(type.CONNECTION_CONTROL, connectionControl);
}

export {
  watch_getMenu,
  watch_getProductPortion,
  watch_getOrderTagGroups,
  watch_connectionControl,
};
