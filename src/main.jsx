import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/font-awesome-pro-main/css/all.min.css';
import './assets/font-awesome-pro-main/css/solid.min.css';
import App from './App';
// import InfoContextProvider from './contexts/InfoContext';
import InfoContextProvider from './contexts/InfoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <InfoContextProvider>
        <App />
    </InfoContextProvider>
);
