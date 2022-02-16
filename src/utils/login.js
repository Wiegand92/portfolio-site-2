import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { changeLoggedIn } from '../store';
import { auth } from './firebase';

async function signIn(username, password) {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      username,
      password,
    );
    const user = userCredentials.user;
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function signOutUser() {
  await signOut(auth);
  changeLoggedIn();
}

export { signIn, signOutUser };
