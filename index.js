/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Provider from "react-redux/lib/components/Provider";
import React from 'react';
import {store} from './src/redux/Store'

AppRegistry.registerComponent(appName, () => ProviderContainer);

const ProviderContainer = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}
