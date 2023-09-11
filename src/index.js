import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Імпортуйте Provider з react-redux
import store from "./redux/store"
import { BrowserRouter } from 'react-router-dom';
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </>
);

// Інші частини вашого коду залишаються незмінними
reportWebVitals();
