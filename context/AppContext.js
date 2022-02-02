import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [trainingPlansTab, setTrainingPlansTab] = useState([])
    const [trainingDayTab, setTrainingDayTab] = useState([])

    const handleAddTrainingPlan = (trainingName, trainingTime, tab) => {
        setTrainingPlansTab(prevState => [...prevState, { id: prevState.length + 1, trainingName, trainingTime, exercises: tab }])
    }

    const handleSetTrainingDayTab = (day, trainingPlanId) => {
        setTrainingDayTab(prevState => [...prevState, { id: prevState.length + 1, day, trainingPlanId }])
    }
    return (
        <AppContext.Provider value={{
            trainingPlansTab,
            handleAddTrainingPlan,
            trainingDayTab,
            handleSetTrainingDayTab
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;