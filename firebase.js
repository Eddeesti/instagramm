import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  collectionGroup,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQ6trwQ9rwZO0tHDssc1yxdlhX_6rKxl0",
  authDomain: "instagram-a6f8d.firebaseapp.com",
  databaseURL: "https://instagram-a6f8d-default-rtdb.firebaseio.com",
  projectId: "instagram-a6f8d",
  storageBucket: "instagram-a6f8d.appspot.com",
  messagingSenderId: "292376794581",
  appId: "1:292376794581:web:e9a7ffa88f58a70114d95c",
  measurementId: "G-XX1F00ZGE4"
}

if (!getApps().length) initializeApp(firebaseConfig)

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  collectionGroup,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  getDocs,
  setDoc,
  doc,
  arrayUnion,
  arrayRemove,
  updateDoc,
}
