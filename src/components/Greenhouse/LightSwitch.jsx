import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext'

function LightSwitch() {

  const { themeName, setThemeName } = useTheme()

  const toggleTheme = (newTheme) => {
    setThemeName(newTheme)
  }
  
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={() => {toggleTheme('day')}}>DAY</div>
      <div className="off" onClick={() => {toggleTheme('night')}}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
