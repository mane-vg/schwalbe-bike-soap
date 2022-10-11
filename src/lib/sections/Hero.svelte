<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    export let loaded;

    onMount(() => {
        loaded = true;
    });
</script>

<section class="hero">
    <img class="background" srcset="./src/assets/images/hero/hero_background_small.jpg 750w, ./src/assets/images/hero/hero_background_medium.jpg 1000w, ./src/assets/images/hero/hero_background_large.jpg 1920w">
    <img class="motive" src="./src/assets/images/hero/hero_motive.jpg">
    {#if loaded}
        <picture transition:fly={{delay: 500, duration: 1500, y: 750, opacity: 1}} class="bikesoap">
            <source srcset="./src/assets/images/hero/bikesoapset-auf-baumstamm.avif" type="image/avif">
            <source srcset="./src/assets/images/hero/bikesoapset-auf-baumstamm.webp" type="image/webp">
            <img src="./src/assets/images/hero/bikesoapset-auf-baumstamm.png">
        </picture>
    {/if}
    <div class="text-container">
        <h2 class="h1 hero-caption">Go green.<br/>Ride clean.</h2>
        <p>Die natürliche Fahrradseife für alle Bikes.</p>
    </div>
</section>

<style lang="scss">
    .hero {
      position: relative;
      height: calc(100vh - 120px);
      padding: 20px;
      overflow: hidden;
      img.background {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        z-index: -1;
      }
      img.motive {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: bottom;

        z-index: 1;
      }
      picture.bikesoap {
        position: absolute;
        right: 0;
        bottom: 0;

        img {
          display: block;
          max-width: 100%;
        }
      }
      .text-container {
        position: absolute;
        left: 5%;
        top: 15%;
        z-index: 2;
        color: white;
        h2 {
          margin: 0;
        }
        p {
          font-size: 32px;
          margin: 0;
        }
      }
    }
</style>
