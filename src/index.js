import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux'
import firebase from 'firebase/compat/app'
import thunk from 'redux-thunk';
import {
  ReactReduxFirebaseProvider,getFirebase
} from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore' 
import fbConfig from './config/fbConfig'
// import { fbApp } from './config/fbConfig';
// import firebaseConfig from './config/fbConfig';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(fbConfig)))

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
 
    <App />
  
  </ReactReduxFirebaseProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
