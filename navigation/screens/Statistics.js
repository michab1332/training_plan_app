import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Statistics = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#072AC8",

            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        })
    }, [])

    return (
        <View>
            <Text>Plan trenignowy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})

export default Statistics;