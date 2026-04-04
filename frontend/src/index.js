import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutContentProvider } from './content/WorkoutContent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutContentProvider>
      <App />
    </WorkoutContentProvider>
  </React.StrictMode>
);