import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from '../images/logo1.png';
import filler from '../images/shepherd.png';
import Subscribe from '../components/Subscribe.jsx';
import Navbar from '../components/Nav.jsx';
import BoltIcon from '@mui/icons-material/Bolt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import tree from '../images/tree.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      displayText: false
    }
    
    this.subscribe = this.subscribe.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateDisplayText = this.updateDisplayText.bind(this);
  }

  async updateEmail(input) {
    await this.setState({
      email: input
    });
  }

  async updateDisplayText() {
    await this.setState({
      displayText: false
    });
  }

  subscribe() {
    const email = this.state.email;
    console.log('LOOK HERE ', this.state.email);
    let method = 'POST';
    fetch('/api/subscribe', {
      method,
      body: JSON.stringify({ email: this.state.email }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(data => data.json())
      .then(data => {
        if (data === true) this.setState({email: '', displayText: true})
        else {
          console.log('nah boi')
        }
      }
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        
        <Navbar />
  
        <div id='blocks'>
        
          <div id="first-row">
            <div id="first-row-text"> 
              <h1>Build Faster<br/> Applications <br/> with <span id='stashql-word'>StashQL</span> </h1>
              <p>StashQL is a light-weight, open-source NPM package for <br/> improving the speed of your GraphQL.</p>
            </div>
            <div id="first-row-img">
              <img id='logo-img' src={logo}/>
            </div>
          </div>

          <div id='features'>

            <div id='feature1'>
              <div id='icon-box1'>
                <FontAwesomeIcon icon={faFeather} />
              </div>
              <h4>Improve Performance</h4>
              <h6>StashQL caches the data returned from your GraphQL queries to improve the performacne of your application</h6>
            </div>

            <div id='feature2'>
              <div id='icon-box2'>
                <FontAwesomeIcon icon={faBolt} />              
              </div>
              <h4>Improve Performance</h4>
              <h6>StashQL caches the data returned from your GraphQL queries to improve the performacne of your application</h6>
            </div>

            <div id='feature2'>
              <div id='icon-box3'>
                <FontAwesomeIcon icon={faTerminal} />
              </div>
              <h4>Improve Performance</h4>
              <h6>StashQL caches the data returned from your GraphQL queries to improve the performacne of your application</h6>
            </div>
          </div>
  
            <div id='second-row'>
              <div id="second-row-img">  
                <img className='filler-img' src={filler}/>
              </div>
              <div id="second-row-text">
                <div>
                  <h3>What StashQL can offer</h3>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
                </div>
              </div>
            </div>

            <div id='third-row'>
              <div id="third-row-text">
                <div>
                  <h3>What StashQL can offer</h3>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
                </div>
              </div>
              <div id="third-row-img">  
                <img className='filler-img' src={filler}/>
              </div>
            </div>

            <div id='fourth-row'>
              <div id="second-row-img">  
                <img className='filler-img' src={filler}/>
              </div>
              <div id="second-row-text">
                <div>
                  <h3>What StashQL can offer</h3>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
                </div>
              </div>
            </div>
          
        </div>
  
        <div id='subscribeBox'>
          <Subscribe subscribe={this.subscribe} updateEmail={this.updateEmail} email={this.state.email} displayText={this.state.displayText} updateDisplayText={this.updateDisplayText}/>
        </div>
      </div>
    );
  }
}

export default Home;