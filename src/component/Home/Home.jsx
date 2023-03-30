import React from 'react';
import './Home.css'
import logo from '../../img/person 3.png';

const Home = () => {
    return (
        <div className='home'>
            <div className="navber">
                <div className="nav-title">
                    <h3>Knowledge Cafe</h3>
                </div>
                <div className="logo-img">
                    <img src={logo} alt='logo'/>
                </div>
            </div>
        </div>
    );
};

export default Home;