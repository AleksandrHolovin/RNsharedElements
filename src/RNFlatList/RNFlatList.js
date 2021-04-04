import React from "react";
import {
    FlatList,
    View,
    Text,
    Image,
    Animated,
    Dimensions
} from "react-native";
import { styles } from "./RNFlatList.styles";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const cards = [
    { id: "1", uri: require("./../../asset/RNFlatListAssets/visa.png") },
    { id: "2", uri: require("./../../asset/RNFlatListAssets/visa.png") },
    { id: "4", uri: require("./../../asset/RNFlatListAssets/visa.png") },
    { id: "5", uri: require("./../../asset/RNFlatListAssets/visa.png") },
    { id: "6", uri: require("./../../asset/RNFlatListAssets/visa.png") },
    { id: "7", uri: require("./../../asset/RNFlatListAssets/visa.png") },
    { id: "8", uri: require("./../../asset/RNFlatListAssets/visa.png") },
]


export const RNFlatList = () => {

    const y = new Animated.Value(0);

    const height = Dimensions.get('window').height;

    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }],
        {
            useNativeDriver: true
        })

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Wallet
                </Text>
            </View>
            <AnimatedFlatList
                scrollEventThrottle={16}
                bounces={false}
                data={cards}
                {...{ onScroll }}
                renderItem={({ item, index }) => (
                    < Animated.Image
                        source={item.uri}
                        style={{
                            ...styles.image,
                            opacity: Animated.subtract(index * 200, y).interpolate({
                                inputRange: [-200, 0, height - 200, height],
                                outputRange: [0.5, 1, 1, 0.5],
                                extrapolate: "clamp"
                            }),
                            transform: [
                                {
                                    translateY: Animated.add(Animated.add(
                                        y,
                                        y.interpolate({
                                            inputRange: [0, 0.00001 + index * 220],
                                            outputRange: [0, -index * 220],
                                            extrapolateRight: "clamp"
                                        })
                                    ),
                                        Animated.subtract(index * 200, y).interpolate({
                                            inputRange: [height - 200, height],
                                            outputRange: [0, -200 / 4],
                                            extrapolate: "clamp"
                                        })
                                    )
                                },
                                {
                                    scale: Animated.subtract(index * 200, y).interpolate({
                                        inputRange: [-200, 0, height - 200, height],
                                        outputRange: [0.5, 1, 1, 0.5],
                                        extrapolate: "clamp"
                                    })
                                }
                            ]
                        }}
                    />
                )}
                keyExtractor={item => item.id}
                style={{
                    marginBottom: 20
                }}
            />
        </>
    )
}