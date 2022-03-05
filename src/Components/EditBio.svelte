<script>
  import { fade } from 'svelte/transition';
  import { bio } from '../store';
  import { updateBio } from '../utils/bio';
  export let toggleFn;

  function handleClick(e) {
    if (e.target.classList.contains('modal')) {
      toggleFn();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateBio(e.target.bio.value);
    toggleFn();
  }
</script>

<div class="modal" transition:fade on:click={handleClick}>
  <form on:submit={handleSubmit}>
    <div>
      <textarea name="bio" id="bio" cols="30" rows="10">{$bio}</textarea>
    </div>
    <input type="submit" value="Update Biography" />
  </form>
</div>

<style lang="postcss">
  form {
    @apply rounded-lg shadow-richBlack-dark shadow-lg;
    @apply my-auto bg-richBlack-light p-4 md:w-2/5;
  }
  textarea {
    resize: none;
    @apply w-full;
  }
  input {
    @apply block mx-auto;
  }
</style>
