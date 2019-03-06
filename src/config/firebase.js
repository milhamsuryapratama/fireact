import * as firebase from 'firebase';

const config = {
    apiKey: "API KEY FIREBASE",
    authDomain: "DOMAIN FIREBASE",
    databaseURL: "DATABASE URL FIREBASE",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "ID"
};
firebase.initializeApp(config)
export default firebase