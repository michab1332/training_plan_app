import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [trainingPlansTab, setTrainingPlansTab] = useState([])
    const [trainingDayTab, setTrainingDayTab] = useState([])
    const [exercisesTab, setExercisesTab] = useState([])

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