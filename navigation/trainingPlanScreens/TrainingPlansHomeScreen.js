import { useContext } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";

import Button from "../../components/Button";
import ListItem from "../../components/ListItem";

import { AppContext } from "../../context/AppContext";

const TrainingPlansScreen = ({ navigation }) => {
    const { trainingPlansTab } = useContext(AppContext);
    const handleOnButtonPress = () => {
        navigation.navigate('TrainingPlansCreate');
    }
    const items = ({ item }) => {
        return <ListItem onPress={() => {
            Alert.alert(item.trainingName, JSON.stringify(item.exercises), [{
                text: 'Cancel',
                style: 'cancel',
                onPress: () => console.log('cancel')
            }])
        }} trainingName={item.trainingName} trainingText={item.trainingTime} buttonText='Edit' />
    }
    return (
        <View style={styles.containerBackground}>
            <View style={styles.container}>
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
    }
})

export default TrainingPlansScreen;