import React, { useCallback, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { ListHeader } from '../../components/ListHeader';
import { Schedules, SchedulesProps } from "../../components/Schedules";
import ListDivider from "../../components/ListDivider";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_SCHEDULES } from "../../configs/database";
import Load from "../../components/Load";
import { Background } from "../../components/Background";

export function Home() {
    const [category, setCategory] = useState('');
    const [schedules, setSchedules] = useState<SchedulesProps[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    async function loadSchedules() {
        const response = await AsyncStorage.getItem(COLLECTION_SCHEDULES);
        const storage: SchedulesProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setSchedules(storage.filter(item => item.category === category));
        } else {
            setSchedules(storage);
        }

        setLoading(false);
    }

    function handleCategorySelect(categoryId: string) {
        category === categoryId ? setCategory('') : setCategory(categoryId);
    }

    // async function handleSchedulesDetails(guildSelected: SchedulesProps) {
        // navigation.navigate('SchedulesDetails', { guildSelected });
    // }

    // recarrega a lista sempre que seleciona uma nova categoria
    useFocusEffect(useCallback(()=> {
        loadSchedules();
    },[category]))

    return (
        <Background>
            <View style={styles.header}>
                <Profile/>
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {
                loading
                ?
                <Load/>
                :
                <View style={styles.body}>
                    <ListHeader
                        title="Lavagens"
                        subtitle={`Total ${schedules.length}`}
                    />

                    <FlatList
                            data={schedules}
                            keyExtractor={item => item.id}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={() => <ListDivider/>}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            renderItem={({ item }) => (
                                <Schedules 
                                    data={item}
                                    // onPress={() => handleSchedulesDetails(item)}
                                />
                            )}
                        />
                </View>
            }
        </Background>
    );
}