import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
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
        <View style={styles.container}>
            <Text>
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})

export default HomeScreen