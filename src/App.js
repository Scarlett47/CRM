
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidenav from './Sidenav';
import Dashboard from './pages/Dashboard'
import Email from './pages/Email'
import Tasks from './pages/Tasks';
import Contact from './pages/Contact'
import Chat from './pages/Chat';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sidenav/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Email' element={<Email/>}/>
        <Route path='/Tasks' element={<Tasks/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Chat' element={<Chat/>}/>
        <Route path='/Settings' element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  );
};
