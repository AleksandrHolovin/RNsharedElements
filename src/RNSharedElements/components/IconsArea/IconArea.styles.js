import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    iconItemImage: {
        height: 50,
        width: 50,
        borderRadius: 25,

    },
    iconWrapper: {
        backgroundColor: "lightgrey",
        borderRadius: 35,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15,
        marginVertical: 10
    },
    iconArea: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    }
})