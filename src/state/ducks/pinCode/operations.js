import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import {getUserQueries} from '@queries';
import type from './types';
import Database from '../../../db/database';
import {func} from 'prop-types';
import {useState} from 'react';
import axios from 'axios';
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

  const saveOrderTag = async (orderTagData) => {
    await db.addOrderTags(orderTagData).then((portionResult) => {});
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
      categories.map(async function (item, categoryIdx) {
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
        await saveProductGroup(productGroupData).then((groupId) => {
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
                  orderTagGroupItem.tags.map(async function (tagItem) {
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
                      await saveOrderTag(orderTagData);
                    }
                  });
                });
              });
            });
          });
        });
      });

      //This part will be added on server side, we will look this part later after server updated
      //Get ticket tags
      let tagGroupArraylist = [];
      const requestBody = new URLSearchParams({
        query: 'tickettags',
        serial: '111',
      });

      const ticketTag = yield api.getTicketTag(requestBody);
      ticketTag.data[0].TicketTagGroups.map((ticketTagGroupItem) => {
        const freeTagging = ticketTagGroupItem.FreeTagging;
        const forceValue = ticketTagGroupItem.ForceValue;
        const askBeforeCreatingTicket =
          ticketTagGroupItem.AskBeforeCreatingTicket;
        const name = ticketTagGroupItem.Name;
        const id = ticketTagGroupItem.Id;
        tagGroupArraylist.push(id);
        const roles = ticketTagGroupItem.Roles;

        if (roles.contains(',')) {
          const splitRoles = roles.split(',');

          for (const role of splitRoles) {
          }
        } else {
        }
      });

      console.log('sett', ticketTag.data[0].TicketTagGroups);

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

export function* connectionControl(action) {
  try {
    const {data = {}, error, status} = yield api.connection_control(
      action.payload,
    );
    if (data) {
      const requestBody = new URLSearchParams({
        grant_type: 'password',
        username: 'pda',
        password: '1111',
        client_id: 'pda',
      });

      const {data: token, error: _error} = yield api.token(requestBody);
      if (token?.access_token) {
        const getUserPayload = getUserQueries(action.code);
        yield put({
          type: type.TOKEN,
          token: token?.access_token,
        });
        const get_user = yield api.getUser(getUserPayload);
        yield put({
          type: type.PIN_CODE_SUCCESS,
          user: get_user,
        });
      } else {
        yield put({
          type: type.PIN_CODE_FAILED,
          error: {msg: 'Something was wrong'},
        });
      }
    } else if (error) {
      yield put({
        type: type.PIN_CODE_FAILED,
        error: error,
      });
    } else {
      yield put({
        type: type.PIN_CODE_FAILED,
        error: {msg: 'Something was wrong'},
      });
    }
  } catch (error) {
    yield put({
      type: type.PIN_CODE_FAILED,
      error,
    });
  }
}

function* watch_connectionControl() {
  yield takeLatest(type.PIN_CODE, connectionControl);
}
export {watch_getMenu, watch_connectionControl};
