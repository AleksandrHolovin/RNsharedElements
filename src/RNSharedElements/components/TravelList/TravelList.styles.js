import { StyleSheet } from "react-native";
import { sharedELementsStep2Spec } from "./../../common/theme";


const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = sharedELementsStep2Spec

export const styles = StyleSheet.create({
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        margin: SPACING
    },
    location: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "800",
        width: ITEM_WIDTH * 0.8,
        textTransform: "uppercase",
        position: "absolute",
        top: SPACING,
        left: SPACING
    },
    days: {
        position: "absolute",
        bottom: SPACING,
        left: SPACING,
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center"
    },
    daysValue: {
        fontSize: 18,
        fontWeight: "800",
        color: "#fff"
    },
    daysLabel: {
        fontSize: 10,
        color: "#fff"
    }
})