<script>
  import Carousel from 'svelte-carousel';

  import { isLoggedIn, projects } from '../store';
  import ProjectCard from './ProjectCard.svelte';
  import EditProjects from './EditProjects.svelte';
  import Loading from './Loading.svelte';
  import EditIcon from './EditIcon.svelte';

  let showProjectEditor = false;
</script>

<section>
  {#if showProjectEditor}
    <EditProjects toggleFn={() => (showProjectEditor = !showProjectEditor)} />
  {/if}
  <h2>
    My Projects
    {#if $isLoggedIn}
      <EditIcon toggleFn={() => (showProjectEditor = !showProjectEditor)} />
    {/if}
  </h2>

  {#if $projects === null}
    <Loading />
  {:else}
    <div id="carousel">
      <Carousel>
        {#each $projects as project}
          <ProjectCard {project} />
        {/each}
      </Carousel>
    </div>
  {/if}
</section>

<style lang="postcss">
  :global(#carousel) {
    @apply bg-richBlack-light py-2 mx-4 rounded-lg;
    @apply md:w-3/4 md:p-4 md:m-auto;
  }
</style>
