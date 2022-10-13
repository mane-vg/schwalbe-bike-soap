<script>
    import { fade } from 'svelte/transition';

    export let fadeIn;

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
            <source srcset="src/assets/images/bottom/grass-small.avif 750w,
                            src/assets/images/bottom/grass-medium.avif 1200w,
                            src/assets/images/bottom/grass-large.avif 1920w" type="image/avif">
            <source srcset="src/assets/images/bottom/grass-small.webp 750w,
                            src/assets/images/bottom/grass-medium.webp 1200w,
                            src/assets/images/bottom/grass-large.webp 1920w" type="image/webp">
            <img src="src/assets/images/bottom/grass-large.jpg"
                 srcset="src/assets/images/bottom/grass-small.jpg 750w,
                         src/assets/images/bottom/grass-medium.jpg 1200w,
                         src/assets/images/bottom/grass-large.jpg 1920w" alt="Grünes Gras">
        </picture>
        <div class="container">
            <div class="span-12">
                <img src="src/assets/images/starterset/schwalbe-icon-jetzt-erhaeltlich.svg">
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

        z-index: -1;

        img {
          height: 100%;
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

      .span-12 {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: $section-margin*1.5 0;
      }
    }
</style>
