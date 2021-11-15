import React, { useRef, useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Animated,
    Button
} from "react-native";


const Progress = ({ step, steps, height }) => {

    const [width, setWidth] = useState(0)
    const animatedValue = useRef(new Animated.Value(-300)).current;
    const reactive = useRef(new Animated.Value(-300)).current;

    useEffect(() => {
        reactive.setValue(-width + (width * step) / steps)
    }, [step, width])

    return (
        <>
            <Button title="Play" onPress={() => {
                Animated.timing(animatedValue, {
                    toValue: reactive,
                    duration: 60000,
                    useNativeDriver: true
                }).start()
            }} />
            <Text style={{
                fontFamily: "Menlo",
                fontSize: 12,
                fontWeight: "900",
                marginBottom: 8,
            }}>
                {step}/{steps}
            </Text>
            <View
                onLayout={e => {
                    const newWidth = e.nativeEvent.layout.width;

                    setWidth(newWidth);
                }}
                style={{
                    height,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderRadius: height,
                    overflow: "hidden"
                }}>
                <Animated.View style={{
                    height,
                    width: "100%",
                    borderRadius: height,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transform: [{
                        translateX: animatedValue
                    }]
                }} />
            </View>
        </>
    )
}


export const RNLineLoader = () => {
    return (
        <View style={styles.container}>
            <Progress step={10} steps={10} height={20} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: 300
    },
});