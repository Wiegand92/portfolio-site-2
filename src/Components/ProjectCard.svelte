<script>
  export let project;

  let flipped = false;

  function handleClick() {
    flipped = !flipped;
  }

  function flip(node, { delay = 0, duration = 1500 }) {
    return {
      delay,
      duration,
      css: (t, u) => `
				transform: rotateY(${1 - u * 180}deg);
				opacity: ${1 - u};
			`,
    };
  }
</script>

<section>
  <div class="card-container">
    {#if flipped}
      <div class="card">
        <p transition:flip on:click={handleClick}>
          {project.description}
        </p>
      </div>
    {:else}
      <div class="card">
        <img
          transition:flip
          src={project.photoUrl}
          on:click={handleClick}
          alt={project.name}
        />
      </div>
    {/if}
  </div>
  <a href={project.url}> {project.name} </a>
</section>

<style lang="postcss">
  section {
    @apply flex flex-col justify-between md:justify-around;
  }
  img,
  p,
  .card-container {
    @apply h-thumbnail-sm w-thumbnail-sm my-0 mx-auto rounded-md;
    @apply md:w-thumbnail-md md:h-thumbnail-md;
    @apply xl:w-thumbnail-lg xl:h-thumbnail-lg;
  }
  .card-container {
    @apply relative;
  }
  .card {
    @apply fixed;
  }
  p {
    @apply bg-richBlack text-papayaWhip box-border p-4 overflow-y-auto;
  }
  a {
    @apply text-center bg-richBlack text-prussianBlue-light w-fit mx-auto p-2 my-2 rounded-lg shadow-md shadow-richBlack-dark;

    @apply md:text-2xl;
    /* Hover Styles */
    @apply transition-all;
    @apply hover:text-papayaWhip;
  }
  p,
  a,
  img {
    @apply cursor-pointer;
    @apply md:shadow-md md:shadow-richBlack-dark;
  }
</style>
