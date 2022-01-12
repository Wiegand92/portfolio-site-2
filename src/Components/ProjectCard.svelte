<script>
  export let project;

</script>
<section>
  <img src={project.name === "Hitchhiker's Guide to Cocktails" ? 'https://live.staticflickr.com/65535/51815039744_a6cb205437_z.jpg' : ''} alt={project.name}>
  <a href={project.url}> {project.name} </a>
</section>

<style>
  section {
    @apply flex flex-col justify-between;
  }
  img {
    @apply max-h-thumbnail-sm max-w-thumbnail-sm mx-auto;
    @apply md:max-w-thumbnail-lg max-h-thumbnail-lg;
  }
  a {
    @apply text-center text-2xl text-papayaWhip;

    /* Hover Styles */
    @apply transition-colors;
    @apply hover:text-prussianBlue-light;
  }
</style>