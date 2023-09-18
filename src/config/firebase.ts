// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyC7ju9ubQeTP6hzpvg9kDbptuwPG7lXTjA',
  authDomain: 'test-sas-cd607.firebaseapp.com',
  projectId: 'test-sas-cd607',
  storageBucket: 'test-sas-cd607.appspot.com',
  messagingSenderId: '422370297671',
  appId: '1:422370297671:web:09643ead0c907034e72e62',
  measurementId: 'G-EGCWJSQ6WZ'
}

const app = initializeApp(firebaseConfig)

export { app }
