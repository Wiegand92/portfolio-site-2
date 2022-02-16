import { writable, readable } from 'svelte/store';
import { auth } from './utils/firebase';
import { getBio } from './utils/bio';
import { getProjects } from './utils/projects';

// Login status //
const isLoggedIn = writable(false);
function changeLoggedIn() {
  if (auth.currentUser !== null) {
    isLoggedIn.set(true);
  } else {
    isLoggedIn.set(false);
  }
}

// Login form state //
const showLoginForm = writable(false);
function toggleLoginForm() {
  showLoginForm.update(value => !value);
}

// Bio //
const bio = writable(null);
async function getBiography() {
  const fetchedBio = await getBio();
  bio.set(fetchedBio);
}

// Projects //
const projects = readable(null, async set => {
  const fetchedProjects = await getProjects();
  set(fetchedProjects);
  return () => {};
});
// async function getProjectsData() {}

export {
  isLoggedIn,
  changeLoggedIn,
  showLoginForm,
  toggleLoginForm,
  bio,
  getBiography,
  projects,
};
