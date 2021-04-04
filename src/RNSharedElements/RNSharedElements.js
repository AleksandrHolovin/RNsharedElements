import React from "react";
import {
    Easing
} from "react-native";
//components
import { Slider } from "./components/Slider/Slider";
import { IconArea } from "./components/IconsArea/IconArea";
import Details from "./components/Details/Details";
import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
enableScreens()


const ListComponent = ({
    navigation
}) => {
    return (
        <>
            <Slider
                navigation={navigation}
            />
            <IconArea
                navigation={navigation}
            />
        </>
    )
}


const Stack = createSharedElementStackNavigator();

export const RNSharedElements = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="List" component={ListComponent} />
                <Stack.Screen
                    name="Details"
                    component={Details}
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
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}