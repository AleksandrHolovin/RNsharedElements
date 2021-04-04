import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    An,
    Animated
} from "react-native";
import { styles } from "./IconArea.styles";
import { iconsData } from "./../../config";
import { SharedElement } from "react-navigation-shared-element";


export const IconItem = ({
    uri,
    navigation,
    item,
    details,
    opacity,
    scrollToItem,
    index
}) => {
    return (
        <>
            { details === true
                ? <Animated.View style={{ opacity }}>
                    <SharedElement id={`item.${item.id}.icon`}>
                        <TouchableOpacity
                            style={{
                                ...styles.iconWrapper,
                                opacity
                            }}
                            onPress={() => scrollToItem(index)}
                        >
                            <Image source={uri} style={styles.iconItemImage} />
                        </TouchableOpacity>
                    </SharedElement>
                </Animated.View>
                : <SharedElement id={`item.${item.id}.icon`}>
                    <TouchableOpacity
                        style={styles.iconWrapper}
                        onPress={() => navigation.navigate("Details", { item })}
                    >
                        <Image source={uri} style={styles.iconItemImage} />
                    </TouchableOpacity>
                </SharedElement>}
        </>
    )
}


export const IconArea = ({
    navigation,
}) => {
    return (
        <View style={styles.iconArea}>
            {iconsData.map(item => (
                <IconItem
                    navigation={navigation}
                    uri={item.uri}
                    item={item}
                    key={item.id}
                />
            ))}
        </View>
    )
}