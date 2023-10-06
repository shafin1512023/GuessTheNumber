import { StyleSheet } from "react-native";
import { colors, fonts } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: "65%",
        resizeMode: "contain",
    },
    salam: {
        color: colors.four,
        fontSize: fonts.medium,
        marginBottom: 25,
    },
});

export default styles;
