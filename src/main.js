import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store'
import "firebase/firestore"

import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAySBY63mo7m2qNYEK6IynzfpIP75L_lDg",
    authDomain: "unvoit-app.firebaseapp.com",
    projectId: "unvoit-app",
    storageBucket: "unvoit-app.appspot.com",
    messagingSenderId: "503180523243",
    appId: "1:503180523243:web:de130e5f0239418b5e30ae",
    measurementId: "G-7DM6SMT6H2"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  createApp(App).use(store).use(router).mount('#app')

export default firebaseApp.firestore()