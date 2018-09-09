import * as Firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9QbR0r5VQ_hM4_3138tiGSOAbCigWjxE",
  authDomain: "supermed-dcb78.firebaseapp.com",
  databaseURL: "https://supermed-dcb78.firebaseio.com",
  projectId: "supermed-dcb78",
  storageBucket: "supermed-dcb78.appspot.com",
  messagingSenderId: "313793256402"
};
const firebaseApp = Firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();
