import React from "react";
import {
    Easing
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
//components
import { TravelUpList } from "./TravelUpList";
import { TravelUpDetails } from "./TravelUpDetails";
import { enableScreens } from "react-native-screens";
enableScreens()



const Stack = createSharedElementStackNavigator();

export const RNSharedElementsStep3 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="List" component={TravelUpList} />
                <Stack.Screen name="Details" component={TravelUpDetails}
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