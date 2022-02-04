import { createStackNavigator } from '@react-navigation/stack';
import { useLayoutEffect } from 'react';

import HomeScreen from './HomeScreen';
import TrainingDayCreate from './TrainingDayCreateScreen';
import TrainingScreen from './TrainingScreen';
import TrainingFinishScreen from './TrainingFinishScreen';

const Stack = createStackNavigator();

const TrainingPlansStackScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#072AC8",
                height: 40
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        })
    }, [])

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="TrainingDayCreate" component={TrainingDayCreate} />
            <Stack.Screen name="Training" component={TrainingScreen} />
            <Stack.Screen name="TrainingFinish" component={TrainingFinishScreen} />
        </Stack.Navigator>
    )
}

export default TrainingPlansStackScreen;