import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome";
import Rule from "./screens/rule";
import Game from "./screens/game";

const Stack = createNativeStackNavigator(); // Creates a stack for navigation

// Main entry component
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "fade",
                }}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Rule" component={Rule} />
                <Stack.Screen name="Game" component={Game} />
                {/*<Stack.Screen />
                <Stack.Screen /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
