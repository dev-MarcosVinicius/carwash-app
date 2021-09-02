import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'
import { styles } from './styles'
import { ScheduleIcon } from '../ScheduleIcon'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/theme'

export type ScheduleProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean
}

type Props = TouchableOpacityProps & {
    data: ScheduleProps;
} 

export default function Schedule({data, ...rest}: Props) {
    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >
            <ScheduleIcon scheduleId={data.id} iconId={data.icon}/>

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>

                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>

            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    )
}
