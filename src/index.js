import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}> 
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// client side rendered app: react (cra)
  // -> database is Firebase
  // -> react-loading-skeleton
  // tailwind for styling

// folder structure
  // src
    // -> components, 
    // -> constants, 
    // -> context, 
    // -> helpers,
    // -> hooks, 
    // -> lib(Firebase lives here), 
    // -> services(Firebase functions)
    // -> styles (tailwind (app/tailwind))