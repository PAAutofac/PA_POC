import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Home from './Home';
import Layout from './Layout';

render(
 <Layout />,
  document.getElementById('root')
);

//<Home color="#78a02e" msg="Welcome to the NaturalONE QAT environment"></Home>,
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

