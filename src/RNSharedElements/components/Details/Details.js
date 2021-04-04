import React, { useRef } from "react";
import {
    View,
    Text,
    FlatList,
    Animated,
    Dimensions,
    TouchableOpacity,
    Image
} from "react-native";
import { styles } from "./Details.styles";
import { IconItem } from "./../IconsArea/IconArea";
import { iconsData, DeatilsData } from "./../../config";
import { useEffect } from "react";
import { SharedElement } from "react-navigation-shared-element";


const DetailFlatListItem = ({
    title
}) => {

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={{
            ...styles.detailsItemWrapper,
            width: windowWidth - 30
        }}>
            <FlatList
                data={DeatilsData}
                renderItem={({ item }) => (
                    <Text>{title}</Text>
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                style={styles.itemFlatList}
            />
        </View>
    )
}

const Details = ({ route }) => {

    const windowWidth = Dimensions.get('window').width;

    const { item } = route.params;
    const ref = useRef()
    const selectedItemIndex = iconsData.findIndex((i) => i.id === item.id)
    const mountedAnimated = useRef(new Animated.Value(0)).current
    const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current
    const activeIndexAnimation = useRef(new Animated.Value(selectedItemIndex)).current


    const animation = (toValue, delay) =>
        Animated.timing(mountedAnimated, {
            toValue: toValue,
            duration: 500,
            delay: delay,
            useNativeDriver: true
        })



    useEffect(() => {
        Animated.parallel([
            Animated.timing(activeIndexAnimation, {
                toValue: activeIndex,
                duration: 300,
                useNativeDriver: true
            }),
            animation(1, 500)
        ]).start()
    })


    const translateY = mountedAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0]
    })
    const translateX = activeIndexAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [100, 0, -100]
    })



    return (
        <>
            <Animated.View
                style={{
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    marginVertical: 20,
                    marginLeft: windowWidth / 2 - 50,
                    transform: [{ translateX }]
                }}>
                {/* <Animated.FlatList
                    ref={ref}
                    data={iconsData}
                    horizontal
                    renderItem={({ item }) => (
                        <IconItem
                            details
                            uri={item.uri}
                            item={item}
                        />
                    )}
                    keyExtractor={item => item.id}
                    style={{
                        ...styles.flatList,
                        marginLeft: windowWidth / 2 - 40
                    }}
                    showsHorizontalScrollIndicator={false}
                /> */}
                {iconsData.map((item, index) => {

                    const inputRange = [(index - 1), index, (index + 1)]
                    const opacity = activeIndexAnimation.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    })
                    const scrollToItem = (index) => {
                        activeIndex.setValue(index)
                        ref.current.scrollToIndex({
                            index,
                            animated: true
                        })
                    }

                    return (
                        <Animated.View style={{ opacity }}>
                            <SharedElement id={`item.${item.id}.icon`}>
                                <TouchableOpacity
                                    style={{
                                        ...styles.iconWrapper,
                                        opacity
                                    }}
                                    onPress={() => scrollToItem(index)}
                                >
                                    <Image source={item.uri} style={styles.iconItemImage} />
                                </TouchableOpacity>
                            </SharedElement>
                        </Animated.View>
                    )
                })}
            </Animated.View>
            <View style={styles.detailsFlatListWrapper}>
                <Animated.FlatList
                    data={iconsData}
                    horizontal
                    ref={ref}
                    onMomentumScrollEnd={ev => {
                        const newIndex = Math.floor(ev.nativeEvent.contentOffset.x / windowWidth)

                        activeIndex.setValue(newIndex)
                    }}
                    renderItem={({ item }) => (
                        <DetailFlatListItem
                            title={item.title}
                        />
                    )}
                    getItemLayout={(data, index) => ({
                        length: windowWidth,
                        offset: windowWidth * index + 20,
                        index
                    })}
                    keyExtractor={item => item.id}
                    style={{ ...styles.detailsFlatList, opacity: mountedAnimated, transform: [{ translateY }] }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </>
    )
}


Details.sharedElements = (route, otherRoute, showing) => {
    return iconsData.map(item => `item.${item.id}.icon`)
}


export default Details;