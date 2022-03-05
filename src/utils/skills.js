import { database as db } from './firebase.js';
import { ref, onValue, update, set } from 'firebase/database';

const fetchSkills = new Promise((resolve, reject) => {
  const skillRef = ref(db, 'skills');
  onValue(skillRef, snapshot => {
    const data = snapshot.val();
    resolve(data);
  });
});

const getSkills = async () => {
  let skills;
  const data = await fetchSkills;
  console.log(data);
  skills = [...data];
  return skills;
};

export { getSkills };
