import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/AboutMain';
import Blog from './pages/Blog/MainBlog';
import Contact from './pages/Contact/ContactMain';
import Project from './pages/Projects/MainProject';
import Service from './pages/Services/MainPage';
import Undefine from './pages/Undefine';
import AppNav from './components/AppNav';
import Header from './components/Header';
import Footer from './components/Footer';
import './global.css'


const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/about' element={<About/>}/> 
              <Route path='/blog' element={<Blog/>}/> 
              <Route path='/contact' element={<Contact/>}/> 
              <Route path='/project' element={<Project/>}/> 
              <Route path='/service' element={<Service/>}/> 
              <Route path='*' element={<Undefine/>}/> 
          </Routes>
          <Footer/>
        </BrowserRouter>
        
    </div>
  );
};

export default App;