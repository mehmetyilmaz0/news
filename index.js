/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Headlines from './Headlines';
import NewsWebView from './NewsWebView';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

 const MainNavigator = createStackNavigator ({
    Home : { screen: App},
    Headlines : { screen: Headlines},
    NewsWebView : { screen: NewsWebView},
});

const MainContainer = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => MainContainer);
