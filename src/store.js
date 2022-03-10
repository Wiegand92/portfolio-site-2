import { writable, readable } from 'svelte/store';
import { auth } from './utils/firebase';
import { getBio } from './utils/bio';
import { getProjects } from './utils/projects';
import { getSkills } from './utils/skills';

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

// Dropdown State //
const dropdownVisible = writable(false);
function toggleDropdown() {
  dropdownVisible.update(value => !value);
}

// Show Resume //
const showResume = writable(false);
function toggleResume() {
  showResume.update(value => !value);
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

// Skills //
const skills = readable(null, set => {
  getSkills().then(response => set(response));
  return (stop = () => {});
});

export {
  isLoggedIn,
  changeLoggedIn,
  showLoginForm,
  toggleLoginForm,
  dropdownVisible,
  toggleDropdown,
  showResume,
  toggleResume,
  bio,
  getBiography,
  projects,
  skills,
};
