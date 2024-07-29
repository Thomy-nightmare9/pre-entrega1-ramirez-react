import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDi60bGRVqBLm1V2XAd4p_1zsfEseL8kv8",
    authDomain: "zona-timbos.firebaseapp.com",
    projectId: "zona-timbos",
    storageBucket: "zona-timbos.appspot.com",
    messagingSenderId: "1180995138",
    appId: "1:1180995138:web:9ad0fcedc430febbc367db"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;