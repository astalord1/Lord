
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCv3cLpK8hDAiPhws0Kiz9nos3FmojV1B4",
    authDomain: "tcc-ufms.firebaseapp.com",
    projectId: "tcc-ufms",
    storageBucket: "tcc-ufms.appspot.com", // ✅ corrigido
    messagingSenderId: "390573199091",
    appId: "1:390573199091:web:5dfbbe8f99ee628d977186",
    measurementId: "G-0VNP7597XC"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços necessários
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;