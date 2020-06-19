import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  // apiKey: 'removed for security reasons',
  authDomain: 'catch-of-the-day-ryanjt.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-ryanjt.firebaseio.com/'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
