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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
