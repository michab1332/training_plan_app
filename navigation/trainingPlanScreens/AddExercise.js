import { View, StyleSheet, TextInput } from "react-native";

import Button from "../../components/Button";

const AddExercise = ({ numberOfSeries, setNumberOfSeries, exerciseName, setExerciseName, handleChangeIsVisible }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Exercise name...' style={styles.input} value={exerciseName} onChangeText={setExerciseName} />
            <TextInput keyboardType="numeric" placeholder='Number of series' style={styles.input} value={numberOfSeries} onChangeText={setNumberOfSeries} />
            <Button onPress={handleChangeIsVisible} text="Add exercise" outline />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        backgroundColor: "#FFFBFC",
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: 220,
        height: 40,
        backgroundColor: '#EEF0F2',
        borderRadius: 5,
        marginTop: 15,
        paddingHorizontal: 5
    }
})

export default AddExercise;