import React from 'react';
import Hero from './Hero';
import Blog from '../Blog/MainBlog';
import About from '../About/AboutMain';
import Service from '../Services/MainPage';
import Project from '../Projects/MainProject';
import Contact from '../Contact/ContactMain';
import Admin from './Admin';
import InputAlert from './InputAlert';

const Home = () => {
    return (
        <>
            <Hero/>
            <Admin/>
            <InputAlert/>
        </>
    );
};

export default Home;