import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="JSHunt"
          component={Main}
          options={{
            headerStyle: {
              backgroundColor: '#DA552F',
            },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: '#DA552F',
            },
            headerTintColor: '#FFF',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;