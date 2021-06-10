import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAdguGM9NlUhuOrEfex7JmfikaJRPhk7R0",
    authDomain: "saft-fbd9e.firebaseapp.com",
    projectId: "saft-fbd9e",
    storageBucket: "saft-fbd9e.appspot.com",
    messagingSenderId: "61807098480",
    appId: "1:61807098480:web:cdccef7cdf1974ddfe52b5"
  };
 
firebase.initializeApp(firebaseConfig);

export const auth  = firebase.auth()
const db = firebase.firestore()
db.settings({timestampsInSnapShots:true})
export {db}
export default firebase