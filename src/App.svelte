<script>
  import Header from './Components/Header.svelte';
  import Contact from './Components/Contact.svelte';
  import Projects from './Components/Projects.svelte';
  import About from './Components/About.svelte';
</script>

<main>
  <Header></Header>
  <div id="body">
    <About />
    <Projects />
    <Contact />
  </div>
  <footer>
    <span>Built and designed by: Alex Wiegand</span>
    <span>Photos hosted at <a href='https://flickr.com'>Flickr</a></span>
  </footer>
</main>
<style lang='postcss'>
  :global(html, body){
    @apply p-0 m-0 h-full w-full fixed;
    @apply bg-papayaWhip;
  }
  :global(h2) {
    @apply text-orange text-3xl pl-4 underline underline-offset-2;
    @apply md:pl-14;
  }

  :global(.modal){
    @apply fixed top-0 left-0 h-full w-full flex justify-center z-10;
    @apply bg-prussianBlue-dark bg-opacity-50;
  }

  #body {
    /* Sizing */
    @apply h-3/4 w-full;
    @apply md:h-5/6 md:w-11/12;
    /* Spacing */
    @apply m-auto pb-4;
    /* Scroll Behavior */
    @apply overflow-auto;
    /* Borders */
    @apply rounded-bl-md border-0 border-l-2 border-b-2 border-barnRed-light;
    border-style: inset;
    /* Colors */
    @apply bg-richBlack;
  }

  main {
    @apply h-full w-full flex flex-col;
  }
  footer {
    @apply flex flex-col justify-center mb-2 md:flex-row;
    @apply text-sm text-center;
  }
  span{
    @apply md:mx-4;
  }
</style>