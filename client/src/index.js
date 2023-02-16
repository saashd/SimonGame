import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./redux/store";

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}api/`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>);