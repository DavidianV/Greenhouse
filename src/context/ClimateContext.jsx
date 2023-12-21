// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import React, {createContext, useContext, useState} from "react";

export const ClimateContext = createContext()

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({children}) {
    const [temperature, setTemperature] = useState(100)
    const [humidity, setHumidity] = useState(40)

    return (
        <ClimateContext.Provider value={{temperature, setTemperature, humidity, setHumidity}}>
            {children}
        </ClimateContext.Provider>
    )
};