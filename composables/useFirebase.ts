import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCLXaUcLfhz2RH8Dz6gESgRfMS0mQYzOhc",
        authDomain: "instafire-app.firebaseapp.com",
        databaseURL: "https://instafire-app.firebaseio.com",
        projectId: "instafire-app",
        storageBucket: "instafire-app.appspot.com",
        messagingSenderId: "349272671197",
        appId: "1:349272671197:web:66fbd923a8dd82d9f6ec34"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);

    return {
        firebaseApp,
        firestore,
        auth
    }
}