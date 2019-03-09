import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const config = {
  apiKey: "AIzaSyCY4X5LaFdTUcJv9ASqC0PJwJ3j7PMCTec",
  authDomain: "moksha2k19.firebaseapp.com",
  databaseURL: "https://moksha2k19.firebaseio.com",
  projectId: "moksha2k19",
  storageBucket: "moksha2k19.appspot.com",
  messagingSenderId: "843756027810"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
