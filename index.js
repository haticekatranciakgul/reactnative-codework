import 'react-native-gesture-handler'; // İlk sırada
import { registerRootComponent } from 'expo';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';

export default registerRootComponent(App);
