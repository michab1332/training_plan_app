import { useContext, useState } from "react";
import { View, StyleSheet, FlatList, Modal } from "react-native";

import Button from "../../components/Button";
import ListItem from "../../components/ListItem";
import ExerciseItem from "./ExerciseItem";

import { AppContext } from "../../context/AppContext";

const TrainingPlansScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [exercisesInModal, setExercisesInModal] = useState([])
    const { trainingPlansTab } = useContext(AppContext);
    const handleOnButtonPress = () => {
        navigation.navigate('TrainingPlansCreate');
    }
    const items = ({ item }) => {
        return <ListItem onPress={() => {
            setExercisesInModal(item.exercises)
            setModalVisible(!modalVisible)
        }} trainingName={item.trainingName} trainingText={item.trainingTime} buttonText='Edit' />
    }
    const itemInModal = ({ item }) => {
        return (
            <ExerciseItem exerciseName={item.exerciseName} numberOfSeries={item.numberOfSeries} />
        );
    }
    return (
        <View style={styles.containerBackground}>
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <FlatList
                                data={exercisesInModal}
                                keyExtractor={item => item.id}
                                renderItem={itemInModal}
                            />
                        </View>
                    </View>
                </Modal>
                <FlatList
                    data={trainingPlansTab}
                    keyExtractor={item => item.id}
                    renderItem={items} />
                <Button text="Create trening plan" onPress={handleOnButtonPress} marginBottom={20} />
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 40
    },
    modalView: {
        backgroundColor: '#EEF0F2',
        borderRadius: 20,
        minHeight: '40%',
        maxHeight: '70%',
        width: '80%',
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 9,
        alignItems: 'center',
        paddingVertical: 20
    }
})

export default TrainingPlansScreen;