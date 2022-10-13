<script>
    import { onMount } from 'svelte';
    import Carousel from 'svelte-carousel';

    export let particlesToShow;
    export let carouselIndex = 0;
    export let carouselMaxIndex = 2;

    onMount(() => {
        if(window.innerWidth < 900) {
            particlesToShow = 1;
            carouselMaxIndex = 3;
        } else {
            particlesToShow = 2;
            carouselMaxIndex = 2;
        }

        window.addEventListener('resize', function() {
            if(window.innerWidth < 900) {
                particlesToShow = 1;
                carouselMaxIndex = 3;
            } else {
                particlesToShow = 2;
                carouselMaxIndex = 2;
            }
        });
    });
</script>

<section class="starterset-contents">
    <div class="row">
        <div class="container-fluid">
            <div class="span-12">
                <h3>Das Starterset beinhaltet</h3>
                <Carousel particlesToShow={particlesToShow} particlesToScroll={1} infinite={false} swiping={false}
                    let:showPrevPage let:showNextPage on:pageChange={event => carouselIndex = event.detail}>
                    <div slot="prev" on:click={showPrevPage} class="carousel-control carousel-prev" class:active={carouselIndex > 0}>
                        <img src="src/assets/images/carousel/chevron-left.svg">
                    </div>
                    <div class="slide">
                        <picture>
                            <source srcset="src/assets/images/starterset-content/bikesoap-beutel-small.avif 400w,
                                            src/assets/images/starterset-content/bikesoap-beutel-medium.avif 600w,
                                            src/assets/images/starterset-content/bikesoap-beutel-large.avif 758w" type="image/avif">
                            <source srcset="src/assets/images/starterset-content/bikesoap-beutel-small.webp 400w,
                                            src/assets/images/starterset-content/bikesoap-beutel-medium.webp 600w,
                                            src/assets/images/starterset-content/bikesoap-beutel-large.webp 758w" type="image/webp">
                            <img src="src/assets/images/starterset-content/bikesoap-beutel-large.jpg"
                                 srcset="src/assets/images/starterset-content/bikesoap-beutel-small.jpg 400w,
                                         src/assets/images/starterset-content/bikesoap-beutel-medium.jpg 600w,
                                         src/assets/images/starterset-content/bikesoap-beutel-large.jpg 758w" alt="Schwalbe Bikesoap Beutel">
                        </picture>
                        <div class="slide-text">
                            <h4>Beutel</h4>
                            <p>Packnatur® Mehrweg Cellulose.<br/>Beutel, kompostierbar.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <picture>
                            <source srcset="src/assets/images/starterset-content/bikesoap-seife-small.avif 400w,
                                            src/assets/images/starterset-content/bikesoap-seife-medium.avif 600w,
                                            src/assets/images/starterset-content/bikesoap-seife-large.avif 758w" type="image/avif">
                            <source srcset="src/assets/images/starterset-content/bikesoap-seife-small.webp 400w,
                                            src/assets/images/starterset-content/bikesoap-seife-medium.webp 600w,
                                            src/assets/images/starterset-content/bikesoap-seife-large.webp 758w" type="image/webp">
                            <img src="src/assets/images/starterset-content/bikesoap-seife-large.jpg"
                                 srcset="src/assets/images/starterset-content/bikesoap-seife-small.jpg 400w,
                                         src/assets/images/starterset-content/bikesoap-seife-medium.jpg 600w,
                                         src/assets/images/starterset-content/bikesoap-seife-large.jpg 758w" alt="Schwalbe Bikesoap Seife">
                        </picture>
                        <div class="slide-text">
                            <h4>Seife</h4>
                            <p>Natürlich, ohne künstliche<br/>Zusätze, vegan.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <picture>
                            <source srcset="src/assets/images/starterset-content/bikesoap-buerste-small.avif 400w,
                                            src/assets/images/starterset-content/bikesoap-buerste-medium.avif 600w,
                                            src/assets/images/starterset-content/bikesoap-buerste-large.avif 758w" type="image/avif">
                            <source srcset="src/assets/images/starterset-content/bikesoap-buerste-small.webp 400w,
                                            src/assets/images/starterset-content/bikesoap-buerste-medium.webp 600w,
                                            src/assets/images/starterset-content/bikesoap-buerste-large.webp 758w" type="image/webp">
                            <img src="src/assets/images/starterset-content/bikesoap-buerste-large.jpg"
                                 srcset="src/assets/images/starterset-content/bikesoap-buerste-small.jpg 400w,
                                         src/assets/images/starterset-content/bikesoap-buerste-medium.jpg 600w,
                                         src/assets/images/starterset-content/bikesoap-buerste-large.jpg 758w" alt="Schwalbe Bikesoap Bürste">
                        </picture>
                        <div class="slide-text">
                            <h4>Bürste</h4>
                            <p>Holzbürste mit Rosshaarbesatz.<br/>Für schonende Reinigung.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <picture>
                            <source srcset="src/assets/images/starterset-content/bikesoap-box-small.avif 400w,
                                            src/assets/images/starterset-content/bikesoap-box-medium.avif 600w,
                                            src/assets/images/starterset-content/bikesoap-box-large.avif 758w" type="image/avif">
                            <source srcset="src/assets/images/starterset-content/bikesoap-box-small.webp 400w,
                                            src/assets/images/starterset-content/bikesoap-box-medium.webp 600w,
                                            src/assets/images/starterset-content/bikesoap-box-large.webp 758w" type="image/webp">
                            <img src="src/assets/images/starterset-content/bikesoap-box-large.jpg"
                                 srcset="src/assets/images/starterset-content/bikesoap-box-small.jpg 400w,
                                         src/assets/images/starterset-content/bikesoap-box-medium.jpg 600w,
                                         src/assets/images/starterset-content/bikesoap-box-large.jpg 758w" alt="Schwalbe Bikesoap Box">
                        </picture>
                        <div class="slide-text">
                            <h4>Box</h4>
                            <p>Wiederverwendbare Aufbewahrungsbox.<br/> 100% recyclebar.</p>
                        </div>
                    </div>
                    <div slot="next" on:click={showNextPage} class="carousel-control carousel-next" class:active={carouselIndex < carouselMaxIndex}>
                        <img src="src/assets/images/carousel/chevron-right.svg">
                    </div>
                </Carousel>
            </div>
        </div>
    </div>
</section>

<style lang="scss" global>
    @import "src/assets/scss/_import.scss";

    .starterset-contents {
      .sc-carousel__content-container {
        .sc-carousel__pages-window {
          @include media-breakpoint-up(md) {
            //padding: 0 150px;
          }
          @include media-breakpoint-up(lg) {
            padding: 0 150px;
          }
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          z-index: 3;
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
          &.active {
            opacity: 1;
            pointer-events: all;
          }
          &.carousel-prev {
            left: 0;
          }
          &.carousel-next {
            right: 0;
          }
        }
      }
      .slide {
        max-width: 50%;
        picture {
          img {
            width: 100%;
            object-fit: cover;
             @include media-breakpoint-up(lg) {
               width: unset;
               object-fit: unset;
             }
          }
        }
        .slide-text {
          margin: 0 auto;
          text-align: center;
        }
      }
    }
</style>
