<script>
  import Carousel from 'svelte-carousel'
  import { getProjects } from '../utils/projects.js'
  import ProjectCard from './ProjectCard.svelte'
</script>

<section>
  <h2>My Projects</h2>

  {#await getProjects()}
    <p>...Loading</p>
  {:then projects}
    <div id="carousel">
      <Carousel>
        {#each projects as project}
          <ProjectCard project={project} />
        {/each}
      </Carousel>
    </div>
  {:catch error}
    <p>Uh oh something happened! {error}</p>
  {/await}
</section>

<style lang='postcss'>
  #carousel {
    @apply bg-richBlack-light p-4 rounded-lg;
    @apply md:w-1/2 mx-auto;
  }
</style>