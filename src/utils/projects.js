import { database as db } from './firebase.js';
import { ref, onValue } from 'firebase/database';

const fetchProjects = new Promise((resolve, reject) => {
  const projectRef = ref(db, 'projects');
  onValue(projectRef, snapshot => {
    const data = snapshot.val();
    resolve(data);
  });
});

const getProjects = async () => {
  let projects;
  const data = await fetchProjects;
  projects = [...data];
  return projects;
};

export { getProjects };
