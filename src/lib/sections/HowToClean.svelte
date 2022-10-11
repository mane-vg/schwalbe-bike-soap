<script>

    export let prev = true;
    export let next = true;
    export let ytID = '0gor32MSyiA';

    function initHowToSlider(element) {
        let scrollHeight = element.querySelector('.slide.active').offsetHeight;

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
        <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background.avif" type="image/avif">
        <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background.webp" type="image/webp">
        <img src="src/assets/images/backgrounds/old-brown-paper-texture-background.jpg">
    </picture>
    <div class="row">
        <div class="container">
            <div class="span-6">
                <h2>Wie wasche ich mein Fahrrad mit der Bike Soap?</h2>
            </div>
            <div class="span-12">
                <div class="video-wrapper" use:initIframeEmbed>
                    <img class="thumbnail" src="src/assets/images/howtoclean/bike-soap-thumb.jpg">
                    <img class="play-button" src="src/assets/images/howtoclean/play-button.svg">
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="container">
            <div class="span-8 offset-1">
                <div class="slider-wrapper">
                    {#if prev}
                        <button class="carousel-prev"><img src="src/assets/images/howtoclean/chevron-left.svg"></button>
                    {/if}
                    <div class="slider-stage" use:initHowToSlider>
                        <div class="slide active">
                                    <picture>
                                        <source srcset="src/assets/images/howtoclean/icon-grober-schmutz.avif" type="image/avif">
                                        <source srcset="src/assets/images/howtoclean/icon-grober-schmutz.webp" type="image/webp">
                                        <img src="src/assets/images/howtoclean/icon-grober-schmutz.png">
                                    </picture>
                                    <div class="text-container">
                                        <span class="highlighted count">1 &ndash;&nbsp;</span>
                                        <span class="highlighted desc">Abspritzen</span>
                                        <p>Zuerst das Fahrrad einmal mit Wasser komplett abspritzen und dabei den groben Dreck entfernen.</p>
                                    </div>
                                </div>
                        <div class="slide next">
                                    <picture>
                                        <source srcset="src/assets/images/howtoclean/icon-seife-nass.avif" type="image/avif">
                                        <source srcset="src/assets/images/howtoclean/icon-seife-nass.webp" type="image/webp">
                                        <img src="src/assets/images/howtoclean/icon-seife-nass.png">
                                    </picture>
                                    <div class="text-container">
                                        <span class="highlighted count">2 &ndash;&nbsp;</span>
                                        <span class="highlighted desc">Einseifen</span>
                                        <p>Mit der feuchten Bürste oder einem Schwamm schäumt man die Seife auf. Dann reinigt man damit sein Bike und spült es anschließend wieder mit Wasser ab.</p>
                                    </div>
                                </div>
                        <div class="slide next">
                                    <picture>
                                        <source srcset="src/assets/images/howtoclean/icon-buerste-einseifen.avif" type="image/avif">
                                        <source srcset="src/assets/images/howtoclean/icon-buerste-einseifen.webp" type="image/webp">
                                        <img src="src/assets/images/howtoclean/icon-buerste-einseifen.png">
                                    </picture>
                                    <div class="text-container">
                                        <span class="highlighted count">3 &ndash;&nbsp;</span>
                                        <span class="highlighted desc">Reinigen</span>
                                        <p>Zwei bis dreimal die Bürste wieder frisch mit der Seife einschäumen, das reicht für eine Wäsche.</p>
                                    </div>
                                </div>
                        <div class="slide next">
                                    <picture>
                                        <source srcset="src/assets/images/howtoclean/icon-abspuelen.avif" type="image/avif">
                                        <source srcset="src/assets/images/howtoclean/icon-abspuelen.webp" type="image/webp">
                                        <img src="src/assets/images/howtoclean/icon-abspuelen.png">
                                    </picture>
                                    <div class="text-container">
                                        <span class="highlighted count">4 &ndash;&nbsp;</span>
                                        <span class="highlighted desc">Abspülen</span>
                                        <p>Dann die Seife wieder kurz abwaschen und in der Blechdose verstauen. Zack, ist man fertig.</p>
                                    </div>
                                </div>
                    </div>
                    {#if next}
                        <button class="carousel-next"><img src="src/assets/images/howtoclean/chevron-right.svg"></button>
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
        height: 75%;

        overflow: hidden;
      }
      .row {
        .container {
          .span-8.offset-1 {
            grid-column: 3/13;
          }
        }
      }

      .video-wrapper {
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
        }
        &:hover {
          .play-button {
            transform: translate(-50%, 0) scale(1.25);
          }
        }
      }

      .slide {
        @include display-grid;
        grid-template-columns: 250px 1fr;
        grid-gap: 5rem;

        picture {
          grid-column: 1;
        }
        .text-container {
          position: relative;
          grid-column: 2;
          span.highlighted {
            display: inline-block;
            font-size: $font-size-base * 10.9;
            color: white;
            grid-column: 2;
            line-height: 1;
            text-transform: uppercase;

            &.count {
              position: absolute;
              left: 0;
              top: 0;
              transform: translate(-10rem, -5rem);
            }
            &.desc {
              transform: translate(-0rem, -5rem);
            }
          }
          p {
            transform: translate(-0rem, -5rem);
            max-width: 55%;
          }
        }
      }

      .slider-wrapper {
        position: relative;
        margin-top: $section-margin;
        .carousel-next, .carousel-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;

          cursor: pointer;

          transition: opacity 1s;
        }
        .carousel-prev {
          left: -20%;
        }
        .carousel-next {
          right: 0;
        }
      }

      .slider-stage {
        position: relative;
        padding: 100px 0;
        overflow: hidden;
        .slide {
          position: absolute;
          left: 0;

          picture {
            opacity: 0;
            transition: opacity 1s;
          }
          span.highlighted {
            transition: transform 1s;
          }
          p {
            opacity: 0;
            transition: opacity 1s;
          }

          &.active {
            position: relative;
            top: 100px;
            picture {
              opacity: 1;
            }
            span.highlighted {
              &.count {
                transform: translate(-10rem, -5rem);
              }
              &.desc {
                transform: translate(0, -5rem);
              }
            }
            p {
              opacity: 1;
            }
          }
          &.prev {
            span.highlighted {
              &.count {
                transform: translate(-10rem, -50rem);
              }
              &.desc {
                transform: translate(0, -50rem);
              }
            }
          }
          &.next {
            span.highlighted {
              &.count {
                transform: translate(-10rem, 50rem);
              }
              &.desc {
                transform: translate(0, 50rem);
              }
            }
          }
        }
      }
    }
</style>
