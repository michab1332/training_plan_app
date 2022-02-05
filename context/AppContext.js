import { createContext, useState, useLayoutEffect } from "react";
import { setItem, getItem } from "../services/LocalStorage";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [trainingPlansTab, setTrainingPlansTab] = useState([])
    const [trainingDayTab, setTrainingDayTab] = useState([])
    const [exercisesTab, setExercisesTab] = useState([])

    useLayoutEffect(() => {
        getItem('trainingPlansTab').then((item) => {
            if (item !== null) {
                setTrainingPlansTab(item)
            }
        })

        getItem('trainingDayTab').then((item) => {
            if (item !== null) {
                setTrainingDayTab(item)
            }
        })

        getItem('exercisesTab').then((item) => {
            if (item !== null) {
                setExercisesTab(item)
            }
        })
    }, [])

    useLayoutEffect(() => {
        setItem('trainingPlansTab', trainingPlansTab)
    }, [trainingPlansTab])

    useLayoutEffect(() => {
        setItem('trainingDayTab', trainingDayTab)
    }, [trainingDayTab])

    useLayoutEffect(() => {
        setItem('exercisesTab', exercisesTab)
    }, [exercisesTab])

    const handleAddTrainingPlan = (trainingName, trainingTime, tab) => {
        setTrainingPlansTab(prevState => [...prevState, { id: prevState.length + 1, trainingName, trainingTime, exercises: tab }])
    }

    const handleSetTrainingDayTab = (day, trainingPlanId) => {
        setTrainingDayTab(prevState => [...prevState, { id: prevState.length + 1, day, trainingPlanId }])
    }

    const handleSetExercisesTab = (tab) => {
        setExercisesTab(prevState => [...prevState, tab])
    }

    return (
        <AppContext.Provider value={{
            trainingPlansTab,
            handleAddTrainingPlan,
            trainingDayTab,
            handleSetTrainingDayTab,
            exercisesTab,
            handleSetExercisesTab
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;