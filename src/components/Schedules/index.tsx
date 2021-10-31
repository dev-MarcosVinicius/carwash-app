import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { style } from "./styles";
import CompletedSvg from "../../assets/ConcluidoIcon.svg";
import { ScheduleIcon } from "../ScheduleIcon";
import { categories } from "../../utils/categrory";
import { truncate } from "../../utils/helpers/formatString";

export type ScheduleProps = {
    id: string;
    name: string;
    icon: null;
    owner: boolean;
}

export type SchedulesProps = {
    id: string;
    schedule: ScheduleProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: SchedulesProps;
}

export function Schedules({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category);

    return (
        <RectButton {...rest}>
            <View style={style.container}>
                <ScheduleIcon 
                    scheduleId={data.id} 
                    iconId={
                        data.schedule && data.schedule.icon ?
                        data.schedule.icon :
                        '' 
                    }
                />
                
                <View style={style.content}>
                    <View style={style.header}>

                        <Text style={style.title}>
                            { 
                                data.schedule && data.schedule.name ? 
                                truncate(data.schedule.name, 10) : 
                                truncate('Não tem um titulo', 10) 
                            }
                        </Text>

                        <View style={style.dateInfo}>
                            <Text style={style.date}>
                                { 
                                    data && data.date ?
                                    data.date :
                                    'Não definido'
                                }
                            </Text>

                            <CompletedSvg/>
                        </View>
                    </View>

                    <View style={style.footer}>
                        <Text style={style.category}>
                            { 
                                category && category.title ? 
                                category.title :
                                'Não possui endereço'
                            }
                    </Text>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}