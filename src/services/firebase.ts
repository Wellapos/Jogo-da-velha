import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const analytics = getAnalytics(app);

export { firebase, auth, analytics };
