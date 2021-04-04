import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        shadowColor: "#000",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    bannerContainer: {
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: "center",
        overflow: "hidden"
    },
    banner: scrollA => ({
        width: "200%",
        height: 400,
        transform: [
            {
                translateY: scrollA.interpolate({
                    inputRange: [-400, 0, 400, 400 + 1],
                    outputRange: [-400 / 2, 0, 400 * 0.75, 400 * 0.75]
                }),
            },
            {
                scale: scrollA.interpolate({
                    inputRange: [-400, 0, 400, 400 + 1],
                    outputRange: [2, 1, 0.5, 0.5]
                })
            }
        ]
    }),
    textWrapper: {
        width: "90%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 20,
        marginBottom: 150,
    },
    text: {
        fontSize: 17
    }
});