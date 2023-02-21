import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHqeAsOj-v79JxlSe0iNQtSvn14OHGfJQ',
  authDomain: 'cinemagot-react-app.firebaseapp.com',
  projectId: 'cinemagot-react-app',
  storageBucket: 'cinemagot-react-app.appspot.com',
  messagingSenderId: '469149152188',
  appId: '1:469149152188:web:de3d70b3e8cc9e29d9b1b9',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
// console.log('Before: ', auth);

onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;

    const fetchData = async () => {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data().country);
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  } else {
    return;
  }
});
