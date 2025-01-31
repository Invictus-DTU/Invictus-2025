"use client"
const { createContext, useContext } = require("react");


const AppContext = createContext(null)


export const AppProvider = ({ children }) => {
    

    const store = {

    }


    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}

export const useStore = () => {
    return useContext(AppContext)
}