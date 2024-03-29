import React from 'react';
// import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import App from './App';
import './index.css'
import {reducers} from './reducers';
const store=createStore(reducers,compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>

)