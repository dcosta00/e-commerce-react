import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDsDXuwG-6TIBLzM3s3qyFbiy-sByoUxkY',
	authDomain: 'e-commercetutorial.firebaseapp.com',
	databaseURL: 'https://e-commercetutorial.firebaseio.com',
	projectId: 'e-commercetutorial',
	storageBucket: 'e-commercetutorial.appspot.com',
	messagingSenderId: '391163084066',
	appId: '1:391163084066:web:7c1f3e542f9136bfad397b',
	measurementId: 'G-KE70MV17RR'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
