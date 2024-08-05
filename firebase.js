import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWp_QGHj2fNk-DwM3GHAv04JWAeXDDEIQ",
  authDomain: "inventory-management-6321e.firebaseapp.com",
  projectId: "inventory-management-6321e",
  storageBucket: "inventory-management-6321e.appspot.com",
  messagingSenderId: "675909783836",
  appId: "1:675909783836:web:9fa6909247b12d92e6aad9"
};

let firestore;

try {
  const app = initializeApp(firebaseConfig);
  
  firestore = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
    })
  });

  console.log("Firebase initialized successfully with offline persistence");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export { firestore };