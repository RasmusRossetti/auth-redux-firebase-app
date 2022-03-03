import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBCw6drrF9zkd1crGfrs10GszZ5YjfyQLI',
  authDomain: 'auth-redux-live-c2983.firebaseapp.com',
  projectId: 'auth-redux-live-c2983',
  storageBucket: 'auth-redux-live-c2983.appspot.com',
  messagingSenderId: '195634385806',
  appId: '1:195634385806:web:20a83b3bc917669e904adf',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
