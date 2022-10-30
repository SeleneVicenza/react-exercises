import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import Root from './Root';
import './index.css';
import { BrowserRouter } from "react-router-dom";


// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //   <React.StrictMode>
    //     <App />
    //   </React.StrictMode>
    <BrowserRouter >
        <App />
    </BrowserRouter >
);

// root.render( <App />);
// root.render(<Root />);