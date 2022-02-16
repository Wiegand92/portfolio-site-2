<script>
  import { fade } from 'svelte/transition';
  import {signIn} from '../utils/login';
  import { toggleLoginForm, changeLoggedIn } from '../store';

  async function handleSubmit(e) {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = await signIn(email, password)
    if(user) {
      changeLoggedIn();
      toggleLoginForm();
    }
  }

  function toggleForm(e){
    if(e.target.id === 'form-container') toggleLoginForm();
  }
</script>

<div on:click={toggleForm} transition:fade class='modal' id='form-container'>
  <form on:submit={handleSubmit}>
    <div>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password">
    </div>
    <button type="submit">Sign In</button>
  </form>
</div>

<style lang='postcss'>
  form {
    @apply my-auto w-3/5 md:w-1/5 h-2/5 px-8 box-content flex flex-col justify-around;
    @apply bg-richBlack-light shadow-richBlack-dark shadow-lg rounded-lg;
  }
  form div {
    @apply flex flex-col;
  }

  label {
    @apply text-xl text-center;
  }
  input {
    @apply bg-papayaWhip mx-auto rounded-md;
    /* Responsive Sizing  */
    @apply md:w-full md:h-6 md:text-lg;
  }

  button{
    @apply block mx-auto mt-2 h-10 w-20 rounded-lg transition-all;
    @apply bg-richBlack hover:bg-prussianBlue-light text-papayaWhip text-xl;
  }
</style>