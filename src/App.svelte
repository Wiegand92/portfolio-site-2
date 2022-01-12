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
  <footer><p>Built and designed by: Alex Wiegand <br/> Photos hosted at <a href='https://flickr.com'>Flickr</a></p></footer>
</main>
<style lang='postcss'>
  :global(html, body){
    @apply p-0 m-0 h-full w-full fixed;
    @apply bg-papayaWhip;
  }
  :global(h2) {
    @apply text-barnRed pl-4 underline underline-offset-2;
  }
  #body {
    /* Sizing */
    @apply h-3/4 w-11/12 md:h-5/6;
    /* Spacing */
    @apply self-center m-auto pb-4;
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
    @apply text-sm text-center;
  }
</style>