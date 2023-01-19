import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import S39Provider from './contexts/S39GlobalContext';
import AdminProvider from './contexts/AdminContext';
import KycProvider from './contexts/KycContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminProvider>
      <S39Provider>
        <KycProvider>
          <App />
        </KycProvider>
      </S39Provider>
    </AdminProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
