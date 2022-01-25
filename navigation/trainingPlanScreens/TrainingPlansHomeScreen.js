import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";
import ListItem from "../../components/ListItem";

const TrainingPlansScreen = ({ navigation }) => {
    const handleOnButtonPress = () => {
        navigation.navigate('TrainingPlansCreate');
    }
    return (
        <View style={styles.container}>
            <ListItem trainingName="Nogi" trainingTime={1.5} buttonText='Edit training' />
            <Button text="Create trening plan" onPress={handleOnButtonPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff'
    }
})

export default TrainingPlansScreen;