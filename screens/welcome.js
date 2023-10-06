import { Text, Image, ImageBackground } from "react-native";
import styles from "./welcome.style";
import Btn from "../components/Btn";
import { StatusBar } from "expo-status-bar";

const Welcome = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/BG.png")}
            style={styles.container}
        >
            <StatusBar style="auto" />
            <Image style={styles.logo} source={require("../assets/Logo.png")} />

            <Text style={styles.salam}>Asssalamu Alaikum</Text>

            <Btn
                title="Start"
                handlePress={() => {
                    navigation.navigate("Rule");
                }}
            />
        </ImageBackground>
    );
};

export default Welcome;
