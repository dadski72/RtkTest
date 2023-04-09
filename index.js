/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppRedux from './src/core/AppRedux';
AppRegistry.registerComponent(appName, () => AppRedux);
