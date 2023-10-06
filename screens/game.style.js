import { StyleSheet } from "react-native";
import { colors, fonts } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    monitor: {
        width: 200,
        height: 200,
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.two,
        borderRadius: 30,
        borderColor: colors.four,
        borderWidth: 3,
        elevation: 5,
    },
    monitorText: {
        fontSize: fonts.xlarge,
        color: colors.four,
    },
    monitorText2: {
        fontSize: fonts.medium,
        color: colors.four,
    },
    monitorText3: {
        fontSize: fonts.small,
        color: colors.four,
        textAlign: "center",
    },
    input: {
        backgroundColor: colors.two,
        width: 200,
        borderRadius: 100,
        borderColor: colors.four,
        borderWidth: 3,
        padding: 10,
        margin: 20,
        textAlign: "center",
        color: colors.four,
    },
    moreBtns: {
        flexDirection: "row",
        position: "absolute",
        top: 0,
        right: 0,
        marginTop: 10,
    },
    btn: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: fonts.medium,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: "70%",
        height: "60%",
        backgroundColor: colors.modalBG,
        borderRadius: 20,
        borderColor: colors.four,
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    modalHead: {
        fontSize: fonts.head,
        color: colors.four,
        marginVertical: 10,
    },
    rulesBody: {
        fontSize: fonts.medium,
        color: colors.four,
        paddingHorizontal: 20,
        textAlign: "justify",
    },
    historyContainer: {
        width: "90%",
        padding: 10,
    },
});

export default styles;
