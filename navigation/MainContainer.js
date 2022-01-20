import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./screens/HomeScreen";
import TrainingPlansScreen from "./screens/TrainingPlansScreen";
import Statistics from "./screens/Statistics";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#072AC8' />
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = 'home-outline'
                            } else if (route.name === 'Training Plans') {
                                iconName = 'apps-outline'
                            } else if (route.name === 'Statistics') {
                                iconName = 'stats-chart-outline'
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}>
                    <Tab.Screen name='Home' component={HomeScreen} />
                    <Tab.Screen name='Training Plans' component={TrainingPlansScreen} />
                    <Tab.Screen name='Statistics' component={Statistics} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default MainContainer