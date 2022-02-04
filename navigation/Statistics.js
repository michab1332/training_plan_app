import { useLayoutEffect, useContext, useState } from "react";
import { View, StyleSheet, FlatList, Modal } from "react-native";

import ListItem from "../components/ListItem";

import { AppContext } from "../context/AppContext";

const Statistics = ({ navigation }) => {
    const { exercisesTab } = useContext(AppContext)
    const [exercisesTabAfter, setExercisesTabAfter] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#072AC8",
                height: 40
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        })
    }, [])

    const handleSetExercisesTabAfter = (tab) => {
        setExercisesTabAfter(tab)
        console.log(exercisesTabAfter)
    }

    const item = ({ item }) => {
        return <ListItem trainingName={item.exerciseName} trainingText={item.date} onPress={() => handleSetExercisesTabAfter(item.exerciseRepetitions)} buttonText="Statistics" />
    }

    return (
        <View style={styles.containerBackground}>
            <View style={styles.container}>
                <FlatList
                    data={exercisesTab}
                    keyExtractor={item => item.id}
                    renderItem={item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    containerBackground: {
        flex: 1,
        backgroundColor: '#072AC8',
    }
})

export default Statistics;