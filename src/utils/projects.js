import { database as db } from './firebase.js';
import { ref, onValue, update, set } from 'firebase/database';

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

async function updateProject(id, newProject) {
  const projectRef = ref(db, 'projects/' + id);
  await update(projectRef, newProject);
}

async function addProject(id, newProject) {
  const projectRef = ref(db, 'projects/' + id);
  await set(projectRef, newProject);
}
export { getProjects, updateProject };
