import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [trainingPlansTab, setTrainingPlansTab] = useState([
        {
            id: 1,
            nameOfTraining: 'Nogi',
            timeOfTaining: '1.5h'
        },
        {
            id: 2,
            nameOfTraining: 'Nogi',
            timeOfTaining: '1.5h'
        },
        {
            id: 3,
            nameOfTraining: 'Nogi',
            timeOfTaining: '1.5h'
        }
    ])
    return (
        <AppContext.Provider value={{
            trainingPlansTab
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;