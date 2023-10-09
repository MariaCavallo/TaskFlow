import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Home from './Components/Pages/Home/Home.tsx'
import { Provider } from 'react-redux'
import store from './Components/redux/store.ts'
import ToDoPage from './Components/Pages/ToDo\'s/ToDoPage.tsx'

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                <Route element={<App/>}>
                  <Route index path='/home' element={<Home/>}/>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/todosPage' element={<ToDoPage />}/>
                </Route>
              </Routes>
          </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
)
