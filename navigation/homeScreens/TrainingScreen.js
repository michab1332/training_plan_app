import { useContext, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { AppContext } from '../../context/AppContext';

import Button from '../../components/Button';

const TrainingScreen = ({ route }) => {
    const { trainingId, day } = route.params
    const { trainingPlansTab } = useContext(AppContext)
    const [numberOfRepetitions, setNumberOfRepetitions] = useState()
    const [countSerie, setCountSerie] = useState(0)
    const [countRepetition, setCountRepetition] = useState(0)

    const trainingPlan = trainingPlansTab.filter(item => item.id === trainingId)[0]
    console.log(trainingPlan)

    useLayoutEffect(() => {
        if (countRepetition >= trainingPlan.exercises[countSerie].repetitionsInSerie.length) {
            setCountSerie(prevState => prevState + 1)
            setCountRepetition(0)
        }
    }, [countRepetition])

    const handleNext = () => {
        setCountRepetition(prevState => prevState + 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={[styles.topTitle, styles.shadow]}>
                    <Text style={styles.topText}>{day}</Text>
                </View>
                <View style={[styles.topTitle, styles.shadow]}>
                    <Text style={styles.topText}>{trainingPlan.trainingName}</Text>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.mainTitleText}>{trainingPlan.exercises[countSerie].exerciseName}</Text>
                <Text style={styles.mainNumberOfSerie}>{countRepetition + 1}</Text>
                <TextInput placeholder='Number of repetitions' keyboardType='numeric' style={styles.input} value={numberOfRepetitions} onChangeText={setNumberOfRepetitions} />
            </View>
            <Button onPress={handleNext} text="next" marginBottom={20} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    top: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 75,
    },
    topTitle: {
        backgroundColor: '#1E96FC',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        borderRadius: 50
    },
    topText: {
        color: '#fff',
        fontSize: 19
    },
    main: {
        backgroundColor: '#EEF0F2',
        height: '60%',
        width: '90%',
        borderRadius: 30,
        elevation: 4,
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    mainTitleText: {
        color: '#141414',
        fontSize: 23,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    mainNumberOfSerie: {
        color: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        fontSize: 400,
        right: '-15%',
        bottom: '-10%',
    },
    input: {
        width: '60%',
        height: 40,
        backgroundColor: '#FFFBFC',
        borderRadius: 50,
        marginTop: 15,
        paddingHorizontal: 20,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 9,
    }
})

export default TrainingScreen;