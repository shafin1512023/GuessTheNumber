import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../constants";

const Btn = ({ title, handlePress, extraStyle }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[styles.btnContainer, extraStyle]}
        >
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Btn;

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: colors.two,
        padding: 15,
        borderColor: colors.four,
        borderWidth: 3,
        borderRadius: 100,
        width: "55%",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
    btnText: {
        color: colors.four,
        fontSize: fonts.medium,
    },
});
