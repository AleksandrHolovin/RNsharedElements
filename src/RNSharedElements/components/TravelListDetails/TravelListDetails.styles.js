import { StyleSheet } from "react-native";
import { sharedELementsStep2Spec } from "./../../common/theme";


const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = sharedELementsStep2Spec


export const styles = StyleSheet.create({
    location: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "800",
        width: ITEM_WIDTH * 0.8,
        textTransform: "uppercase",
        position: "absolute",
        top: SPACING,
        left: SPACING,
        marginTop: 50
    },
    iconStyle: {
        marginTop: 40,
        marginLeft: 10
    }
})