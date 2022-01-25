import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ trainingName, trainingTime, buttonText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.name}>{trainingName}</Text>
                <Text style={styles.time}>Czas trwania: {trainingTime}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 80,
        backgroundColor: '#EEF0F2',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        height: '100%',
        justifyContent: 'space-evenly'
    },
    name: {
        fontSize: 19,
        fontWeight: '700'
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#072AC8'
    },
    button: {
        width: 130,
        height: '70%',
        backgroundColor: '#1E96FC',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 16
    }
})

export default ListItem;