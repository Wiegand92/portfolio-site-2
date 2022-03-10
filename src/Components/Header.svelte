<script>
  import { fade } from 'svelte/transition';

  import {
    toggleLoginForm,
    isLoggedIn,
    showLoginForm,
    showResume,
    toggleResume,
    dropdownVisible,
    toggleDropdown,
  } from '../store';
  import { signOutUser } from '../utils/login';
  import LoginForm from './LoginForm.svelte';
  import Resume from './Resume.svelte';
</script>

<header>
  {#if $showLoginForm}
    <LoginForm />
  {/if}
  {#if $showResume}
    <Resume />
  {/if}
  <img src="./images/profile.jpg" alt="" on:click={toggleDropdown} />
  {#if $dropdownVisible}
    <div id="popper" transition:fade={{ duration: 250, delay: 0 }}>
      {#if !$isLoggedIn}
        <div
          class="menu-item"
          on:click={() => {
            toggleLoginForm();
            toggleDropdown();
          }}
        >
          Login
        </div>
      {:else}
        <div class="menu-item" on:click={() => signOutUser()}>Sign Out</div>
      {/if}
      <div
        class="menu-item"
        on:click={() => {
          toggleResume();
          toggleDropdown();
        }}
      >
        My resume
      </div>
    </div>
  {/if}
  <h1>Alex Wiegand</h1>
</header>

<style lang="postcss">
  img {
    @apply h-16 md:h-20 m-auto rounded-full border-solid border-richBlack-dark border-2;
    @apply hover:animate-pulse;
    @apply cursor-pointer;
  }
  header {
    /* Spacing  */
    @apply h-20 md:h-24 m-0 px-8 flex;
    /* Borders */
    @apply border-b-2 border-0 border-b-barnRed-dark border-solid;
    /* Colors */
    @apply bg-richBlack-light;
  }
  h1 {
    @apply text-prussianBlue-dark text-right text-4xl flex-1 m-auto;
  }
  #popper {
    @apply bg-papayaWhip border-barnRed border-solid flex flex-col rounded-sm fixed top-20 left-8 md:top-24;
  }
  .menu-item {
    @apply border-barnRed border-solid border-b-2 border-0;
    @apply cursor-pointer;
    @apply transition-colors;
    @apply p-2 hover:bg-prussianBlue-light;
  }

  .menu-item:last-of-type {
    @apply border-none;
  }
</style>
