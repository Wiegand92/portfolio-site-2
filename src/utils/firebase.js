import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCy_FUKz_BXYWOLHYovmtYgLJGNoxdLRhc',
  authDomain: 'portfolio-site-b131f.firebaseapp.com',
  databaseURL: 'https://portfolio-site-b131f-default-rtdb.firebaseio.com',
  projectId: 'portfolio-site-b131f',
  storageBucket: 'portfolio-site-b131f.appspot.com',
  messagingSenderId: '183070872810',
  appId: '1:183070872810:web:fd591f0eb3ebc47cbb7393',
};
// Initialize app with config //
const app = initializeApp(firebaseConfig);

// Save database to variable to export //
export const database = getDatabase(app);

export const auth = getAuth();
