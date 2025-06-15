import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "habit-tracker-db-c1a47", appId: "1:480570776739:web:edebca02d4407feba8b316", storageBucket: "habit-tracker-db-c1a47.firebasestorage.app", apiKey: "AIzaSyAo-53UvftRWM4o4ZI_RPOzAh0aO9DjOmc", authDomain: "habit-tracker-db-c1a47.firebaseapp.com", messagingSenderId: "480570776739", measurementId: "G-XFN5ETLBCB" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
