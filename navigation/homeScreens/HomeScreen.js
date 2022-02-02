import { useLayoutEffect, useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { AppContext } from "../../context/AppContext";

import ListItem from "../../components/ListItem";
import Button from "../../components/Button";

const HomeScreen = ({ navigation }) => {
    const { trainingDayTab, trainingPlansTab } = useContext(AppContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#072AC8",
                height: 50
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        })
    }, [])

    const handleStartTraining = (trainingId, day) => {
        navigation.navigate('Training', { trainingId, day })
    }

    const item = ({ item }) => {
        const trainingPlan = trainingPlansTab.filter(element => element.id === item.trainingPlanId)
        return (
            <ListItem
                trainingName={item.day}
                trainingText={trainingPlan[0].trainingName}
                buttonText='Start'
                onPress={() => handleStartTraining(item.trainingPlanId, item.day)} />
        )
    }

    return (
        <View style={styles.containerBackground}>
            <View style={styles.container}>
                <FlatList
                    data={trainingDayTab}
                    keyExtractor={item => item.id}
                    renderItem={item} />
                <Button onPress={() => navigation.navigate('TrainingDayCreate')} text="Add trening day" marginBottom={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    containerBackground: {
        flex: 1,
        backgroundColor: '#072AC8',
    }
})

export default HomeScreen