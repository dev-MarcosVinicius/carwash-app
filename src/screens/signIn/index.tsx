import React from 'react';
import { View, Text, Alert, ActivityIndicator, Image } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/Logo.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/theme';

export function SignIn() {
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <View style={styles.container}>

            <Image
                source={ IllustrationImg }
                style={styles.image}
                resizeMode='stretch'
            />

            <View style={styles.content}>
                <Text style={styles.subtitle}>
                    Agende suas lavagens
                </Text>

                {
                    loading 
                    ?
                    <ActivityIndicator color={theme.colors.heading}/>
                    :
                    <ButtonIcon 
                        title='Entrar com Google'
                        onPress={handleSignIn}
                    />
                }
                
            </View>
        </View>
    );
}