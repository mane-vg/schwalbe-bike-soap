<script>
    import { fade } from 'svelte/transition';

    export let fadeIn;

    function activeInViewport(element) {
        let options = {rootMargin: '0px 0px 0px 0px', threshold: 1};

        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        };
        let introSectionObserver = new IntersectionObserver(callback, options);
        introSectionObserver.observe(element);
    }

    function fadeInWhenInViewport(element) {
        let options = {rootMargin: '0px 0px 0px 0px', threshold: 1};
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    fadeIn = true;
                } else {
                    fadeIn = false;
                }
            });
        };
        let introSectionObserver = new IntersectionObserver(callback, options);
        introSectionObserver.observe(element);
    }
</script>

<section class="bottom">
    <div class="row">
        <picture class="background">
            <source srcset="@publish.domain/images/bottom/grass-small.avif 750w,
                            @publish.domain/images/bottom/grass-medium.avif 1200w,
                            @publish.domain/images/bottom/grass-large.avif 1920w" type="image/avif">
            <source srcset="@publish.domain/images/bottom/grass-small.webp 750w,
                            @publish.domain/images/bottom/grass-medium.webp 1200w,
                            @publish.domain/images/bottom/grass-large.webp 1920w" type="image/webp">
            <img src="@publish.domain/images/bottom/grass-large.jpg"
                 srcset="@publish.domain/images/bottom/grass-small.jpg 750w,
                         @publish.domain/images/bottom/grass-medium.jpg 1200w,
                         @publish.domain/images/bottom/grass-large.jpg 1920w" alt="Grünes Gras">
        </picture>
        <div class="container gras-container" use:activeInViewport>
            <img class="logo" src="@publish.domain/images/bottom/schwalbe-bike-care.svg" alt="Schwalbe Bike Care Logo">
            <div class="text-wrapper">
                <h3>GO GREEN.<br/> RIDE CLEAN.</h3>
                <p>Unsere Bike Care Produkte sorgen nicht nur für strahlende Bikes sondern auch für eine saubere Natur,
                    denn sie vereinen Umweltverträglichkeit und beste Reinigungskraft, wie kein anderes Produkt.</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="container" use:fadeInWhenInViewport>
            <div class="span-12">
                {#if fadeIn}
                    <hr transition:fade={{duration: 750}} />
                {/if}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";

    section.bottom {
      overflow: hidden;
      margin: 0;
      picture.background {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        object-position: bottom;
        overflow: hidden;

        img {
          height: 125%;
          object-fit: cover;
          @include media-breakpoint-up(lg) {
            height: unset;
            object-fit: unset;
          }
        }

        @include media-breakpoint-up(lg) {
          top: unset;
        }
      }

      .gras-container {
        padding: $section-margin*2.5 0 $section-margin*1.5 0;
        z-index: 1;

        .text-wrapper {
          grid-column: 1/13;
          align-self: center;
          opacity: 0;

          transform: translateY(30%);

          @include media-breakpoint-up(md) {
            transform: unset;
            grid-column: 6/12;
          }
          @include media-breakpoint-up(lg) {
            grid-column: 6/11;
          }
          h3 {
            text-align: left;
            margin-top: 0;
          }
        }

        img.logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: top 1s, transform 1s;

          @include media-breakpoint-up(md) {
            transform: translate(-50%, -50%);
            transition: transform 1s;
          }
        }

        &.active {
          .text-wrapper {
            opacity: 1;
            transition: opacity 1s;
          }
          img.logo {
            top: calc($section-margin/2);
            transform: translate(-50%, -0%);
            @include media-breakpoint-up(md) {
              top: 50%;
              transform: translate(-150%, -50%);
            }
            @include media-breakpoint-up(lg) {
              transform: translate(-175%, -50%);
            }
            @include media-breakpoint-up(xl) {
              transform: translate(-200%, -50%);
            }
          }
        }
      }

      .span-12 {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: $section-margin*0.5 0;
        @include media-breakpoint-up(lg) {
          padding: $section-margin*1.5 0;
        }
      }
    }
</style>
