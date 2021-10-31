import React from "react";
import { Image, View } from "react-native";
import { style } from "./styles";

const { CNC_IMAGE } = process.env;

type Props = {
    scheduleId: string;
    iconId: string | null;
}

export function ScheduleIcon({ scheduleId, iconId }: Props) {
    const uri = `${CNC_IMAGE}/icons/${scheduleId}/${iconId}.png`;

    return (
        <View style={style.container}>
            {
                // false //iconId
                // ?
                // <Image 
                //     source={{ uri }}
                //     style={style.image}
                //     resizeMode="cover"
                // />
                // :
                <Image 
                    source={require("../../assets/Logo.png")}
                    style={style.image}
                    resizeMode="cover"
                />
            }
        </View>
    );
}