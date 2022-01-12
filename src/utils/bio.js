import { database as db } from './firebase.js';
import { ref, onValue } from 'firebase/database';

const fetchBio = new Promise((resolve, reject) => {
  const bioRef = ref(db, 'bio');
  onValue(bioRef, snapshot => {
    const data = snapshot.val();
    resolve(data);
  });
});

const getBio = async () => {
  let bio = await fetchBio;
  return bio;
};

export { getBio };
