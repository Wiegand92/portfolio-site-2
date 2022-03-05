<script>
  import { fade } from 'svelte/transition';
  export let toggleFn;
</script>

<svg
  transition:fade
  on:click={toggleFn}
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>

<style lang="postcss">
  svg {
    @apply h-8 w-8 align-middle cursor-pointer transition-colors;
    @apply hover:text-prussianBlue-light;
  }
</style>
