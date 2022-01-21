import { createStackNavigator } from '@react-navigation/stack';
import { useLayoutEffect } from 'react';

import TrainingPlansHomeScreen from './TrainingPlansHomeScreen';
import TrainingPlansCreateScreen from './TrainingPlansCreateScreen';

const Stack = createStackNavigator();

const TrainingPlansStackScreen = ({ navigation }) => {
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TrainingPlansHome" component={TrainingPlansHomeScreen} />
            <Stack.Screen name="TrainingPlansCreate" component={TrainingPlansCreateScreen} />
        </Stack.Navigator>
    )
}

export default TrainingPlansStackScreen;