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
        height: 200,
        resizeMode: "contain",
        marginBottom: 60,
    },
    rulesHead: {
        fontSize: fonts.head,
        color: colors.four,
        alignSelf: "flex-start",
        marginLeft: 50,
    },
    rulesBody: {
        fontSize: fonts.medium,
        color: colors.four,
        paddingHorizontal: 50,
        textAlign: "justify",
    },
});

export default styles;
