import "@babel/polyfill";
import React from 'react';
import {render} from 'react-dom';
import data from './data.json';
import App from './App';

let title='react open library';
let headings=['when','who','description'];
render(<App data={data} title={title} headings={headings}/>, document.getElementById('app'));
