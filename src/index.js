import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from './Hello.js';
// import Card from './Card';
// import CardList from './CardList';
import App2 from './App2'; //A parent for all components
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import { robots } from './robots'; //desutructed as export can have multiple variables / arrays, so not default which returns 1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <h1> Hello World</h1> 
    // <App/>
    // <Hello greeting={' Hello' + ' React Ninja'} TestParam={'testtest'}/> //greeting is a prop, accessible in Hello.js
  //  <CardList robots2={robots} />
  <App2/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
