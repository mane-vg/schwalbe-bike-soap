<script>
    import { onMount } from 'svelte';
    import { swipe } from 'svelte-gestures';
    import Carousel from 'svelte-carousel';

    export let controlPrevActive = false;
    export let controlNextActive = true;
    export let stageCountModifier;
    export let lock = false;
    export let carousel;

    function initCarousel(element) {
        carousel = element;
        let controlPrev = element.querySelector('.carousel-prev');
        let controlNext = element.querySelector('.carousel-next');

        controlPrev.addEventListener('click', prevSlide);
        controlNext.addEventListener('click', nextSlide);

        function prevSlide() {
            if(!lock) {
                lock = true;
                let slideWidth = element.querySelector('.slide').clientWidth + parseInt(getComputedStyle(element.querySelector('.slide')).marginLeft) + parseInt(getComputedStyle(element.querySelector('.slide')).marginRight);
                let carouselStage = element.querySelector('.carousel-stage');
                let stageOffset = parseInt(new WebKitCSSMatrix(getComputedStyle(carouselStage).transform).m41);
                let newStageOffset = stageOffset + slideWidth;
                let stageSize = carouselStage.querySelectorAll('.slide').length;

                if(newStageOffset <= -stageOffset) {
                    carouselStage.style.transform = 'translateX(' + newStageOffset + 'px)';
                }
                if(Math.abs(newStageOffset) <= (stageSize / stageCountModifier) * slideWidth) {
                    controlNextActive = true;
                }
                if(Math.abs(newStageOffset) <= 0) {
                    controlPrevActive = false;
                }

                setTimeout(function() {
                    lock = false;
                }, 1000);
            }
        }

        function nextSlide() {
            if(!lock) {
                let slideWidth = element.querySelector('.slide').clientWidth + parseInt(getComputedStyle(element.querySelector('.slide')).marginLeft) + parseInt(getComputedStyle(element.querySelector('.slide')).marginRight);
                let carouselStage = element.querySelector('.carousel-stage');
                let stageOffset = parseInt(new WebKitCSSMatrix(getComputedStyle(carouselStage).transform).m41);
                let newStageOffset = stageOffset - slideWidth;
                let stageSize = carouselStage.querySelectorAll('.slide').length;

                if(newStageOffset <= slideWidth * stageSize) {
                    carouselStage.style.transform = 'translateX(' + newStageOffset + 'px)';
                }
                if(Math.abs(newStageOffset) >= (stageSize / stageCountModifier) * slideWidth) {
                    controlNextActive = false;
                }
                if(Math.abs(newStageOffset) >= 0) {
                    controlPrevActive = true;
                }

                setTimeout(function() {
                    lock = false;
                }, 1000);
            }
        }
    }

    function carouselSwipeHandler(event) {
        if(event.detail.direction === 'left') {
            nextSlide();
        } else if(event.detail.direction === 'right') {
            prevSlide();
        }

        function prevSlide() {
            if(!lock && controlPrevActive) {
                lock = true;
                let slideWidth = carousel.querySelector('.slide').clientWidth + parseInt(getComputedStyle(carousel.querySelector('.slide')).marginLeft) + parseInt(getComputedStyle(carousel.querySelector('.slide')).marginRight);
                let carouselStage = carousel.querySelector('.carousel-stage');
                let stageOffset = parseInt(new WebKitCSSMatrix(getComputedStyle(carouselStage).transform).m41);
                let newStageOffset = stageOffset + slideWidth;
                let stageSize = carouselStage.querySelectorAll('.slide').length;

                if(newStageOffset <= -stageOffset) {
                    carouselStage.style.transform = 'translateX(' + newStageOffset + 'px)';
                }
                if(Math.abs(newStageOffset) <= (stageSize / stageCountModifier) * slideWidth) {
                    controlNextActive = true;
                }
                if(Math.abs(newStageOffset) <= 0) {
                    controlPrevActive = false;
                }

                setTimeout(function() {
                    lock = false;
                }, 1000);
            }
        }

        function nextSlide() {
            if(!lock && controlNextActive) {
                let slideWidth = carousel.querySelector('.slide').clientWidth + parseInt(getComputedStyle(carousel.querySelector('.slide')).marginLeft) + parseInt(getComputedStyle(carousel.querySelector('.slide')).marginRight);
                let carouselStage = carousel.querySelector('.carousel-stage');
                let stageOffset = parseInt(new WebKitCSSMatrix(getComputedStyle(carouselStage).transform).m41);
                let newStageOffset = stageOffset - slideWidth;
                let stageSize = carouselStage.querySelectorAll('.slide').length;

                if(newStageOffset <= slideWidth * stageSize) {
                    carouselStage.style.transform = 'translateX(' + newStageOffset + 'px)';
                }
                if(Math.abs(newStageOffset) >= (stageSize / stageCountModifier) * slideWidth) {
                    controlNextActive = false;
                }
                if(Math.abs(newStageOffset) >= 0) {
                    controlPrevActive = true;
                }

                setTimeout(function() {
                    lock = false;
                }, 1000);
            }
        }
    }

    onMount(() => {
        if(window.innerWidth < 900) {
            stageCountModifier = 1.5;
        } else {
            stageCountModifier = 2;
        }

        window.addEventListener('resize', function() {
            carousel.querySelector('.carousel-stage').style.transform = 'translateX(0px)';
            if(window.innerWidth < 900) {
                stageCountModifier = 1.5;
            } else {
                stageCountModifier = 2;
            }
        });

        window.addEventListener('orientationchange', function() {
            carousel.querySelector('.carousel-stage').style.transform = 'translateX(0px)';
            if(window.innerWidth < 900) {
                stageCountModifier = 1.5;
            } else {
                stageCountModifier = 2;
            }
        });
    });
</script>

<svelte:head>
    <script src="src/assets/scripts/owl.carousel.min.js"/>
</svelte:head>

<section class="starterset-contents">
    <div class="row">
        <div class="container-fluid">
            <div class="span-12">
                <h3>Das Starterset beinhaltet</h3>
                <!--<Carousel particlesToShow={particlesToShow} particlesToScroll={1} infinite={false} swiping={false} duration={500}
                    let:showPrevPage let:showNextPage on:pageChange={event => carouselIndex = event.detail}>-->
                    <!--<div slot="prev" on:click={showPrevPage} class="carousel-control carousel-prev" class:active={carouselIndex > 0}>
                        <img src="src/assets/images/carousel/chevron-left.svg">
                    </div>-->
                <div class="carousel-wrapper" use:initCarousel>
                    <div class="carousel-control carousel-prev" class:active={controlPrevActive}>
                        <img src="src/assets/images/carousel/chevron-left.svg" alt="Pfeil links">
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-stage" use:swipe={{timeframe: 300, minSwipeDistance: 50, touchAction: 'pan-y'}} on:swipe={carouselSwipeHandler}>
                            <div class="slide">
                                <picture>
                                    <source srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-xsmall.avif 400w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-small.avif 600w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-medium.avif 758w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-large.avif 1033w" type="image/avif">
                                    <source srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-xsmall.webp 400w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-small.webp 600w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-medium.webp 758w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-large.webp 1033w" type="image/webp">
                                    <img src="src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-large.jpg"
                                         srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-xsmall.jpg 400w,
                                         src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-small.jpg 600w,
                                         src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-medium.jpg 758w,
                                         src/assets/images/starterset-content/schwalbe_bikeSoap_09_beutel-large.jpg 1033w" alt="Schwalbe Bikesoap Beutel">
                                </picture>
                                <div class="slide-text">
                                    <h4>Beutel</h4>
                                    <p>Packnatur® Mehrweg Cellulose.<br/>Beutel, kompostierbar.</p>
                                </div>
                            </div>
                            <div class="slide">
                                <picture>
                                    <source srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-xsmall.avif 400w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-small.avif 600w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-medium.avif 758w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-large.avif 1033w" type="image/avif">
                                    <source srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-xsmall.webp 400w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-small.webp 600w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-medium.webp 758w,
                                            src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-large.webp 1033w" type="image/webp">
                                    <img src="src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-large.jpg"
                                         srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-xsmall.jpg 400w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-small.jpg 600w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-medium.jpg 758w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_05_seife-large.jpg 1033w" alt="Schwalbe Bikesoap Seife">
                                </picture>
                                <div class="slide-text">
                                    <h4>Seife</h4>
                                    <p>Natürlich, ohne künstliche<br/>Zusätze, vegan.</p>
                                </div>
                            </div>
                            <div class="slide">
                                <picture>
                                    <source srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-xsmall.avif 400w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-small.avif 600w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-medium.avif 758w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-large.avif 1033w" type="image/avif">
                                    <source srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-xsmall.webp 400w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-small.webp 600w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-medium.webp 758w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-large.webp 1033w" type="image/webp">
                                    <img src="src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-large.jpg"
                                         srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-xsmall.jpg 400w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-small.jpg 600w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-medium.jpg 758w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_01_buerste-large.jpg 1033w" alt="Schwalbe Bikesoap Bürste">
                                </picture>
                                <div class="slide-text">
                                    <h4>Bürste</h4>
                                    <p>Holzbürste mit Rosshaarbesatz.<br/>Für schonende Reinigung.</p>
                                </div>
                            </div>
                            <div class="slide">
                                <picture>
                                    <source srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-xsmall.avif 400w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-small.avif 600w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-medium.avif 758w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-large.avif 1033w" type="image/avif">
                                    <source srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-xsmall.webp 400w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-small.webp 600w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-medium.webp 758w,
                                                    src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-large.webp 1033w" type="image/webp">
                                    <img src="src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-large.jpg"
                                         srcset="src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-xsmall.jpg 400w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-small.jpg 600w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-medium.jpg 758w,
                                                 src/assets/images/starterset-content/schwalbe_bikeSoap_02_box-large.jpg 1033w" alt="Schwalbe Bikesoap Box">
                                </picture>
                                <div class="slide-text">
                                    <h4>Box</h4>
                                    <p>Wiederverwendbare Aufbewahrungsbox.<br/> 100% recyclebar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-control carousel-next" class:active={controlNextActive}>
                        <img src="src/assets/images/carousel/chevron-right.svg" alt="Pfeil rechts">
                    </div>
                </div>
                    <!--<div slot="next" on:click={showNextPage} class="carousel-control carousel-next" class:active={carouselIndex < carouselMaxIndex}>
                        <img src="src/assets/images/carousel/chevron-right.svg">
                    </div>-->
<!--                </Carousel>-->
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
        display: inline-block;
        margin: 0 calc($grid-gutter-width / 2);
        @include media-breakpoint-down(md) {
          width: 100%;
        }
        picture {
          padding: 0 15px;
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
          h4 {
            margin-top: 0;
            margin-bottom: 10px;
          }
          p {
            margin: 0;
          }
        }
      }

      .carousel-wrapper {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: calc($grid-gutter-width/2);

        overflow: hidden;
        .carousel-control {
          position: absolute;
          top: 50%;
          align-self: center;
          opacity: 0;
          cursor: pointer;
          z-index: 3;
          transition: opacity 0.5s;
          pointer-events: none;

          @include media-breakpoint-up(md) {
            transform: translateY(-50%);
          }
          @include media-breakpoint-up(lg) {
            position: relative;
            top: unset;
            transform: unset;
          }

          img {
            max-width: 75%;

            @include media-breakpoint-up(md) {
              max-width: 100%;
            }
          }

          &.active {
            opacity: 1;
            pointer-events: all;
          }

          &.carousel-prev {
            left: 0;
            @include media-breakpoint-up(lg) {
              grid-column: 1;
            }

            img {
              float: left
            }
          }
          &.carousel-next {
            right: 0;
            @include media-breakpoint-up(lg) {
              grid-column: 12;
            }

            img {
              float: right;
            }
          }
        }
        .carousel-inner {
          grid-column: 2/12;
          .carousel-stage {
            display: flex;
            width: 400%;
            transform: translateX(0);
            transition: transform 0.5s;

            @include media-breakpoint-up(lg) {
              width: 200%;
            }
          }
        }
      }
    }
</style>
