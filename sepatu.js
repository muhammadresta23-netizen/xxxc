// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8kdfP4PvpJQpvlp8U0wNQg6_MFklxoSg",
  authDomain: "sitecraft-store.firebaseapp.com",
  projectId: "sitecraft-store",
  storageBucket: "sitecraft-store.firebasestorage.app",
  messagingSenderId: "260694827437",
  appId: "1:260694827437:web:0bd425d9024ece05d68124",
  measurementId: "G-JE05WFJ738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// GOOGLE LOGIN
function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(() => {
        alert("Login Google berhasil");
        window.location.href = "shop.html";
    })
    .catch(err => alert(err.message));
}

// EMAIL LOGIN
function loginEmail() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
        alert("Login berhasil");
        window.location.href = "shop.html";
    })
    .catch(err => alert(err.message));
}

