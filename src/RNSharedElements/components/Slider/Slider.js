import React from "react";
import {
    View,
    Text,
    FlatList
} from "react-native";
import { styles } from "./Slider.styles";
import { sliderData } from "./../../config";


const SliderItem = ({
    color,
    title
}) => {
    return (
        <View style={{
            ...styles.sliderItem,
            backgroundColor: color
        }}>
            <Text style={styles.sliderItemText}>
                {title}
            </Text>
        </View>
    )
}

export const Slider = () => {
    return (
        <View style={styles.heightWrapper}>
            <FlatList
                data={sliderData}
                horizontal
                renderItem={({ item }) => (
                    <SliderItem
                        title={item.title}
                        color={item.color}
                    />
                )}
                keyExtractor={item => item.id}
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}