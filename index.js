import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';

import Router from './src/Router';
import {name as appName} from './app.json';


export default registerRootComponent(Router);