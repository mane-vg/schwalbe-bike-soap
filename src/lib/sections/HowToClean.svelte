<script>

    export let prev = true;
    export let next = true;
    export let ytID = 'ZabXvqVOEIo';

    function initHowToSlider(element) {
        let scrollHeight;
        if(window.innerWidth < 900) {
            scrollHeight = element.querySelector('.slide.active').offsetHeight + element.querySelector('.slide.active .text-container').offsetHeight;
        } else {
            scrollHeight = element.querySelector('.slide.active').offsetHeight;
        }
        // let scrollHeight = element.querySelector('.slide.active').offsetHeight + element.querySelector('.slide.active .text-container').offsetHeight;
        element.style.height = scrollHeight + 'px';
        element.querySelectorAll('.slide').forEach((slide) => {
            slide.style.height = scrollHeight + 'px';
            slide.style.position = 'absolute';
        });

        element.parentNode.querySelector('.carousel-prev').addEventListener('click', prevElement);
        element.parentNode.querySelector('.carousel-next').addEventListener('click', nextElement);

        if(!element.querySelector('.slide.active').previousElementSibling) {
            element.parentNode.querySelector('.carousel-prev').style.opacity = 0;
        }
        if(!element.querySelector('.slide.active').nextElementSibling) {
            element.parentNode.querySelector('.carousel-prev').style.opacity = 0;
        }

        function nextElement() {
            let currentElement = element.querySelector('.slide.active');

            let nextElement = currentElement.nextElementSibling;

            if(nextElement) {
                currentElement.classList.remove('active');
                currentElement.classList.add('prev');
                nextElement.classList.remove('next');
                nextElement.classList.add('active');
            }
            if(nextElement.previousElementSibling) {
                element.parentNode.querySelector('.carousel-prev').style.opacity = 1;
            }
            if(!nextElement.nextElementSibling) {
                element.parentNode.querySelector('.carousel-next').style.opacity = 0;
            }
        }

        function prevElement() {
            let currentElement = element.querySelector('.slide.active');

            let prevElement = currentElement.previousElementSibling;

            if(prevElement) {
                currentElement.classList.remove('active');
                currentElement.classList.add('next');
                prevElement.classList.remove('prev');
                prevElement.classList.add('active');
            }
            if(prevElement.nextElementSibling) {
                element.parentNode.querySelector('.carousel-next').style.opacity = 1;
            }
            if(!prevElement.previousElementSibling) {
                element.parentNode.querySelector('.carousel-prev').style.opacity = 0;
            }
        }
    }

    function initIframeEmbed(element) {
        element.querySelector('.thumbnail').addEventListener('click', function() {
            let elementWidth = element.clientWidth;
            let elementHeight = element.clientHeight;
            let iframeCode = '<iframe width="' + elementWidth + '" height="' + elementHeight + '" src="https://www.youtube-nocookie.com/embed/' + ytID + '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>'
            element.innerHTML = iframeCode;
        });
    }
</script>

<section class="how-to-clean">
    <picture class="background">
        <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.avif 750w,
                        src/assets/images/backgrounds/old-brown-paper-texture-background-medium.avif 1200w,
                        src/assets/images/backgrounds/old-brown-paper-texture-background-large.avif 1920w" type="image/avif">
        <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.webp 750w,
                        src/assets/images/backgrounds/old-brown-paper-texture-background-medium.webp 1200w,
                        src/assets/images/backgrounds/old-brown-paper-texture-background-large.webp 1920w" type="image/webp">
        <img src="src/assets/images/backgrounds/old-brown-paper-texture-background-large.jpg"
             srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.jpg 750w,
                     src/assets/images/backgrounds/old-brown-paper-texture-background-medium.jpg 1200w,
                     src/assets/images/backgrounds/old-brown-paper-texture-background-large.jpg 1920w" alt="Papiertextur">
    </picture>
    <div class="row">
        <div class="container">
            <div class="span-6">
                <h2>Wie wasche ich mein Fahrrad mit der Bike Soap?</h2>
            </div>
            <div class="span-12">
                <div class="video-wrapper" use:initIframeEmbed>
                    <picture class="thumbnail">
                        <source srcset="src/assets/images/howtoclean/bike-soap-thumb-large.avif 750w,
                                        src/assets/images/howtoclean/bike-soap-thumb-large.avif 1200w,
                                        src/assets/images/howtoclean/bike-soap-thumb-large.avif 1600w" type="image/avif">
                        <source srcset="src/assets/images/howtoclean/bike-soap-thumb-large.webp 750w,
                                        src/assets/images/howtoclean/bike-soap-thumb-large.webp 1200w,
                                        src/assets/images/howtoclean/bike-soap-thumb-large.webp 1600w" type="image/webp">
                        <img class="thumbnail" src="src/assets/images/howtoclean/bike-soap-thumb-large.jpg"
                             srcset="src/assets/images/howtoclean/bike-soap-thumb-large.jpg 750w,
                                     src/assets/images/howtoclean/bike-soap-thumb-large.jpg 1200w,
                                     src/assets/images/howtoclean/bike-soap-thumb-large.jpg 1600w" alt="Frau wäscht Fahrrad">
                    </picture>
                    <img class="play-button" src="src/assets/images/howtoclean/play-button.svg" alt="Playbutton">
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="container">
            <div class="span-8">
                <h3>Schritt für Schritt zum sauberen Bike</h3>
            </div>
            <div class="span-8 offset-1">
                <div class="slider-wrapper">
                    {#if prev}
                        <button class="carousel-prev">
                            <svg x="0px" y="0px" viewBox="0 0 113 113" style="enable-background:new 0 0 113 113;" width="113" height="113" xml:space="preserve">
                                <style type="text/css">.st0{fill:none;stroke:#2E2D2B;stroke-width:9;}</style>
                                <g transform="translate(-1623 -3331)">
                                    <path id="Pfad_686" class="st0" d="M1694.9,3350.7l-30.6,37l30.6,37.7"/>
                                </g>
                            </svg>
                        </button>
                    {/if}
                    <div class="slider-stage" use:initHowToSlider>
                        <div class="slide active">
                                    <picture>
                                        <source srcset="src/assets/images/howtoclean/icon-grober-schmutz-small.avif 250w,
                                                        src/assets/images/howtoclean/icon-grober-schmutz-medium.avif 400w,
                                                        src/assets/images/howtoclean/icon-grober-schmutz-large.avif 526w" type="image/avif">
                                        <source srcset="src/assets/images/howtoclean/icon-grober-schmutz-small.webp 250w,
                                                        src/assets/images/howtoclean/icon-grober-schmutz-medium.webp 400w,
                                                        src/assets/images/howtoclean/icon-grober-schmutz-large.webp 526w" type="image/webp">
                                        <img src="../../assets/images/howtoclean/icon-grober-schmutz-large.png"
                                             srcset="src/assets/images/howtoclean/icon-grober-schmutz-small.png 250w,
                                                     src/assets/images/howtoclean/icon-grober-schmutz-medium.png 400w,
                                                     src/assets/images/howtoclean/icon-grober-schmutz-large.png 526w" alt="Groben Schmutz mit Wasser entfernen">
                                    </picture>
                                    <div class="text-container">
                                        <span class="highlighted count">1 &ndash;&nbsp;</span>
                                        <span class="highlighted desc">Abspritzen</span>
                                        <p>Zuerst das Fahrrad einmal mit Wasser komplett abspritzen und dabei den groben Dreck entfernen.</p>
                                    </div>
                                </div>
                        <div class="slide next">
                                    <picture>
                                        <source srcset="src/assets/images/howtoclean/icon-seife-nass-small.avif 250w,
                                                        src/assets/images/howtoclean/icon-seife-nass-medium.avif 400w,
                                                        src/assets/images/howtoclean/icon-seife-nass-large.avif 526w" type="image/avif">
                                        <source srcset="src/assets/images/howtoclean/icon-seife-nass-small.webp 250w,
                                                        src/assets/images/howtoclean/icon-seife-nass-medium.webp 400w,
                                                        src/assets/images/howtoclean/icon-seife-nass-large.webp 526w" type="image/webp">
                                        <img src="src/assets/images/howtoclean/icon-seife-nass-large.png"
                                             srcset="src/assets/images/howtoclean/icon-seife-nass-small.png 250w,
                                                     src/assets/images/howtoclean/icon-seife-nass-medium.png 400w,
                                                     src/assets/images/howtoclean/icon-seife-nass-large.png 526w" alt="Seife mit Bürste aufschäumen">
                                    </picture>
                                    <div class="text-container">
                                        <span class="highlighted count">2 &ndash;&nbsp;</span>
                                        <span class="highlighted desc">Einseifen</span>
                                        <p>Mit der feuchten Bürste oder einem Schwamm schäumt man die Seife auf. Dann reinigt man damit sein Bike und spült es anschließend wieder mit Wasser ab.</p>
                                    </div>
                                </div>
                        <div class="slide next">
                                    <picture>
                                        <source srcset="src/assets/images/howtoclean/icon-buerste-einseifen-small.avif 250w,
                                                        src/assets/images/howtoclean/icon-buerste-einseifen-medium.avif 400w,
                                                        src/assets/images/howtoclean/icon-buerste-einseifen-large.avif 526w" type="image/avif">
                                        <source srcset="src/assets/images/howtoclean/icon-buerste-einseifen-small.webp 250w,
                                                        src/assets/images/howtoclean/icon-buerste-einseifen-medium.webp 400w,
                                                        src/assets/images/howtoclean/icon-buerste-einseifen-large.webp 526w" type="image/webp">
                                        <img src="src/assets/images/howtoclean/icon-buerste-einseifen-large.png"
                                             srcset="src/assets/images/howtoclean/icon-buerste-einseifen-small.png 250w,
                                                     src/assets/images/howtoclean/icon-buerste-einseifen-medium.png 400w,
                                                     src/assets/images/howtoclean/icon-buerste-einseifen-large.png 526w" alt="Fahrrad mit Bürste und Seife reinigen">
                                    </picture>
                                    <div class="text-container">
                                        <span class="highlighted count">3 &ndash;&nbsp;</span>
                                        <span class="highlighted desc">Reinigen</span>
                                        <p>Zwei bis dreimal die Bürste wieder frisch mit der Seife einschäumen, das reicht für eine Wäsche.</p>
                                    </div>
                                </div>
                        <div class="slide next">
                                    <picture>
                                        <source srcset="src/assets/images/howtoclean/icon-abspuelen-small.avif 250w,
                                                        src/assets/images/howtoclean/icon-abspuelen-medium.avif 400w,
                                                        src/assets/images/howtoclean/icon-abspuelen-large.avif 526w" type="image/avif">
                                        <source srcset="src/assets/images/howtoclean/icon-abspuelen-small.webp 250w,
                                                        src/assets/images/howtoclean/icon-abspuelen-medium.webp 400w,
                                                        src/assets/images/howtoclean/icon-abspuelen-large.webp 526w" type="image/webp">
                                        <img src="src/assets/images/howtoclean/icon-abspuelen-large.png"
                                             srcset="src/assets/images/howtoclean/icon-abspuelen-small.png 250w,
                                                     src/assets/images/howtoclean/icon-abspuelen-medium.png 400w,
                                                     src/assets/images/howtoclean/icon-abspuelen-large.png 526w" alt="Seife abwaschen und in Blechdose verstauen">
                                    </picture>
                                    <div class="text-container">
                                        <span class="highlighted count">4 &ndash;&nbsp;</span>
                                        <span class="highlighted desc">Abspülen</span>
                                        <p>Dann die Seife wieder kurz abwaschen und in der Blechdose verstauen. Zack, ist man fertig.</p>
                                    </div>
                                </div>
                    </div>
                    {#if next}
                        <button class="carousel-next">
                            <svg x="0px" y="0px" viewBox="0 0 113 113" style="enable-background:new 0 0 113 113;" width="113" height="113" xml:space="preserve">
                                <style type="text/css">.st0{fill:none;stroke:#2E2D2B;stroke-width:9;}</style>
                                <g transform="translate(-1623 -3331)">
                                    <path class="st0" d="M1664.1,3424.3l30.6-37l-30.6-37.7"/>
                                </g>
                            </svg>
                        </button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss" global>
  @import "src/assets/scss/_import.scss";

    section.how-to-clean {
      position: relative;
      picture.background {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 60%;

        overflow: hidden;

        @include media-breakpoint-up(lg) {
          height: 75%;
        }

        img {
          @include media-breakpoint-down(lg) {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .row {
        .container {
          @include media-breakpoint-down(md) {
            margin: 0 (-$grid-margin-md);
          }
          @include media-breakpoint-down(sm) {
            margin: 0 (-$grid-margin-sm);
          }
          @include media-breakpoint-down(xs) {
            margin: 0 (-$grid-margin-xs);
          }
          .span-8.offset-1 {
            grid-column: 1/13;
            @include media-breakpoint-up(lg) {
              grid-column: 3/13;
            }
          }
        }
      }

      .video-wrapper {
        position: relative;
        .thumbnail {
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.5s;
        }
        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 0) scale(1);
          transform-origin: center center;
          transition: transform 0.5s, opacity 0.5s;
          cursor: pointer;
          pointer-events: none;

          @include media-breakpoint-down(md) {
            max-width: 100px;
            top: 30%;
          }

          @include media-breakpoint-up(lg) {
            transform: translate(-50%, -50%) scale(1);
          }
        }
        &:hover {
          .play-button {
            transform: translate(-50%, 0) scale(1.25);

            @include media-breakpoint-up(lg) {
              transform: translate(-50%, -50%) scale(1.25);
            }
          }
        }
      }

      .slide {
        @include display-grid;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr;
        grid-gap: 2rem;

        //@include media-breakpoint-up(md) {
        //  grid-template-columns: 200px 1fr;
        //  grid-template-rows: auto;
        //  grid-gap: 5rem;
        //}
        @include media-breakpoint-up(lg) {
          grid-template-columns: 250px 1fr;
          grid-template-rows: auto;
          grid-gap: 5rem;
        }

        picture {
          @include media-breakpoint-down(md) {
            max-width: 25%;
            margin: 0 auto;
          }
          @include media-breakpoint-down(sm) {
            max-width: 45%;
            margin: 0 auto;
          }

          /*@include media-breakpoint-up(md) {
            max-width: 100%;
            margin: unset;
          }*/
          @include media-breakpoint-up(lg) {
            grid-column: 1;
          }
        }
        .text-container {
          position: relative;
          @include media-breakpoint-down(md) {
            max-width: 60%;
            margin: 0 auto;
          }
          @include media-breakpoint-down(sm) {
            max-width: 100%;
            margin: 0 $grid-margin-sm;
          }
          @include media-breakpoint-down(xs) {
            margin: 0 $grid-margin-xs;
          }
          @include media-breakpoint-down(md) {
            text-align: center;
          }
          @include media-breakpoint-up(lg) {
            grid-column: 2;
          }
          span.highlighted {
            display: inline-block;
            font-size: $font-size-base * 4.5;
            color: white;
            grid-column: 2;
            line-height: 1;
            text-transform: uppercase;

            //transform: translate(-4rem, -1.5rem);

            @include media-breakpoint-up(lg) {
              font-size: $font-size-base * 7.6;
            }
            @include media-breakpoint-up(xl) {
              font-size: $font-size-base * 10.9;
            }

            &.count {
              @include media-breakpoint-up(lg) {
                position: absolute;
                left: 0;
                top: 0;
                transform: translate(-10rem, -1.5rem);
              }
              @include media-breakpoint-up(xl) {
                position: absolute;
                left: 0;
                top: 0;
                transform: translate(-10rem, -1.5rem);
              }
            }
            &.desc {
              @include media-breakpoint-up(lg) {
                transform: translate(-0rem, -4rem);
              }
              @include media-breakpoint-up(xl) {
                transform: translate(-0rem, -5rem);
              }
            }
          }
          p {
            @include media-breakpoint-up(lg) {
              max-width: 75%;
              transform: translate(-0rem, -5rem);
            }
            @include media-breakpoint-up(xl) {
              max-width: 55%;
              transform: translate(-0rem, -5rem);
            }
          }
        }
      }

      .slider-wrapper {
        position: relative;
        margin-top: $section-margin * 0.5;
        margin-bottom: $section-margin * 0.5;
        //margin: calc($section-margin * 0.5) calc($grid-gutter-width/2);

        @include media-breakpoint-up(lg) {
          margin-top: $section-margin;
          margin-bottom: 0;
          //margin: $section-margin 0;
        }
        .carousel-next, .carousel-prev {
          position: absolute;
          top: 30%;
          transform: translateY(-50%);
          background: none;
          border: none;

          cursor: pointer;

          transition: opacity 1s;

          z-index: 3;

          @include media-breakpoint-up(lg) {
            top: calc(50% - 2.5rem);
          }

          &:hover {
            svg {
              g {
                path {
                  fill: none;
                  stroke: $primary;
                }
              }
            }
          }
        }
        .carousel-prev {
          left: 0;
          @include media-breakpoint-up(lg) {
            left: -20%;
          }
        }
        .carousel-next {
          right: 0;
        }
      }

      .slider-stage {
        position: relative;
        padding: 0 0 50px 0;
        overflow: hidden;

        @include media-breakpoint-up(lg) {
          padding: 100px 0;
        }
        .slide {
          position: absolute;
          left: 0;

          picture {
            mix-blend-mode: multiply;
            opacity: 0;
            transition: opacity 1s;
          }
          span.highlighted {
            @include media-breakpoint-down(lg) {
              transition: opacity 1s;
            }
            @include media-breakpoint-up(lg) {
              transition: transform 1s, opacity 1s;
            }
          }
          p {
            opacity: 0;
            transition: opacity 1s;
          }

          &.active {
            position: relative;

            @include media-breakpoint-up(lg) {
              top: 100px;
            }
            picture {
              opacity: 1;
            }
            span.highlighted {
              @include media-breakpoint-down(lg) {
                opacity: 1;
              }
              &.count {
                @include media-breakpoint-up(lg) {
                  transform: translate(-10rem, -4rem);
                }
                @include media-breakpoint-up(xl) {
                  transform: translate(-10rem, -5rem);
                }
              }
              &.desc {
                @include media-breakpoint-up(lg) {
                  transform: translate(0, -4rem);
                }
                @include media-breakpoint-up(xl) {
                  transform: translate(0, -5rem);
                }
              }
            }
            p {
              opacity: 1;
            }
          }
          &.prev {
            span.highlighted {
              opacity: 0;
              @include media-breakpoint-down(lg) {
                opacity: 0;
              }
              &.count {
                @include media-breakpoint-up(lg) {
                  transform: translate(-10rem, -8rem);
                }
              }
              &.desc {
                @include media-breakpoint-up(lg) {
                  transform: translate(0, -8rem);
                }
              }
            }
          }
          &.next {
            span.highlighted {
              opacity: 0;
              @include media-breakpoint-down(lg) {
                opacity: 0;
              }
              &.count {
                @include media-breakpoint-up(lg) {
                  transform: translate(-10rem, 0.5rem);
                }
              }
              &.desc {
                @include media-breakpoint-up(lg) {
                  transform: translate(0, 0.5rem);
                }
              }
            }
          }
        }
      }
    }
</style>
