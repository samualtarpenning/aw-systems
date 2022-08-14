import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/compat/app";

firebase.initializeApp({
  apiKey: "AIzaSyBT80NnWU0G4HU5dY2lz0IBZpZF1jViI3k",
  authDomain: "auto-watering-systems.firebaseapp.com",
  projectId: "auto-watering-systems",
  storageBucket: "auto-watering-systems.appspot.com",
  messagingSenderId: "671546627362",
  appId: "1:671546627362:web:1c34d418274b9f0371817b",
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
