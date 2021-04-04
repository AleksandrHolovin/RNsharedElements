import React from "react";
import {
    Easing
} from "react-native";
import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import { TravelList } from "./components/TravelList/TravelList";
import { TravelListDetails } from "./components/TravelListDetails/TravelListDetails";
enableScreens()


const Stack = createSharedElementStackNavigator();

export const RNSharedElementsStep2 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="TravelList" component={TravelList} />
                <Stack.Screen
                    name="TravelListDetails"
                    component={TravelListDetails}
                    options={() => ({
                        gestureEnabled: false,
                        transitionSpec: {
                            open: {
                                animation: "timing",
                                config: {
                                    duration: 500,
                                    easing: Easing.inOut(Easing.ease)
                                }
                            },
                            close: {
                                animation: "timing",
                                config: {
                                    duration: 500,
                                    easing: Easing.inOut(Easing.ease)
                                }
                            }
                        },
                        cardStyleInterpolator: ({ current: { progress } }) => {
                            return {
                                cardStyle: {
                                    opacity: progress
                                }
                            }
                        }
                    })
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}