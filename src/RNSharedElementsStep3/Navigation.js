import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
//components
import { TravelUpList } from "./TravelUpList";
import { TravelUpDetails } from "./TravelUpDetails";


const Stack = createStackNavigator();

export const RNSharedElementsStep3 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="List" component={TravelUpList} />
                <Stack.Screen name="Details" component={TravelUpDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}