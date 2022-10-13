<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    export let loaded;

    onMount(() => {
        loaded = true;
    });
</script>

<section class="hero">
    <picture class="background">
        <source srcset="src/assets/images/hero/hero_background_small.avif 750w,
                        src/assets/images/hero/hero_background_medium.avif 1000w,
                        src/assets/images/hero/hero_background_large.avif 1920w" type="image/avif">
        <source srcset="src/assets/images/hero/hero_background_small.webp 750w,
                        src/assets/images/hero/hero_background_medium.webp 1000w,
                        src/assets/images/hero/hero_background_large.webp 1920w" type="image/webp">
        <img src="src/assets/images/hero/hero_background_large.jpg"
             srcset="src/assets/images/hero/hero_background_small.jpg 750w,
                     src/assets/images/hero/hero_background_medium.jpg 1000w,
                     src/assets/images/hero/hero_background_large.jpg 1920w">
    </picture>
    <picture class="motive">
        <source srcset="src/assets/images/hero/hero_motive-small.avif 750w,
                        src/assets/images/hero/hero_motive-medium.avif 1200w,
                        src/assets/images/hero/hero_motive.avif 1600w" type="image/avif">
        <source srcset="src/assets/images/hero/hero_motive-small.webp 750w,
                        src/assets/images/hero/hero_motive-medium.webp 1200w,
                        src/assets/images/hero/hero_motive.webp 1600w" type="image/webp">
        <img src="./src/assets/images/hero/hero_motive.jpg"
             srcset="src/assets/images/hero/hero_motive-small.jpg 750w,
                     src/assets/images/hero/hero_motive-medium.jpg 1200w,
                     src/assets/images/hero/hero_motive.jpg 1920w">
    </picture>
    {#if loaded}
        <picture transition:fly={{delay: 500, duration: 1500, y: 750, opacity: 1}} class="bikesoap">
            <source srcset="src/assets/images/hero/bikesoapset-auf-baumstamm-small.avif 750w,
                         src/assets/images/hero/bikesoapset-auf-baumstamm-medium.avif 1200w,
                         src/assets/images/hero/bikesoapset-auf-baumstamm-large.avif 1920w" type="image/avif">
            <source srcset="src/assets/images/hero/bikesoapset-auf-baumstamm-small.webp 750w,
                         src/assets/images/hero/bikesoapset-auf-baumstamm-medium.webp 1200w,
                         src/assets/images/hero/bikesoapset-auf-baumstamm-large.webp 1920w" type="image/webp">
            <img src="../../assets/images/hero/bikesoapset-auf-baumstamm-large.png"
                 srcset="src/assets/images/hero/bikesoapset-auf-baumstamm-small.png 750w,
                         src/assets/images/hero/bikesoapset-auf-baumstamm-medium.png 1200w,
                         src/assets/images/hero/bikesoapset-auf-baumstamm-large.png 1920w">
        </picture>
    {/if}
    <div class="text-container">
        <h2 class="h1 hero-caption">Go green.<br/>Ride clean.</h2>
        <p>Die natürliche Fahrradseife für alle Bikes.</p>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";
    .hero {
      position: relative;
      height: calc(100vh - 130px);
      padding: 20px;
      overflow: hidden;

      @include media-breakpoint-up(lg) {
        height: calc(100vh - 120px);
      }

      picture.background > img {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        z-index: -1;
      }
      picture.motive > img {
        width: 100%;
        height: 100%;
        //@include media-breakpoint-up(lg) {
        //  max-height: 100%;
        //}
        object-fit: cover;
        object-position: bottom;

        z-index: 1;
      }
      picture.bikesoap {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;

        img {
          max-width: 100%;
        }
      }
      .text-container {
        position: absolute;
        left: 10%;
        top: 15%;
        z-index: 2;
        color: white;
        width: 80%;

        @include media-breakpoint-up(lg) {
          width: unset;
          left: 5%;
        }

        h2 {
          margin: 0;
        }
        p {
          font-size: $font-size-base * 1.3;
          margin: 0;

          @include media-breakpoint-up(md) {
            font-size: $font-size-base * 1.5;
          }
          @include media-breakpoint-up(lg) {
            font-size: $font-size-base * 1.6;
          }
        }
      }
    }
</style>
