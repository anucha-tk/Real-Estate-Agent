import { getApps, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { FirebaseStorage, getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_CONFIG_APP_ID,
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
