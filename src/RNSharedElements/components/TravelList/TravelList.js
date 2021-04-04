import React, { useRef } from "react";
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    Text,
    View,
    Animated,
    SafeAreaView
} from "react-native";
import { styles } from "./TravelList.styles";
import { locations } from "./../../config";
import { sharedELementsStep2Spec } from "./../../common/theme";
import { SharedElement } from "react-navigation-shared-element";


export const TravelList = ({
    navigation
}) => {

    const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = sharedELementsStep2Spec
    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Animated.FlatList
                data={locations}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={FULL_SIZE}
                decelerationRate="fast"
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * FULL_SIZE,
                        index * FULL_SIZE,
                        (index + 1) * FULL_SIZE
                    ]

                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH]
                    })
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [1, 1.1, 1]
                    })
                    return (
                        <TouchableOpacity
                            style={styles.itemContainer}
                            onPress={() => {
                                navigation.push("TravelListDetails", { item })
                            }}
                        >
                            <View style={[StyleSheet.absoluteFillObject, { overflow: "hidden", borderRadius: RADIUS }]}>
                                <SharedElement id={`item.${item.key}.photo`} style={[StyleSheet.absoluteFillObject]}>
                                    <Animated.Image
                                        source={{ uri: item.image }}
                                        style={[
                                            StyleSheet.absoluteFillObject,
                                            {
                                                resizeMode: "cover",
                                                transform: [{ scale }]
                                            }]}
                                    />
                                </SharedElement>
                            </View>
                            <Animated.Text
                                style={[
                                    styles.location,
                                    {
                                        transform: [{ translateX }]
                                    }
                                ]}
                            >
                                {item.location}
                            </Animated.Text>
                            <View
                                style={styles.days}
                            >
                                <Text
                                    style={styles.daysValue}
                                >
                                    {item.numberOfDays}
                                </Text>
                                <Text
                                    style={styles.daysLabel}
                                >
                                    days
                            </Text>
                            </View>
                        </TouchableOpacity>

                    )
                }}
            />
        </SafeAreaView>
    )
}