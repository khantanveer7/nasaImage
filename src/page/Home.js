import React from 'react';
import Nav from '../components/Nav';
import Search from '../components/Search';
import './Home.css'

const Home = ({ src, altSrc, name }) => {
    return (
        <div className="home">
            <Nav />
            <Search />
        </div>
    )
}

export default Home
