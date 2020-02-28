import { StyleSheet } from "react-native";


const SECONDARY_COLOR = "#3B4CCA";
const PRIMARY_COLOR = "#CC0000";

export default StyleSheet.create({
    title: {
        textAlign: "center", 
        fontSize: 22, 
        fontWeight: "300", 
        marginTop: 10,
        color: PRIMARY_COLOR,
    },
    subtitle: {
        fontSize: 22,
        marginTop: 10,
        fontWeight: "200",
        color: PRIMARY_COLOR
    },
    lightFont: {
        fontWeight: "300",
        fontSize: 16
    },
    spriteContainerRed: {
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        backgroundColor: SECONDARY_COLOR,
        height: 80,
        width: 80,
        borderRadius: 100 / 2,
        justifyContent: "center",
        alignItems: "center"
    },
    spriteContainerBlue: {
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        backgroundColor: PRIMARY_COLOR,
        height: 80,
        width: 80,
        borderRadius: 100 / 2,
        justifyContent: "center",
        alignItems: "center"
    },
    imagesContainer: {
        flexWrap: "wrap", 
        flexDirection: "row", 
        justifyContent: "space-around"
    }
})