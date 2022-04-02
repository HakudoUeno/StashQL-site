import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav.jsx'
import logo from './images/logo1.png';
import filler from './images/filler.png';
import Subscribe from './Subscribe.jsx';

const Home = () => {
  return (
    <div>
      <Nav />
        <div id="first-row">
          <div id="one-text">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          </div>
          <div id="two-image">
            <img id='logo-img' src={logo}/>
          </div>
        </div>

      <div id='second-row'>
        <div id="one-image">  
          <img className='filler-img' src={filler}/>
        </div>
        <div id="two-text">
          <div>
            <h2>What StashQL can offer</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          </div>
        </div>
      </div>

      <div id='third-row'>
        <div id="one-text">
          <div>
            <h2>Improve your application's performance</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          </div>
        </div>
        <div id="two-image">
          <img className='filler-img' src={filler}/>
        </div>
      </div>

      <div id='fourth-row'>
        <div id="one-image"> 
          <img className='filler-img' src={filler}/>
        </div>
        <div id="two-text">
          <div>
            <h2>Improve your application's performance</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          </div>
        </div>
      </div>

      <div id='subscribeBox'>
        <Subscribe />
      </div>
    </div>
  );
}

export default Home;