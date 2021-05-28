import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackRouter } from '@react-navigation/routers';
import Welcome from '../pages/Welcome';
import MainPage from '../pages/MainPage';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator 
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor: '#fff'
            }
        }}
    >

        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen 
            name="MainPage"
            component={MainPage}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;