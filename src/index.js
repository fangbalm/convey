import React from 'react';
import ReactDOM from 'react-dom';
import './layout/style.css'
import App from './layout/App';
import { BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './layout/style.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
  