import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import Button from "../../components/Button";

const HomeScreen = ({ navigation }) => {
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
            <Button text="Add trening day" />
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

export default HomeScreen