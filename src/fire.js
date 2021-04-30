import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC65IEK13fm7stcvnfNKVDPFDGB_T1VX-Y",
    authDomain: "login-b7dac.firebaseapp.com",
    projectId: "login-b7dac",
    storageBucket: "login-b7dac.appspot.com",
    messagingSenderId: "678693553494",
    appId: "1:678693553494:web:4e9873e98210baab0e42f7",
    measurementId: "G-8B4ZC0E8V0"
};
// Initialize Firebase
const fire= firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;