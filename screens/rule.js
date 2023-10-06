import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./rule.style";
import Btn from "../components/Btn";
import { StatusBar } from "expo-status-bar";

const Rule = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/BG.png")}
            style={styles.container}
        >
            <StatusBar style="auto" />
            <Image style={styles.logo} source={require("../assets/Logo.png")} />
            <Text style={styles.rulesHead}>Rules of the Game</Text>
            <Text style={styles.rulesBody}>
                {`1. There will be a magical number. You have to guess the number.
2. You can guess as long as you do not find the number. 
3. There will be always a hint to find the number.
                `}
            </Text>
            <Btn
                title="Start"
                handlePress={() => {
                    navigation.navigate("Game");
                }}
            />
        </ImageBackground>
    );
};

export default Rule;
