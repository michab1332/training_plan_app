import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, onPress, outline, marginBottom }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={[outline ? styles.containerOutline : styles.container, { marginBottom: marginBottom }]}>
            <Text style={outline ? styles.blueText : styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: 90,
        height: 45,
        backgroundColor: "#072AC8",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 1,
        elevation: 4,
    },
    containerOutline: {
        minWidth: 150,
        height: 45,
        backgroundColor: "#fff",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#072AC8'
    },
    text: {
        color: "#FFFBFC",
        fontWeight: 'bold'
    },
    blueText: {
        color: "#072ACB",
        fontWeight: 'bold'
    }
})

export default Button;