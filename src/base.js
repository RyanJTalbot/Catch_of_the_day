import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCjVf8d_KIDuL-5IiuUAyheGktYt1q3V7M',
  authDomain: 'catch-of-the-day-ryanjt.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-ryanjt.firebaseio.com/'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
