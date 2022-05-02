import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNEGrYNoqA3q6LB9oKaHOGtQHDOohTKG0",
  authDomain: "bitslice-cec83.firebaseapp.com",
  projectId: "bitslice-cec83",
  storageBucket: "bitslice-cec83.appspot.com",
  messagingSenderId: "807330903897",
  appId: "1:807330903897:web:cd81ccd2751269a59d7e48"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export {db, auth};