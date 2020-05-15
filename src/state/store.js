import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './utils/middleware';
import * as reducers from './ducks';
export const sagaMiddleware = createSagaMiddleware();

//middleware
// console.log('reducers', reducers);
const rootReducer = (state, action) => {
  return combineReducers(reducers)(state, action);
};
const middleWare = __DEV__
  ? createStore(
      rootReducer,
      compose(applyMiddleware(sagaMiddleware, createLogger())),
    )
  : createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
export const store = middleWare;
