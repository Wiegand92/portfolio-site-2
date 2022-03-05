<script>
  import Carousel from 'svelte-carousel';
  import { fade } from 'svelte/transition';

  import { projects } from '../store';
  import ProjectForm from './ProjectForm.svelte';

  export let toggleFn;
  const currentProjects = $projects;
  $: projectsArray = currentProjects;

  const emptyProject = {
    name: '',
    description: '',
    photoUrl: '',
    url: '',
  };

  function toggleView(e) {
    if (e.target.classList.contains('modal')) toggleFn();
  }
  function addProject() {
    projectsArray.push(emptyProject);
    projectsArray = projectsArray;
    console.log(projectsArray, $projects);
  }
</script>

<div class="modal" on:click={toggleView} transition:fade>
  <div id="carousel">
    {#if projectsArray !== null}
      <Carousel swiping={false}>
        {#each projectsArray as project, index}
          <ProjectForm
            {project}
            {index}
            {addProject}
            last={index === $projects.length - 1}
          />
        {/each}
      </Carousel>
    {/if}
  </div>
</div>

<style lang="postcss">
  .modal {
    @apply flex flex-col;
  }
</style>
