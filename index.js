/**
 * App entry point
 * "react-native-gesture-handler" on top most
 * see at https://reactnavigation.org/docs/getting-started
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from '@/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
