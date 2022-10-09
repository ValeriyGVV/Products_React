import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import {Badge} from 'react-bootstrap'


function ChangeTheme() {
  const {theme, setTheme} = useContext(ThemeContext);
  return <div>
    <h4>currentTheme: {theme}</h4>
    <Badge variant="light" onClick={() => setTheme('bg-light text-dark')}>Light</Badge>
    <Badge variant="dark" className={'ml-3'} onClick={() => setTheme('bg-dark text-light')}>Dark</Badge>
  </div>;
}

export default ChangeTheme;