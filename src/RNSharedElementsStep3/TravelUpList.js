import React, { useRef, useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";
import { travelUp } from "./data";
import { width, SPACING } from "./../RNSharedElements/common/theme";
import { Directions, FlingGestureHandler, State } from "react-native-gesture-handler";


const IMAGE_WIDTH = width * 0.90;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.5;
const VISIBLE_ITEMS = 4

export const TravelUpList = ({
    navigation
}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const animatedValue = useRef(new Animated.Value(0)).current
    const reactiveAnimated = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactiveAnimated,
            duration: 300,
            useNativeDriver: true
        }).start()
    }, [])

    const setActiveSilde = useCallback(newIndex => {
        setActiveIndex(newIndex)
        reactiveAnimated.setValue(newIndex)
    })

    return (
        <FlingGestureHandler
            key="UP"
            directions={Directions.UP}
            onHandlerStateChange={ev => {
                if (ev.nativeEvent.state === State.END) {
                    if (activeIndex === travelUp.length - 1) {
                        return;
                    }
                    setActiveSilde(activeIndex + 1)
                }
            }}
        >
            <FlingGestureHandler
                key="DOWN"
                directions={Directions.DOWN}
                onHandlerStateChange={ev => {
                    if (ev.nativeEvent.state === State.END) {
                        if (activeIndex === 0) {
                            return;
                        }
                        setActiveSilde(activeIndex - 1)
                    }
                }}
            >
                <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1D1D" }}>
                    <StatusBar hidden />
                    <FlatList
                        data={travelUp}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                        contentContainerStyle={{
                            flex: 1,
                            alignItems: "center",
                            // justifyContent: "center"
                        }}
                        CellRendererComponent={({ index, item, children, style, ...props }) => {

                            const newStyle = [
                                style,
                                {
                                    zIndex: travelUp.length - index,
                                    left: -IMAGE_WIDTH / 2,
                                    right: -IMAGE_HEIGHT / 2
                                }
                            ]

                            return <View index={index} {...props} style={newStyle}>
                                {children}
                            </View>
                        }}
                        renderItem={({ item, index }) => {

                            const inputRange = [index - 1, index, index + 1]
                            const translateY = animatedValue.interpolate({
                                inputRange,
                                outputRange: [-30, 0, 30]
                            })

                            return (
                                <Animated.View style={{ position: "absolute", transform: [{ translateY }] }}>
                                    <TouchableOpacity>
                                        <Image source={{ uri: item.utl }} style={styles.image} />
                                        <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                                            <Text style={styles.name}>
                                                {item.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </Animated.View>
                            )
                        }}
                    />
                </SafeAreaView>
            </FlingGestureHandler>
        </FlingGestureHandler>
    )
}


const styles = StyleSheet.create({
    image: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        resizeMode: "cover",
        borderRadius: 16
    },
    name: {
        textTransform: "uppercase",
        color: "#fff",
        fontSize: 36,
        fontWeight: "900"
    }
})