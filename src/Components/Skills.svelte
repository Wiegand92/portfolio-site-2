<script>
  import { isLoggedIn, skills } from '../store';
  import EditIcon from './EditIcon.svelte';
  import Loading from './Loading.svelte';

  let showSkillsEditor = false;
</script>

<section>
  <h2>
    My Skills
    {#if $isLoggedIn}
      <EditIcon toggleFn={() => (showSkillsEditor = !showSkillsEditor)} />
    {/if}
  </h2>

  {#if $skills === null}
    <Loading />
  {:else}
    <div class="skill-grid">
      {#each $skills as skill}
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.skillName}/${skill.imgSrc}`}
          alt={skill.skillName}
        />
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
    @apply text-xl;
    @apply md:w-3/4 md:m-auto;
    @apply border-2 border-solid border-barnRed-dark;
  }
  img {
    @apply h-12 w-12 py-2;
    @apply md:h-20 w-20;
  }
  .filler {
    @apply h-full w-full bg-richBlack;
  }
</style>
