import * as firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyACuO5r51mHPAr9A5MZs9Gx8psDEVPjTjQ",
    authDomain: "notesapp-b3776.firebaseapp.com",
    databaseURL: "https://notesapp-b3776.firebaseio.com",
    projectId: "notesapp-b3776",
    storageBucket: "notesapp-b3776.appspot.com",
    messagingSenderId: "472216752845",
    appId: "1:472216752845:web:1d05c9b0abefeb263e4f84",
    measurementId: "G-EVG2PNHEN7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export default database;