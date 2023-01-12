<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Carousel from 'svelte-carousel';

    export let loaded;

    onMount(() => {
        loaded = true;
    });
</script>

<section class="hero">
    <picture class="background">
        <source srcset="@publish.domain/images/hero/hero_background_small.avif 1170w,
                        @publish.domain/images/hero/hero_background_medium.avif 1000w,
                        @publish.domain/images/hero/hero_background_large.avif 1920w" type="image/avif">
        <source srcset="@publish.domain/images/hero/hero_background_small.webp 1170w,
                        @publish.domain/images/hero/hero_background_medium.webp 1000w,
                        @publish.domain/images/hero/hero_background_large.webp 1920w" type="image/webp">
        <img src="@publish.domain/images/hero/hero_background_large.jpg"
             srcset="@publish.domain/images/hero/hero_background_small.jpg 1170w,
                     @publish.domain/images/hero/hero_background_medium.jpg 1000w,
                     @publish.domain/images/hero/hero_background_large.jpg 1920w" alt="Papiertextur mit Streifen">
    </picture>

    <div class="hero-carousel">
        <Carousel particlesToShow={1} particlesToScroll={1} infinite={true} arrows={false} autoplay={true} autoplayDuration={3000}
                  pauseOnFocus={false} dots={false} swiping={false} duration={500} let:currentPageIndex let:pagesCount let:showPage>
            <picture class="motive">
                <source srcset="@publish.domain/images/hero/hero-mtb-small.avif 1170w,
                        @publish.domain/images/hero/hero-mtb--medium.avif 1200w,
                        @publish.domain/images/hero/hero-mtb-large.avif 1600w" type="image/avif">
                <source srcset="@publish.domain/images/hero/hero-mtb-small.webp 1170w,
                        @publish.domain/images/hero/hero-mtb-medium.webp 1200w,
                        @publish.domain/images/hero/hero-mtb-large.webp 1600w" type="image/webp">
                <img src="./@publish.domain/images/hero/hero-mtb-large.jpg"
                     srcset="@publish.domain/images/hero/hero-mtb-small.jpg 1170w,
                     @publish.domain/images/hero/hero-mtb-medium.jpg 1200w,
                     @publish.domain/images/hero/hero-mtb-large.jpg 1600w" alt="Bike Soap Mountainbike">
            </picture>
            <picture class="motive">
                <source srcset="@publish.domain/images/hero/hero-gravel-small.avif 1170w,
                        @publish.domain/images/hero/hero-gravel-medium.avif 1200w,
                        @publish.domain/images/hero/hero-gravel-large.avif 1600w" type="image/avif">
                <source srcset="@publish.domain/images/hero/hero-gravel-small.webp 1170w,
                        @publish.domain/images/hero/hero-gravel-medium.webp 1200w,
                        @publish.domain/images/hero/hero-gravel-large.webp 1600w" type="image/webp">
                <img src="./@publish.domain/images/hero/hero-gravel-large.jpg"
                     srcset="@publish.domain/images/hero/hero-gravel-small.jpg 1170w,
                     @publish.domain/images/hero/hero-gravel-medium.jpg 1200w,
                     @publish.domain/images/hero/hero-gravel-large.jpg 1600w" alt="Bike Soap Gravel-Bike">
            </picture>
            <picture class="motive">
                <source srcset="@publish.domain/images/hero/hero-race-small.avif 1170w,
                        @publish.domain/images/hero/hero-race-medium.avif 1200w,
                        @publish.domain/images/hero/hero-race-large.avif 1600w" type="image/avif">
                <source srcset="@publish.domain/images/hero/hero-race-small.webp 1170w,
                        @publish.domain/images/hero/hero-race-medium.webp 1200w,
                        @publish.domain/images/hero/hero-race-large.webp 1600w" type="image/webp">
                <img src="./@publish.domain/images/hero/hero-race-large.jpg"
                     srcset="@publish.domain/images/hero/hero-race-small.jpg 1170w,
                     @publish.domain/images/hero/hero-race-medium.jpg 1200w,
                     @publish.domain/images/hero/hero-race-large.jpg 1600w" alt="Bike Soap Rennrad">
            </picture>
        </Carousel>
    </div>

    {#if loaded}
        <picture transition:fly={{delay: 500, duration: 1500, y: 750, opacity: 1}} class="bikesoap">
            <source srcset="@publish.domain/images/hero/bikesoapset-auf-baumstamm-small.avif 1170w,
                         @publish.domain/images/hero/bikesoapset-auf-baumstamm-medium.avif 1200w,
                         @publish.domain/images/hero/bikesoapset-auf-baumstamm-large.avif 1920w" type="image/avif">
            <source srcset="@publish.domain/images/hero/bikesoapset-auf-baumstamm-small.webp 1170w,
                         @publish.domain/images/hero/bikesoapset-auf-baumstamm-medium.webp 1200w,
                         @publish.domain/images/hero/bikesoapset-auf-baumstamm-large.webp 1920w" type="image/webp">
            <img src="@publish.domain/images/hero/bikesoapset-auf-baumstamm-large.png"
                 srcset="@publish.domain/images/hero/bikesoapset-auf-baumstamm-small.png 1170w,
                         @publish.domain/images/hero/bikesoapset-auf-baumstamm-medium.png 1200w,
                         @publish.domain/images/hero/bikesoapset-auf-baumstamm-large.png 1920w" alt="Schwalbe Bike Soap Starterset auf Baumstamm">
        </picture>
    {/if}
    <div class="text-container">
        <h2 class="h1 hero-caption">Go green.<br/>Ride clean.</h2>
        <p>Die natürliche Fahrradseife für alle Bikes.</p>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";
  :global(.hero-carousel) {
    height: 100%;
    :global(.sc-carousel__carousel-container) {
      height: 100%;
      :global(.sc-carousel__content-container) {
        height: 100%;
      }
    }
  }

  .hero {
      position: relative;
      height: calc(100svh - 170px);
      padding: 20px;
      overflow: hidden;

      @include media-breakpoint-up(lg) {
        height: calc(100svh - 130px);
      }
      @include media-breakpoint-up(xl) {
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
          width: 100%;
        }
      }
      .text-container {
        position: absolute;
        left: 10%;
        top: 10%;
        z-index: 2;
        color: white;
        width: 80%;

        @include media-breakpoint-up(lg) {
          width: unset;
          top: unset;
          bottom: 10%;
          left: 5%;
        }

        h2 {
          margin: 0;
        }
        p {
          font-family: $font-family-base;
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
