import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import Header from '../../components/Header'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/theme'
import { styles } from './styles'
import { ScheduleIcon } from '../../components/ScheduleIcon'
import SmallInput from '../../components/SmallInput'
import TextArea from '../../components/TextArea'
import { Button } from '../../components/Button'
import ModalView from '../../components/ModalView'
import Schedule from '../../components/Schedule'
import { ScheduleProps } from '../../components/Schedule'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_SCHEDULES } from '../../configs/database'
import { useNavigation } from '@react-navigation/core'


export function SchedulesCreate() {
    const [ category, setCategory ] = useState('');  
    const [ openSchedulesModal, setOpenSchedulesModal ] = useState(false);
    const [ schedules, setSchedules ] = useState<ScheduleProps>({} as ScheduleProps);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation();
    
    function handleOpenSchedules() {
        setOpenSchedulesModal(true);
    }

    function handleCloseModal() {
        setOpenSchedulesModal(false);   
    }

    function handleScheduleSelect(scheduleSelected: ScheduleProps) {
        setSchedules(scheduleSelected);
        setOpenSchedulesModal(false);
    }

    async function handleSave() {
        const newSchedule = {
            id: JSON.stringify(Math.floor(Math.random() * 1000000000)),
            schedules,
            category,
            date: `${day}/${month} às ${hour}:${minute}h`,
            description
        }

        const storage = await AsyncStorage.getItem(COLLECTION_SCHEDULES);
        const schedule = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_SCHEDULES,
            JSON.stringify([...schedule, newSchedule])
        )

        navigation.navigate('Home');
    }
    
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Background>
                <ScrollView>
                    <Header
                        title="Agendar Lavagem"
                    />

                    <Text 
                        style={[styles.label, 
                        { marginLeft: 24, marginTop: 36, marginBottom: 18 }
                        ]}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={setCategory}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenSchedules}>

                            <View style={styles.select}>
                                
                                {
                                    schedules.icon ? <ScheduleIcon scheduleId={schedules.id} iconId={schedules.icon}/> : <View style={styles.image}/>
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        { schedules.name ? schedules.name : 'Selecione um servidor' }
                                    </Text>
                                </View>

                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />

                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>
                                    Dia/Mês
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setDay}
                                    />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMonth}
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style={styles.label}>
                                    Hora/Minuto
                                </Text>

                                <View style={styles.column}>
                                <SmallInput 
                                        maxLength={2}
                                        onChangeText={setHour}
                                    />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMinute}
                                    />
                                </View>
                            </View>
                            
                        </View>

                        <View style={[
                                styles.field,
                                { marginBottom: 12 }
                            ]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea 
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription}
                        />

                        <View style={styles.footer}>
                            <Button
                                title="Agendar"
                                onPress={handleSave}
                            />
                        </View>
                    </View>
                </ScrollView>
                <ModalView visible={openSchedulesModal} closeModal={handleCloseModal}>
                <Schedule handleScheduleSelect={handleScheduleSelect}/>
            </ModalView>
            </Background>
        </KeyboardAvoidingView>
    )
}
