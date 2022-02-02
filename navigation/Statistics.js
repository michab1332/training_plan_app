import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Statistics = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#072AC8",
                height: 35
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        })
    }, [])

    return (
        <View style={styles.containerBackground}>
            <View style={styles.container}>
                <Text>Plan trenignowy</Text>
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
    }
})

export default Statistics;