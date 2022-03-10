<script>
  import { toggleResume } from '../store';
  function hideResume(e) {
    if (e.target.id === 'resume-container') toggleResume();
  }
</script>

<div class="modal" id="resume-container" on:click={hideResume}>
  <object data="images/Resume.pdf" type="application/pdf" title="my resume" />
</div>

<style lang="postcss">
  object {
    @apply w-3/4;
  }
</style>
