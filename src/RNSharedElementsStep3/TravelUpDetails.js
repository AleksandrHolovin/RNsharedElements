import React from "react";
import {
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";


export const TravelUpDetails = ({ route, navigation }) => {

    const item = route.params.item

    return (
        <>
            <SharedElement style={{ flex: 1, width: "100%", height: "100%" }} id={`item.${item.key}.image`}>
                <Image source={{ uri: item.utl }} style={{ flex: 1, width: "100%", height: "100%" }} />
            </SharedElement>
            <SharedElement id={`item.${item.key}.name`}>
                <Text style={{
                    position: "absolute",
                    color: "white",
                    textTransform: "uppercase",
                    fontSize: 36,
                    bottom: 40,
                    left: 40,
                    fontWeight: "bold"
                }}>
                    {item.name}
                </Text>
            </SharedElement>
            <TouchableOpacity style={{
                position: "absolute",
                top: 40,
                left: 40,
            }} onPress={() => navigation.goBack()}>
                <Text style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontSize: 24,
                }}>
                    Back
                </Text>
            </TouchableOpacity>
        </>
    )
}


TravelUpDetails.sharedElements = (route, otherRoute, showing) => {
    const item = route.params.item;
    return [{
        id: `item.${item.key}.image`
    }, {
        id: `item.${item.key}.name`
    },]
}