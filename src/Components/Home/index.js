import React from 'react';
import Header from './Header'
import Footer from './Footer'
const Home = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Home;