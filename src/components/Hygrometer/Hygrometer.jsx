import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimate } from '../../context/ClimateContext';
import { useState, useEffect } from 'react';



function Hygrometer() {

  const {humidity, setHumidity} = useClimate();
  const [desiredHumidity, setDesiredHumidity] = useState(humidity)
  const handleSlideChange = (val) => {
    setDesiredHumidity(val)
  }
  useEffect(() => {
    const adjustHumidity = () => {
    if (humidity !== desiredHumidity) {
        setHumidity((prevHumidity) => prevHumidity + (desiredHumidity > prevHumidity ? 2 : -2))
    }}
    

    const timeout = setTimeout(adjustHumidity, 1000)

    return () => clearTimeout(timeout)
  }, [desiredHumidity, humidity, setHumidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desiredHumidity}
        onAfterChange={handleSlideChange}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
