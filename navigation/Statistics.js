import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Statistics = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#072AC8",
                height: 50
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text>Plan trenignowy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff'
    }
})

export default Statistics;