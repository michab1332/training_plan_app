import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const InputSelect = ({ data, text, handleSelectItem }) => {
    const [selectedItem, setSelectedItem] = useState()

    const item = ({ item, index }) => {
        return (
            <Text onPress={() => {
                console.log(item.name || item.trainingName)
                setSelectedItem(index)
                if (item.name) {
                    handleSelectItem(item.name)
                } else {
                    handleSelectItem(item.id)
                }
            }} style={index === selectedItem ? styles.selectedItem : styles.itemText}>{item.name || item.trainingName}</Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{text}</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        minHeight: 120,
        maxHeight: 270,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 10
    },
    titleText: {
        color: 'rgba(0, 0, 0, 0.4)'
    },
    itemText: {
        color: '#072AC8',
        paddingVertical: 10
    },
    selectedItem: {
        color: '#072AC8',
        paddingVertical: 10,
        fontWeight: 'bold'
    }
})

export default InputSelect;