import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Background } from "../../components/Background";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export function Home() {

    const navigation = useNavigation();

    // async function handleAppointmentDetails(guildSelected: AppointmentProps) {
    //     navigation.navigate('Home', { guildSelected });
    // }

    return (
        <Background>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd />
            </View>
        </Background>
    );
}