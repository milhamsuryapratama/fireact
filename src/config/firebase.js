import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBhTI-Ir6euGY99nG0SsjBbGOfqkC2tv14",
    authDomain: "todoapp-1de54.firebaseapp.com",
    databaseURL: "https://todoapp-1de54.firebaseio.com",
    projectId: "todoapp-1de54",
    storageBucket: "todoapp-1de54.appspot.com",
    messagingSenderId: "615392966872"
};
firebase.initializeApp(config)
export default firebase