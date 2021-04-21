import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file here
import { seedDatabase } from '../seed';

const config ={
    apiKey: "AIzaSyDTZAxjBXWek6O9eTEK0DX7n2aZOaVtYho",
    authDomain: "instaclone-2f465.firebaseapp.com",
    projectId: "instaclone-2f465",
    storageBucket: "instaclone-2f465.appspot.com",
    messagingSenderId: "1056614841345",
    appId: "1:1056614841345:web:45f4b3372841df05809400"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call seed file here (called, don't touch again)
// seedDatabase(firebase);

export { firebase, FieldValue };
