import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/theme'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
    title: string;
    action?: ReactNode;
}

export default function Header({ title, action }: Props) {
    const { heading } = theme.colors;

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View
            style={styles.container}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name='arrow-left'
                    size={24}
                    color={heading}
                />
            </BorderlessButton>
            
            <Text style={styles.title}>
                { title }
            </Text>

            {
                action ?
                <View>
                    { action }
                </View>
                : <View style={{width: 24}}/>
            }
        </View>
    )
}
