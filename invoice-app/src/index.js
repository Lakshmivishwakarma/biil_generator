

// import ReactDOM from 'react-dom/client';
// import './index.css';
// import React from 'react';
// import App from './Component/App';
// // import SignIn from './Component/signInForm';
// import reportWebVitals from './reportWebVitals';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { Provider } from 'react-redux'
// import store, { persistor } from './Redux/Store';
// import { PersistGate } from "redux-persist/integration/react";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // connected app to the browser's URL

//   <React.StrictMode>

//     {/* <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <App />
//         </PersistGate>
//       </Provider> */}

//     {/* <PersistGate persistor={persistor}> */}
//     <Provider store={store}>
//       <App />
//     </Provider>
//     {/* </PersistGate> */}


//   </React.StrictMode>

// );

// reportWebVitals();


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './Component/App';
import store from './Redux/Store';
render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
