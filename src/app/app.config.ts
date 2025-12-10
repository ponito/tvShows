import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getAnalytics } from "firebase/analytics";

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrgp4yIGmtmNMHXEJFmQb_jbor7X6sIJg",
  authDomain: "tv-serien-22550.firebaseapp.com",
  projectId: "tv-serien-22550",
  storageBucket: "tv-serien-22550.firebasestorage.app",
  messagingSenderId: "865044728904",
  appId: "1:865044728904:web:82dca3bc64055abc7c9c7d",
  measurementId: "G-3NNLT64KMF"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Firebase initialisieren
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // Firestore bereitstellen
    provideFirestore(() => getFirestore())
  ]
};
