import React, { Component } from 'react';

const Subscribe = (props) => {
  return (
    <div>
      <h3>Stay updated</h3>
      <h5>StashQL is constantly being improved on by our team of engineers. If you'd like to stay updated on all the changes to come, subscribe for our newsletter!</h5>
      <input className='subscribeBox'
          placeholder='Enter your email'
          type='text'
      />
      <button id='subscribeButton' onClick={() => {props.subscribe()}}>
        Subscribe
      </button>
    </div>
  )
};

export default Subscribe;