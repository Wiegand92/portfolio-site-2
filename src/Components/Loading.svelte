<div class="loading-container">
  <div class="load-icon"></div>
  <p>Loading</p>
</div>

<style>

  .loading-container{
    @apply bg-richBlack-light p-4 mx-4 rounded-lg flex justify-center;
    @apply text-xl;
    @apply md:w-3/4 md:m-auto;
  }

  .load-icon {
    @apply h-8 w-8 my-auto border-solid border-8 border-b-8 border-t-papayaWhip-dark border-richBlack [border-radius:50%] animate-spin;
  }
  p, .load-icon {
    @apply mx-2;
  }
</style>