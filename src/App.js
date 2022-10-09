import Products from "./components/Products";
import {Container, Row} from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";
import SingleProduct from "./components/SingleProduct";
import ThemeContext from "./context/ThemeContext";
import {useEffect, useState} from "react";
import Notifications from "./components/Notifications";

function App() {
  const [theme, setTheme] = useState('bg-light text-dark');
  const [user, setUser] = useState({});
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('shop_user')) {
      const savedUser = JSON.parse(localStorage.getItem('shop_user'))
      setUser(savedUser);
    }
    localStorage.setItem('shop_user', JSON.stringify({...user}));
  }, []);

  return <BrowserRouter>
    <ThemeContext.Provider value={{theme, setTheme, user, alerts, setAlerts}}>
      <Header />
      <Notifications alerts={alerts} setAlerts={setAlerts}/>
      {/*<CustomButton title={"hello"}/>*/}
      <Container className={`p-4 ${theme}`}>
        <Row>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}>
              <Route path={':productId'} element={<SingleProduct />}></Route>
            </Route>
            <Route path="/registration" element={<Profile user={user} setUser={setUser} />}></Route>
            <Route path="/contact-us" element={<ContactUs />}></Route>
            <Route path="*" element={<h3>Page not found</h3>}></Route>
          </Routes>
        </Row>
      </Container>
    </ThemeContext.Provider>
  </BrowserRouter>
}

export default App;