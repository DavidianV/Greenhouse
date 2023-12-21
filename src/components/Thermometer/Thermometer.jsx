import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect, useState } from 'react';

function Thermometer() {
  const { temperature, setTemperature } = useClimate();
  const [desiredTemp] = useState(temperature)
  useEffect(() => {
    let timeout
    if (temperature !== desiredTemp) {
      timeout = setTimeout(() => {
        setTemperature((prevTemp) => prevTemp + (desiredTemp > prevTemp ? 1 : -1))
      }, 1000)
    }
    return () => clearTimeout(timeout)
  }, [desiredTemp, temperature, setTemperature])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => setTemperature(val)}
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
