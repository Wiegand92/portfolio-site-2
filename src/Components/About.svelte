<script>
  import { onMount } from 'svelte';

  import Loading from './Loading.svelte';
  import EditIcon from './EditIcon.svelte';
  import EditBio from './EditBio.svelte';
  import { isLoggedIn, bio, getBiography } from '../store';

  let showBioForm = false;

  onMount(() => {
    getBiography();
  });
</script>

<section>
  <h2>
    About Me
    {#if $isLoggedIn}
      <EditIcon toggleFn={() => (showBioForm = !showBioForm)} />
    {/if}
  </h2>
  {#if showBioForm}
    <EditBio toggleFn={() => (showBioForm = !showBioForm)} />
  {/if}
  {#if $bio === null}
    <Loading />
  {:else}
    <p>{$bio}</p>
  {/if}
</section>

<style lang="postcss">
  p {
    @apply bg-richBlack-light p-4 mx-4 rounded-lg;
    @apply text-xl text-papayaWhip;
    text-shadow: 1px 1px black;
    @apply md:w-3/4 md:m-auto;
  }
</style>
