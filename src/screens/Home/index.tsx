import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Background } from "../../components/Background";

export function Home() {
    return (
        <Background>
            <View style={styles.header}>
                <Text>Teste</Text>
            </View>
        </Background>
    );
}