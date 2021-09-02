import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { style } from "./styles";
import { ButtonAdd } from "../../components/ButtonAdd";
import { useNavigation } from "@react-navigation/native";

export function Profile() {
    const { user } = useAuth();
    const navigation = useNavigation();

    function handleSchedulesCreate() {
        navigation.navigate('SchedulesCreate')
    }

    return (
        <View style={style.container}>

            <RectButton>
                <Avatar urlImage={user.photoUrl}/>
            </RectButton>

            <View style={style.user}>
                <Text style={style.greeating}>
                    Olá!
                </Text>
                <Text style={style.username}>
                    {user.givenName}
                </Text>
            </View>

            <ButtonAdd onPress={handleSchedulesCreate}/>
        </View>
    );
}