import firebase from 'firebase';

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbcI-YwY0qdt0iXeD6yFBbTLvmj3GpRPo",
    authDomain: "signal-clone-6b78d.firebaseapp.com",
    projectId: "signal-clone-6b78d",
    storageBucket: "signal-clone-6b78d.appspot.com",
    messagingSenderId: "483035769493",
    appId: "1:483035769493:web:afa1ab6bcb66ac96f3499c"
};

let app;

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };





