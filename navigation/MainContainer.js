import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from "./homeScreens/HomeStackScreen";
import TrainingPlansStackScreen from "./trainingPlanScreens/TrainingPlansStackScreen";
import Statistics from "./Statistics";
import AppProvider from "../context/AppContext";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <AppProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#072AC8' />
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'Home') {
                                    iconName = focused ? 'home' : 'home-outline'
                                } else if (route.name === 'Training Plans') {
                                    iconName = focused ? 'apps' : 'apps-outline'
                                } else if (route.name === 'Statistics') {
                                    iconName = focused ? 'stats-chart' : 'stats-chart-outline'
                                }
                                return <Ionicons name={iconName} size={size * 1.2} color={color} />;
                            }
                        })}
                    >
                        <Tab.Screen name='Home' component={HomeStackScreen} />
                        <Tab.Screen name='Training Plans' component={TrainingPlansStackScreen} />
                        <Tab.Screen name='Statistics' component={Statistics} />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </AppProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default MainContainer