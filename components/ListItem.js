import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ trainingName, trainingText, buttonText, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={[styles.text, styles.shadow]}>
                    <Text style={styles.name}>{trainingName}</Text>
                </View>
                <View style={[styles.text, styles.shadow]}>
                    <Text style={styles.time}>{trainingText}</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => onPress()} style={[styles.button, styles.shadow]}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 150,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 15,
        //backgroundColor: "#EEF0F2",
    },
    top: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    text: {
        width: '40%',
        height: '70%',
        backgroundColor: '#1E96FC',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        color: "#fff",
        fontWeight: 'bold'

    },
    time: {
        color: '#fff',
        fontWeight: 'bold'

    },
    bottom: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        height: '70%',
        backgroundColor: '#072AC8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 16
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 9,
    }
})

export default ListItem;