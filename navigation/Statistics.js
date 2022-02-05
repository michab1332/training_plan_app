import { useLayoutEffect, useContext, useState } from "react";
import { View, StyleSheet, FlatList, Modal, Text, TextInput } from "react-native";

import ListItem from "../components/ListItem";

import { AppContext } from "../context/AppContext";

const Statistics = ({ navigation }) => {
    const { exercisesTab } = useContext(AppContext)
    const [filteredTab, setFilteredTab] = useState([])
    const [actualExercises, setActualExercises] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [search, setSearch] = useState()

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

    useLayoutEffect(() => {
        setFilteredTab(exercisesTab)
    }, [exercisesTab])

    useLayoutEffect(() => {
        if (search !== undefined) {
            let tab = exercisesTab.filter((item) => {
                return item.exerciseName.toLowerCase().includes(search.toLowerCase()) || item.date.includes(search)
            })
            setFilteredTab([...tab])
        }
    }, [search])

    const handleSetActualExercises = (obj) => {
        setActualExercises(obj)
        setModalVisible(prevState => !prevState)
    }

    const item = ({ item }) => {
        return <ListItem trainingName={item.exerciseName} trainingText={item.date} onPress={() => handleSetActualExercises(item)} buttonText="Statistics" />
    }

    const modalItem = ({ item, index }) => {
        return (
            <View style={styles.modalItems}>
                <Text style={styles.modalItemText}>{index + 1}</Text>
                <Text style={styles.modalItemText}>{item}</Text>
            </View>
        )
    }

    return (
        <View style={styles.containerBackground}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{actualExercises.exerciseName}</Text>
                        <View style={styles.modalTitleTextes}>
                            <Text style={styles.titleText}>Series</Text>
                            <Text style={styles.titleText}>Repetitions</Text>
                        </View>
                        <FlatList
                            data={actualExercises.exerciseRepetitions}
                            keyExtractor={(item, index) => index}
                            renderItem={modalItem}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <TextInput style={styles.input} value={search} onChangeText={setSearch} placeholder="search exercice..." />
                <FlatList
                    data={filteredTab}
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 40
    },
    modalView: {
        width: '80%',
        height: '70%',
        backgroundColor: '#EEF0F2',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 9,
        alignItems: 'center'
    },
    modalText: {
        marginVertical: 20,
        fontSize: 19,
        fontWeight: "bold",
        letterSpacing: 2
    },
    modalTitleTextes: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "rgba(0, 0, 0, 0.5)"
    },
    modalItems: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginVertical: 20,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderBottomWidth: 2,
        borderTopWidth: 2
    },
    modalItemText: {
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: 16,
        marginVertical: 10
    },
    input: {
        width: 220,
        height: 40,
        backgroundColor: '#EEF0F2',
        borderRadius: 50,
        marginTop: 15,
        paddingHorizontal: 20
    }
})

export default Statistics;