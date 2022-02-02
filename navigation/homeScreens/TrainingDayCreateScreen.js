import { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppContext } from '../../context/AppContext';

import InputSelect from '../../components/InputSelect';
import Button from '../../components/Button';

const DATA = [
    {
        id: 1,
        name: 'Poniedziałek'
    },
    {
        id: 2,
        name: 'Wtorek'
    },
    {
        id: 3,
        name: 'Środa'
    },
    {
        id: 4,
        name: 'Czwartek'
    },
    {
        id: 5,
        name: 'Piątek'
    },
    {
        id: 6,
        name: 'Sobota'
    },
    {
        id: 7,
        name: 'Niedziela'
    }
]

const TrainingDayCreate = ({ navigation }) => {
    const { trainingPlansTab, handleSetTrainingDayTab } = useContext(AppContext)
    const [trainingDay, setTrainingDay] = useState()
    const [trainingPlanId, setTrainingPlanId] = useState()

    const handleSetTrainingDay = (name) => {
        setTrainingDay(name)
    }

    const handleSetTrainingPlanId = (id) => {
        setTrainingPlanId(id)
    }

    const handleAddTrainingDay = () => {
        if (trainingDay !== undefined && trainingPlanId !== undefined) {
            handleSetTrainingDayTab(trainingDay, trainingPlanId)
            navigation.goBack()
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <InputSelect data={DATA} text="select a training day" handleSelectItem={handleSetTrainingDay} />
                <InputSelect data={trainingPlansTab} text="select a training plan" handleSelectItem={handleSetTrainingPlanId} />
                <Button onPress={handleAddTrainingDay} text="Add training day" />
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
    formWrapper: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#EEF0F2",
        width: '95%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

export default TrainingDayCreate;