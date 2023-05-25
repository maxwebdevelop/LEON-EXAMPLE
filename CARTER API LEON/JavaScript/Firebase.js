// CHANGE THE FIREBASE CONFIGURATION
let firebaseConfig = {
  apiKey: "AIzaSyAaJ2_i6e85Hp3eMEinKOXtkY2lSh83h0Y",
  authDomain: "basic-leon.firebaseapp.com",
  databaseURL: "https://basic-leon-default-rtdb.firebaseio.com",
  projectId: "basic-leon",
  storageBucket: "basic-leon.appspot.com",
  messagingSenderId: "783456560089",
  appId: "1:783456560089:web:88fb34c4dc3e13b1ce6fc8",
  measurementId: "G-CPF3FNQ84K",
};

firebase.initializeApp(firebaseConfig);

// If you want to store anything enable your RealtimeDatabse infisde the Firebase
// change the rules for reading and writting to true
