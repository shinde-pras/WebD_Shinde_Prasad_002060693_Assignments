import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for createRoot
import App from './App';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import your Redux store
import { BrowserRouter } from 'react-router-dom';

// Create a root for React 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Wrap your app in the Provider and render it
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
