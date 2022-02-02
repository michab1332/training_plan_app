import { useState, useContext } from 'react';
import { View, StyleSheet, TextInput, FlatList } from "react-native";

import AddExercise from './AddExercise';
import Button from "../../components/Button";
import ExerciseItem from './ExerciseItem';

import { AppContext } from '../../context/AppContext';

const TrainingPlansScreen = ({ navigation }) => {
    const { handleAddTrainingPlan } = useContext(AppContext);

    const [trainingName, setTrainingName] = useState('');
    const [trainingTime, setTrainingTime] = useState('');
    const [exerciseName, setExerciseName] = useState('');
    const [numberOfSeries, setNumberOfSeries] = useState('');
    const [addExerciseIsVisible, setAddExerciseIsVisible] = useState(false);
    const [exerciseTab, setExerciseTab] = useState([])

    const handleChangeIsVisible = () => {
        setAddExerciseIsVisible(prevState => !prevState)
        setExerciseName('')
        setNumberOfSeries('')
    }

    const makeTabWithValues = (number) => {
        let tab = []
        for (let i = 0; i < number; i++) {
            tab.push(0)
        }
        return tab;
    }

    const handleAddExercise = () => {
        if (exerciseName !== '' && numberOfSeries !== '') {
            const tab = makeTabWithValues(numberOfSeries)
            setExerciseTab(prevState => [...prevState, { id: prevState.length + 1, exerciseName: exerciseName, numberOfSeries: numberOfSeries, repetitionsInSerie: tab }])
        }
    }

    const handleAddTraining = () => {
        if (trainingName !== '' && trainingTime !== '') {
            handleAddTrainingPlan(trainingName, trainingTime, exerciseTab)
            navigation.goBack()
        }
    }

    const items = ({ item }) => {
        return <ExerciseItem exerciseName={item.exerciseName} numberOfSeries={item.numberOfSeries} />
    }
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput placeholder='Training name...' style={styles.input} value={trainingName} onChangeText={setTrainingName} />
                <TextInput placeholder='Training time...' style={styles.input} value={trainingTime} onChangeText={setTrainingTime} />
                <View style={styles.line}></View>
                {addExerciseIsVisible ? null : <FlatList
                    data={exerciseTab}
                    keyExtractor={item => item.id}
                    renderItem={items} />}
                {addExerciseIsVisible ? null : <Button onPress={handleChangeIsVisible} text="Add exercise" outline />}
                {addExerciseIsVisible ? <AddExercise
                    numberOfSeries={numberOfSeries}
                    setNumberOfSeries={setNumberOfSeries}
                    exerciseName={exerciseName}
                    setExerciseName={setExerciseName}
                    handleChangeIsVisible={handleChangeIsVisible}
                    handleAddExercise={handleAddExercise} /> : null}
                <Button onPress={handleAddTraining} text='Create training plan' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    formContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#EEF0F2",
        width: '95%',
        borderRadius: 10,
        alignItems: 'center'
    },
    input: {
        width: 220,
        height: 40,
        backgroundColor: '#FFFBFC',
        borderRadius: 50,
        marginTop: 15,
        paddingHorizontal: 20
    },
    line: {
        width: '90%',
        height: 2,
        backgroundColor: "#C2C2C2",
        marginTop: 20
    }
})

export default TrainingPlansScreen;