import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1 className="text-3xl text-indigo-800">
      Welcome to Meteor + Tailwind!
    </h1>
    <Hello/>
    <Info/>
  </div>
)