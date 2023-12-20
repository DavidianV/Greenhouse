// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import React, {createContext, useContext, useState} from "react";

export const ClimateContext = createContext()

export function ClimateProvider({children}) {
    const [temperature, setTemperature] = useState(50)
    const value = {temperature, setTemperature}
    
    return (
        <ClimateContext.Provider value={value}>
            {children}
        </ClimateContext.Provider>
    )
}

export const useClimate = () => {useContext(ClimateContext)}