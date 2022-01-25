import { View, StyleSheet, Text } from 'react-native';

const ExerciseItem = ({ exerciseName, numberOfSeries }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{exerciseName}</Text>
            <Text style={styles.series}>Number of series: {numberOfSeries}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 250,
        backgroundColor: '#FFFBFC',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        padding: 10,
        margin: 10
    },
    name: {
        fontSize: 17,
        fontWeight: '700'
    },
    series: {
        color: '#072AC8'
    }
})

export default ExerciseItem;