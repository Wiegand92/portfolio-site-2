<script>
  import Header from './Components/Header.svelte';
  import Contact from './Components/Contact.svelte';
  import Projects from './Components/Projects.svelte';
  import About from './Components/About.svelte';
  import Skills from './Components/Skills.svelte';
</script>

<main>
  <Header />
  <div id="body">
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
  <footer>
    <span>Built and designed by: Alex Wiegand</span>
    <span>Photos hosted at <a href="https://flickr.com">Flickr</a></span>
  </footer>
</main>

<style lang="postcss">
  :global(html, body) {
    @apply p-0 m-0 h-full w-full fixed;
    @apply bg-papayaWhip;
  }
  :global(h2) {
    @apply text-orange text-3xl pl-4 underline underline-offset-2;
    @apply md:pl-14;
  }

  :global(h1, h2, h3, h4) {
    font-family: 'Roboto', 'sans-serif';
  }

  :global(p) {
    font-family: 'Lora', 'sans-serif';
  }

  :global(.modal) {
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

    /* Scrollbar Styles */
    scrollbar-color: #e00000 #07393c;
  }

  #body::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  #body::-webkit-scrollbar-thumb {
    @apply bg-barnRed-light rounded-sm;
  }
  #body::-webkit-scrollbar-track {
    @apply bg-richBlack;
  }

  main {
    @apply h-full w-full flex flex-col;
  }
  footer {
    @apply flex flex-col justify-center mb-2 md:flex-row;
    @apply text-sm text-center;
  }
  span {
    @apply md:mx-4;
  }
</style>
