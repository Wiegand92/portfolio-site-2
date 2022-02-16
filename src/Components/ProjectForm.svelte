<script>
  import { updateProject } from '../utils/projects';

  export let project;
  export let index;
  export let last = false;
  export let addProject;

  function handleSubmit(e) {
    e.preventDefault()

    const updatedProject = {
      description: e.target.description.value,
      name: e.target.name.value,
      newUrl: e.target.photo.value,
      url: e.target.link.value
    }
    updateProject(index, updatedProject)
  }
</script>

<form on:submit={handleSubmit} id={index}>
  <div class='form-item'><label for="name">Project Title:</label><input type="text" name="name" value={project.name}></div>
  <div class='form-item'><label for="description">Description:</label><textarea name="description" rows="10">{project.description}</textarea></div>
  <div class='form-item'><label for="photo">Photo URL:</label><input type="text" name="photo" value={project.newUrl}></div>
  <div class='form-item'><label for="link">Project URL:</label><input type="text" name="link" value={project.url}></div>
  <div class='form-item'><input type="submit" value="Update Project"></div>
  {#if last}
    <div class='form-item'><button on:click={addProject()}>Add Project</button></div>
  {/if}
</form>

<style>
  form {
    @apply bg-richBlack;
  }
  .form-item {
    @apply mx-auto w-3/5 flex flex-col;
  }
  textarea {
    resize: none;
  }
</style>