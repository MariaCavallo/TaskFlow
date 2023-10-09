import { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { NavBar } from './Components/Common/NavBar/NavBar'
import Footer from './Components/Common/Footer/Footer'
import DarkModeToggle from './Components/Utils/DarkMode';
import Home from './Components/Pages/Home/Home';
import ToDoPage from './Components/Pages/ToDo\'s/ToDoPage';
import { Provider } from 'react-redux';
import store from './Components/redux/store';

function App() {  
  const location = useLocation();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home')
    }
  }, [location, navigate])
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  };
  
  return (
    <Provider store={store}>
      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
          <NavBar />
          <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode}/>
          <Routes>
            <Route index path="/home" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/todosPage" element={<ToDoPage/>}/>
          </Routes>
          <Footer />
      </div>
    </Provider>
  )
}

export default App
