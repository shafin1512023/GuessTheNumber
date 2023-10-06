import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../constants";

const History = ({ number, hints }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{number}</Text>
            <Text style={styles.text}>{hints}</Text>
        </View>
    );
};

export default History;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.two,
        padding: 15,
        paddingHorizontal: 25,
        marginBottom: 5,
        borderColor: colors.four,
        borderWidth: 3,
        borderRadius: 100,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 5,
    },
    text: {
        color: colors.four,
        fontSize: fonts.small,
    },
});
