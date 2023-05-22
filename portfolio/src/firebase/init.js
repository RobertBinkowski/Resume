import firebase from 'firebase/app'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC8xnB5GyKhFOCoPWv-RAx2x1AT0u-Oxy8',
  authDomain: 'robert-binkowski.firebaseapp.com',
  projectId: 'robert-binkowski',
  storageBucket: 'robert-binkowski.appspot.com',
  messagingSenderId: '443261911003',
  appId: '1:443261911003:web:352677e329bac788e731fe',
  measurementId: 'G-8PFGT1K28P'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
export default db