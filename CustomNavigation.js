import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import AddBookScreen from './screens/AddBookScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

const AddBookNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen
            name="MainHome"
            component={HomeScreen}
            />
            <Stack.Screen
            name="AddBook"
            component={AddBookScreen}
            />
        </Stack.Navigator>
    )
}
export {AddBookNavigator}