import React from 'react';
import {Routes, Route} from 'react-router-dom';

import FrontPage from './components/frontPage/frontPage';
import LoginPage from './components/login/LoginPage';
import RegisterForm from './components/registration/RegisterForm';
import HomePage from './components/dashboard/HomePage';
import ReservationForm from './components/table/ReservationForm';
import About from './components/dashboard/About';
import Tables from './components/table/tables';
import ContactPage from './components/dashboard/ContactPage';
import ProfilePage from './components/dropDown/ProfilePage';
import AccountPage from './components/dropDown/AccountPage';
import MenuPage from './components/menumanagement/MenuPage';
import TableReservered from './components/menumanagement/tableReservered';
import TakeAway from './components/menumanagement/TakeAway';
import Delivery from './components/menumanagement/delivery';

const App=() => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<FrontPage/>}/>
          <Route path='/RegisterForm' element={<HomePage/>}/>
          <Route path='/Log' element={<LoginPage/>} />
          <Route path='/Sign' element={<RegisterForm/>}/>
          <Route path='/Home' element={<HomePage/>}/>
          <Route path='/Home1' element={<HomePage/>}/>
          <Route path='/table' element={<ReservationForm/>}/>
          <Route path='/tables' element={<Tables/>}/>
          <Route path='/ToAbout' element={<About/>}/>
          <Route path='/ToContact' element={<ContactPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/account' element={<AccountPage/>}/>
          <Route path='/order' element={<MenuPage/>}/>
          <Route path='/reserve' element={<TableReservered/>}/>
          <Route path='/take' element={<TakeAway/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
          <Route path='/HomeGo' element={<HomePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
