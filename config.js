import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDvJsB1hukTGuCcurADonuC_WWi0r1cDOA",
    authDomain: "barterapp-f1030.firebaseapp.com",
    projectId: "barterapp-f1030",
    storageBucket: "barterapp-f1030.appspot.com",
    messagingSenderId: "599608945286",
    appId: "1:599608945286:web:5c906f09f65faf6e31ff07",
    measurementId: "G-731F6PL2HL"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase.firestore();