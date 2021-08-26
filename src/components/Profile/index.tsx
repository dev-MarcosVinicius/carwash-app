import React from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { style } from "./styles";

export function Profile() {
    const { user } = useAuth();

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
        </View>
    );
}