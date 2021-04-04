import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import { styles } from "./TravelListDetails.styles";
import { sharedELementsStep2Spec, height, width } from "./../../common/theme";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SharedElement } from "react-navigation-shared-element";


export const TravelListDetails = ({
    navigation,
    route
}) => {

    const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = sharedELementsStep2Spec
    const { item } = route.params

    return (
        <View style={[StyleSheet.absolueFillObject]}>
            <SharedElement id={`item.${item.key}.photo`} style={[StyleSheet.absoluteFillObject]}>
                <Image
                    source={{ uri: item.image }}
                    style={[
                        StyleSheet.absoluteFillObject,
                        {
                            resizeMode: "cover",
                            height,
                            width
                        }
                    ]}
                />
            </SharedElement>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.iconStyle} name="long-arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
            <Text
                style={[
                    styles.location,
                    // {
                    //     transform: [{ translateX }]
                    // }
                ]}
            >
                {item.location}
            </Text>
        </View>
    )
}

TravelListDetails.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;
    return [{
        id: `item.${item.key}.photo`
    }, {
        id: `item.${item.key}.location`
    },]
}