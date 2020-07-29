/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Example from './playground/todo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Example);
