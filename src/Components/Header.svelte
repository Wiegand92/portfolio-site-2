<script>
  import { createPopper } from "@popperjs/core";
  import { onMount } from "svelte";

  import { toggleLoginForm, isLoggedIn, showLoginForm } from '../store';
  import { signOutUser } from '../utils/login';
  import LoginForm from './LoginForm.svelte';


  let popperVisible = false;

  let popperButton;
  let popperMenu;

  onMount(() => {
    createPopper(popperButton, popperMenu, {
        placement: 'bottom-start',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [-15, 12],
            },
          },
        ],
    });
  })

  const toggleDropdown = () => {
    popperVisible = !popperVisible
  };
</script>

<header>

  {#if $showLoginForm}
    <LoginForm/>
  {/if}
  <img src="./images/profile.jpg" alt="" bind:this={popperButton} on:click={toggleDropdown} >
  <div id='popper' bind:this={popperMenu} style="visibility: {popperVisible ? 'visible':'hidden'}">
    <div id='popper-arrow'></div>
    {#if !$isLoggedIn}
      <div class='menu-item' on:click={() => {toggleLoginForm(); toggleDropdown();}}>Login</div>
    {:else}
      <div class='menu-item' on:click={() => signOutUser()}>Sign Out</div>
    {/if}
    <div class='menu-item'>My resume</div>
  </div>
  <h1>Alex Wiegand</h1>
</header>
<style lang='postcss'>
  img {
    @apply h-16 md:h-20 m-auto rounded-full border-solid border-richBlack-dark border-2;
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
    @apply bg-papayaWhip border-barnRed border-solid flex flex-col rounded-sm;
  }

  #popper-arrow {
    @apply bg-barnRed h-4 w-4 mx-auto rounded-sm; 
    /* Position arrow */
    @apply top-[-8px] absolute left-[35%] md:left-[40%] [transform:rotate(45deg)] [clip-path:polygon(100%_0,0%_100%,0_0)];
  }
  .menu-item {
    @apply border-barnRed border-solid border-b-2 border-0;
    @apply transition-colors;
    @apply p-2 hover:bg-prussianBlue-light;
  }

  .menu-item:last-of-type {
    @apply border-none;
  }
</style>