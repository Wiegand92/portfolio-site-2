<script>
  import {getBio} from '../utils/bio'
</script>

<section>
  <h2>About Me</h2>
  {#await getBio()}
    <p>...Loading</p>
  {:then bio}
    <p>{bio}</p>
  {:catch error}
    <p>Uh oh something happened! {error}</p>
  {/await}
</section>