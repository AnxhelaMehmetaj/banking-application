
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
</BrowserRouter>, document.getElementById('root'));