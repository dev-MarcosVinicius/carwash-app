import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { style } from "./styles";
import CalendarSvg from "../../assets/calendar.svg";
import { ScheduleIcon } from "../ScheduleIcon";
import { categories } from "../../utils/categrory";

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
    console.log(data)
    return (
        <RectButton {...rest}>
            <View style={style.container}>
                {/* <ScheduleIcon scheduleId={data.id} iconId={data.schedule.icon}/> */}
                
                <View style={style.content}>
                    <View style={style.header}>

                        {/* <Text style={style.title}>
                            { data.schedule.name }
                        </Text> */}

                        {/* <Text style={style.category}>
                            { category.title }
                        </Text> */}
                    </View>

                    <View style={style.footer}>
                        <View style={style.dateInfo}>
                            <CalendarSvg/>

                            {/* <Text style={style.date}>
                                { data.date }
                            </Text> */}
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}