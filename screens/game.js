import {
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Modal,
    ScrollView,
} from "react-native";
import styles from "./game.style";
import Btn from "../components/Btn";
import History from "../components/History";
import { useState } from "react";
import { colors } from "../constants";
import { StatusBar } from "expo-status-bar";

const Game = () => {
    const [randomNumber, setRandomNumber] = useState(
        Math.ceil(Math.random() * 100)
    );
    const [hint, setHint] = useState("");
    const [guessedRight, setGuessedRight] = useState(false);
    const [guessValue, setGuessValue] = useState("");
    const [helpModalVisible, setHelpModalvisibility] = useState(false);
    const [historyModalVisible, setHistoryModalvisibility] = useState(false);
    const [historyList, setHistoryList] = useState([]);

    const handleGuess = () => {
        if (!Number(guessValue)) {
            return;
        }
        var hints = "";
        if (randomNumber > Number(guessValue)) {
            hints = "Higher";
        } else if (randomNumber < Number(guessValue)) {
            hints = "Lower";
        } else {
            hints = "Correct";
            setGuessedRight(true);
        }
        const newHistoryList = [
            ...historyList,
            { number: guessValue, hints: hints },
        ];
        setHistoryList(newHistoryList);
        setHint(hints);
        setGuessValue("");
    };

    const playAgain = () => {
        setGuessedRight(false);
        setHistoryList([]);
        setRandomNumber(Math.ceil(Math.random() * 100));
        setHint("");
    };

    return (
        <ImageBackground
            source={require("../assets/BG.png")}
            style={styles.container}
        >
            <StatusBar style="auto" />
            <View style={styles.moreBtns}>
                {/* history btn */}
                <TouchableOpacity
                    onPress={() => {
                        setHistoryModalvisibility(true);
                    }}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>h</Text>
                </TouchableOpacity>
                {/* help btn */}
                <TouchableOpacity
                    onPress={() => {
                        setHelpModalvisibility(true);
                    }}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>i</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.monitor}>
                {!guessedRight ? (
                    <Text style={styles.monitorText}>{guessValue}</Text>
                ) : null}
                <Text style={styles.monitorText2}>
                    {guessedRight ? `Guessed Correct` : `Guess ${hint}`}
                </Text>
                {guessedRight ? (
                    <Text
                        style={styles.monitorText3}
                    >{`You guessed in ${historyList.length} steps`}</Text>
                ) : null}
            </View>
            <TextInput
                value={String(guessValue)}
                placeholder={guessedRight ? "" : "Enter your guess"}
                style={styles.input}
                onChangeText={(newText) => setGuessValue(newText)}
                cursorColor={colors.four}
                keyboardType="number-pad"
                editable={!guessedRight}
            />
            <Btn
                title={guessedRight ? "Play Again" : "Guess"}
                handlePress={guessedRight ? playAgain : handleGuess}
            />

            {/* History  */}
            <Modal
                visible={historyModalVisible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.modalHead}>History</Text>
                        <ScrollView style={styles.historyContainer}>
                            {historyList.map((item, index) => (
                                <History
                                    key={index}
                                    number={item.number}
                                    hints={item.hints}
                                />
                            ))}
                        </ScrollView>

                        <Btn
                            handlePress={() => {
                                setHistoryModalvisibility(false);
                            }}
                            extraStyle={{ marginVertical: 20 }}
                            title="Okay"
                        />
                    </View>
                </View>
            </Modal>

            {/* Help */}
            <Modal
                visible={helpModalVisible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.modalHead}>Rules of the Game</Text>
                        <Text style={styles.rulesBody}>
                            {`1. There will be a magical number. You have to guess the number.
2. You can guess as long as you do not find the number. 
3. There will be always a hint to find the number.
    `}
                        </Text>
                        <Btn
                            handlePress={() => {
                                setHelpModalvisibility(false);
                            }}
                            title="Okay"
                        />
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
};

export default Game;
