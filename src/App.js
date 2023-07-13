import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import FrontPage from './components/frontPage/frontPage';
import LoginPage from './components/login/LoginPage';
import RegisterForm from './components/registration/RegisterForm';
import HomePage from './components/dashboard/HomePage';
import ReservationForm from './components/table/ReservationForm';
import About from './components/dashboard/About';
import Tables from './components/table/tables';
const App=() => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Log' element={<LoginPage/>} />
          <Route path='/Sign' element={<RegisterForm/>}/>
          <Route path='/Home' element={<HomePage/>}/>
          <Route path='/Home1' element={<HomePage/>}/>
          <Route path='/table' element={<ReservationForm/>}/>
          <Route path='/tables' element={<Tables/>}/>
          <Route path='/ToAbout' element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
