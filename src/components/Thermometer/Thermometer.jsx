import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function Thermometer() {
  const { temperature, setTemperature } = useClimate();
  const [desiredTemp, setDesiredTemp] = useState(temperature)
  const handleSlideChange = (val) => {
    setDesiredTemp(val)
  }
  useEffect(() => {
    const adjustTemp = () => {
    if (temperature !== desiredTemp) {
        setTemperature((prevTemp) => prevTemp + (desiredTemp > prevTemp ? 1 : -1))
    }}

    const timeout = setTimeout(adjustTemp, 1000)

    return () => clearTimeout(timeout)
  }, [desiredTemp, temperature, setTemperature])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={desiredTemp}
        onAfterChange={handleSlideChange}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
