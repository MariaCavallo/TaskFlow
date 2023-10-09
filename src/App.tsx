import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { NavBar } from './Components/Common/NavBar/NavBar'
import Footer from './Components/Common/Footer/Footer'
import DarkModeToggle from './Components/Utils/DarkMode';

function App() {  
  const location = useLocation();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home')
    }
  })
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  };
  
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <NavBar />
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default App
