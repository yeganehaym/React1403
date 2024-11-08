import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./Counter";
import {Movies} from "./Movies";
import {RatingBar} from "./RatingBar";
import {Test} from "./Test";
import {Buttons} from "./Buttons";
import {Like} from "./Like";
import {Login} from "./Login";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Login/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
