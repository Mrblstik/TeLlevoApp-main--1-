// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBVNbQuQCcMejHioIH9D0mkVzwR_Okwqcs",
    authDomain: "tellevoappp-67000.firebaseapp.com",
    projectId: "tellevoappp-67000",
    storageBucket: "tellevoappp-67000.firebasestorage.app",
    messagingSenderId: "428553150365",
    appId: "1:428553150365:web:288773f71ff0d896a81974",
    measurementId: "G-J6QR1V66NP"
  }
};
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
