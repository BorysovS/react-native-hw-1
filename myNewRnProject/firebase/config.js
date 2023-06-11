// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCLSBvpXylUq7qK7YKWBEhQjJJZnpxcuxg',
  authDomain: 'rn-project-a94f9.firebaseapp.com',
  databaseURL: 'https://rn-project-a94f9.firebaseio.com',
  projectId: 'rn-project-a94f9',
  storageBucket: 'rn-project-a94f9.appspot.com',
  messagingSenderId: '892479623286',
  appId: '1:892479623286:web:f9878ba624d4fd3d2acf57',
  measurementId: 'G-J64ZC1Y4QE',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);