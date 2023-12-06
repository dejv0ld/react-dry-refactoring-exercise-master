import React from 'react';
import logo from './logo.svg';
import './App.css';

import BlueButton from './BlueButton';
import RedButton from './RedButton';
import YellowButton from './YellowButton';


const App = () => (
  <>
    <h2>Buttons</h2>
    <BlueButton>En blå knapp</BlueButton>
    <RedButton>En röd knapp</RedButton>
    <YellowButton>En gul knapp</YellowButton>
  </>
)

export default App;
