import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB0zr0PH6pk23rFcUE3CUDDI3ItgsUQWmM',
  authDomain: 'are-we-playing.firebaseapp.com',
  databaseURL: 'https://are-we-playing.firebaseio.com',
  projectId: 'are-we-playing',
  storageBucket: '',
  messagingSenderId: '553759530731'
};

firebase.initializeApp(config);

export default firebase;
