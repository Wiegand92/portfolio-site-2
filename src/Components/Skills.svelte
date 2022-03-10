<script>
  import { skills } from '../store';
  import Loading from './Loading.svelte';
</script>

<section>
  <h2>My Skills</h2>

  {#if $skills === null}
    <Loading />
  {:else}
    <div class="skill-grid">
      {#each $skills as skill}
        <div class="image">
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.skillName}/${skill.imgSrc}`}
            alt={skill.skillName}
          />
        </div>
        <div class="filler" />
      {/each}
    </div>
  {/if}
</section>

<style lang="postcss">
  .skill-grid {
    @apply grid grid-cols-5;
    @apply place-items-center;
    @apply bg-richBlack-light mx-4 rounded-lg;
    @apply md:[width:calc(75%_+_28px)] md:m-auto;
    @apply border-2 border-solid border-barnRed-dark;
  }
  img {
    @apply h-12 m-auto my-auto;
    @apply md:h-20 md:w-20;
  }
  .image {
    @apply flex place-items-center;
    @apply h-14 w-14;
    /* Desktop Styles */
    @apply md:h-24 md:w-24;
  }
  .filler {
    @apply h-full w-full bg-richBlack;
  }
</style>
