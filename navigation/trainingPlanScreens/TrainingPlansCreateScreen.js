import { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";

import AddExercise from './AddExercise';
import Button from "../../components/Button";

const TrainingPlansScreen = () => {
    const [trainingName, setTrainingName] = useState('');
    const [exerciseName, setExerciseName] = useState('');
    const [trainingTime, setTrainingTime] = useState('');
    const [numberOfSeries, setNumberOfSeries] = useState('');
    const [addExerciseIsVisible, setAddExerciseIsVisible] = useState(false);
    const handleChangeIsVisible = () => {
        setAddExerciseIsVisible(prevState => !prevState)
        setExerciseName('')
        setNumberOfSeries('')
    }
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput placeholder='Training name...' style={styles.input} value={trainingName} onChangeText={setTrainingName} />
                <TextInput placeholder='Training time...' style={styles.input} value={trainingTime} onChangeText={setTrainingTime} />
                <View style={styles.line}></View>
                {addExerciseIsVisible ? null : <Button onPress={handleChangeIsVisible} text="Add exercise" outline />}
                {addExerciseIsVisible ? <AddExercise
                    numberOfSeries={numberOfSeries}
                    setNumberOfSeries={setNumberOfSeries}
                    exerciseName={exerciseName}
                    setExerciseName={setExerciseName}
                    handleChangeIsVisible={handleChangeIsVisible} /> : null}
                <Button text='Create training plan' />
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
        borderRadius: 5,
        marginTop: 15,
        paddingHorizontal: 5
    },
    line: {
        width: '90%',
        height: 2,
        backgroundColor: "#C2C2C2",
        marginTop: 20
    }
})

export default TrainingPlansScreen;