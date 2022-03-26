import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBA8ds7UOo8sobW3AlonVe7HEBRy-LIrG0",
    authDomain: "signal-clone-yt-build-47e44.firebaseapp.com",
    projectId: "signal-clone-yt-build-47e44",
    storageBucket: "signal-clone-yt-build-47e44.appspot.com",
    messagingSenderId: "861545482522",
    appId: "1:861545482522:web:5a33575f37d436903484a3"
};
let app;
if(firebase.apps.length ===0){
      app = firebase.initializeApp(firebaseConfig)
}else{
      app = firebase.app()
}
const db = app.firestore()
const auth = firebase.auth()
export {db,auth}