// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // ✔️ bu doğru
import { Provider } from 'react-redux';
import store from './redux/store';
import Jobs from './pages/Jobs';
import Favourite from './pages/Favourite/Favourite';
import JobsDetail from './pages/JobsDetail';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator(); 

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jobs" component={Jobs} options={{ title: 'Jobs' }} />
      <Stack.Screen name="JobDetail" component={JobsDetail} options={{ title: 'Job Detail' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Jobs" component={MainStack} />
          <Drawer.Screen name="Favourite" component={Favourite} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
