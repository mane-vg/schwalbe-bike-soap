<script>
    import Carousel from 'svelte-carousel';

    // export let maxOffset = 0;

    function initParallax(element, parameters) {
        let oldPosition;
        let initialOffset = parseInt(getComputedStyle(element).getPropertyValue('--translate-x'));

        if(window.innerWidth < 1200) {
            parameters.maxOffset = 0;
        }

        let options = {};
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    window.addEventListener('scroll', iconScrollHandler);
                    oldPosition = element.getBoundingClientRect().y;
                }
                if(!entry.isIntersecting) {
                    window.removeEventListener('scroll', iconScrollHandler);
                }
            });
        };
        let startersetObserver = new IntersectionObserver(callback, options);
        startersetObserver.observe(element);

        function iconScrollHandler() {
            let position = element.getBoundingClientRect().y;
            let offset = parseInt(getComputedStyle(element).getPropertyValue('--translate-x'));
            if(position < oldPosition) {
                console.log(parameters.maxOffset);
                let xValue = Math.min(parameters.maxOffset, (offset - (position - oldPosition)/parameters.multiplier));
                console.log(xValue);
                element.style.setProperty('--translate-x', xValue + 'px');
            } else {
                let xValue = Math.max(initialOffset, (offset - (position - oldPosition)/parameters.multiplier));
                element.style.setProperty('--translate-x', xValue + 'px');
            }
            oldPosition = position;
        }
    }
</script>

<section class="why">
    <div class="row">
        <div class="container">
            <div class="span-12">
                <h2>Wieso hat Schwalbe eine Bike Seife produziert?</h2>
            </div>
            <div class="col-left">
                <div class="image-wrapper">
                    <picture use:initParallax={{multiplier: 1.5, maxOffset: 50}}>
                        <source srcset="src/assets/images/why/Unbound-Schwalbe-Peter-small.avif 200w,
                                        src/assets/images/why/Unbound-Schwalbe-Peter-medium.avif 350w,
                                        src/assets/images/why/Unbound-Schwalbe-Peter-large.avif 493w" type="image/avif">
                        <source srcset="src/assets/images/why/Unbound-Schwalbe-Peter-small.webp 200w,
                                        src/assets/images/why/Unbound-Schwalbe-Peter-medium.webp 350w,
                                        src/assets/images/why/Unbound-Schwalbe-Peter-large.webp 493w" type="image/webp">
                        <img src="src/assets/images/why/Unbound-Schwalbe-Peter-large.jpg"
                             srcset="src/assets/images/why/Unbound-Schwalbe-Peter-small.jpg 200w,
                                     src/assets/images/why/Unbound-Schwalbe-Peter-medium.jpg 350w,
                                     src/assets/images/why/Unbound-Schwalbe-Peter-large.jpg 493w" alt="Schwalbe Peter Krischio">
                    </picture>
                    <picture use:initParallax={{multiplier: 1, maxOffset: 50}}>
                        <source srcset="src/assets/images/why/streifen-small.avif 200w,
                                        src/assets/images/why/streifen-medium.avif 350w,
                                        src/assets/images/why/streifen-large.avif 500w" type="image/avif">
                        <source srcset="src/assets/images/why/streifen-small.webp 200w,
                                        src/assets/images/why/streifen-medium.webp 350w,
                                        src/assets/images/why/streifen-large.webp 500w" type="image/webp">
                        <img src="../../assets/images/why/streifen-large.png"
                             srcset="src/assets/images/why/streifen-small.png 200w,
                                     src/assets/images/why/streifen-medium.png 350w,
                                     src/assets/images/why/streifen-large.png 500w" alt="Streifenmuster">
                    </picture>
                    <picture use:initParallax={{multiplier: 1.75, maxOffset: 0}}>
                        <source srcset="src/assets/images/why/bike-soap-5-small.avif 200w,
                                        src/assets/images/why/bike-soap-5-medium.avif 350w,
                                        src/assets/images/why/bike-soap-5-large.avif 500w" type="image/avif">
                        <source srcset="src/assets/images/why/bike-soap-5-small.webp 200w,
                                        src/assets/images/why/bike-soap-5-medium.webp 350w,
                                        src/assets/images/why/bike-soap-5-large.webp 500w" type="image/webp">
                        <img src="src/assets/images/why/bike-soap-5-large.jpg"
                             srcset="src/assets/images/why/bike-soap-5-small.jpg 200w,
                                     src/assets/images/why/bike-soap-5-medium.jpg 350w,
                                     src/assets/images/why/bike-soap-5-large.jpg 500w" alt="Schwalbe Bike Soap">
                    </picture>
                </div>
            </div>
            <div class="col-right">
                <div class="quote-slider">
                    <img class="quote-open" src="src/assets/images/why/icon-quote-open.svg" alt="Quote open">
                    <Carousel particlesToShow={1} particlesToScroll={1} infinite={true} arrows={false} autoplay={true} autoplayDuration={5000}
                              pauseOnFocus={true} dots={true} swiping={false} duration={500} let:currentPageIndex let:pagesCount let:showPage>
                        <div class="slide">
                            <figure class="quote">
                                <blockquote>
                                    <p>Die Idee entstand aus unserem eigenen, praktischen Bedarf,
                                        häufig viele Bikes zu waschen und dabei weniger Reinigungsmaterial einzusetzen,
                                        das wesentlich länger hält.</p>
                                </blockquote>
                                <figcaption><span>Peter Krischio</span><br/>Product Manager</figcaption>
                            </figure>
                        </div>
                        <div class="slide">
                            <figure class="quote">
                                <blockquote>
                                    <p>Ganz einfach: Sie hält sehr lange und lässt sich sehr umweltfreundlich entwickeln.</p>
                                </blockquote>
                                <figcaption><span>Peter Krischio</span><br/>Product Manager</figcaption>
                            </figure>
                        </div>
                        <div class="slide">
                            <figure class="quote">
                                <blockquote>
                                    <p>Eine Seife reicht für bis zu 100 Wäschen – wenn man das auf den Preis von 7,90 Euro mal herunterrechnet,
                                       ist eine einzelne Wäsche enorm günstig.</p>
                                </blockquote>
                                <figcaption><span>Peter Krischio</span><br/>Product Manager</figcaption>
                            </figure>
                        </div>
                        <div slot="dots" class="carousel-dots">
                            {#each Array(pagesCount) as _, pageIndex(pageIndex)}
                                <div class="carousel-dot" active={currentPageIndex === pageIndex} on:click={showPage(pageIndex)}></div>
                            {/each}
                        </div>
                    </Carousel>
                    <img class="quote-close" src="src/assets/images/why/icon-quote-close.svg" alt="Quote close">
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";

    section.why {
      .container {
        grid-row-gap: $grid-gutter-width * 4;
        @include media-breakpoint-up(md) {

        }
        @include media-breakpoint-up(lg) {
          grid-row-gap: unset;
        }
      }
      .span-12 {
        z-index: 4;
        h2 {
          margin-bottom: $section-margin * 0.7;
        }
      }

      .col-left {
        grid-column: 1/13;
        min-height: 50vh;
        @include media-breakpoint-up(lg) {
          grid-column: 1/6;
          min-height: unset;
        }
      }
      .col-right {
        grid-column: 1/13;
        @include media-breakpoint-up(lg) {
          grid-column: 7/13;
        }
      }
      .image-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        picture {
          position: absolute;

          max-width: 55%;

          --translate-x: -200px;
          transform: translateY(var(--translate-x));
          transition: transform 0.1s;

          &:nth-child(1) {
            --translate-x: -200px;
            top: 0;
            left: 10%;
            z-index: 3;
          }
          &:nth-child(2) {
            --translate-x: -275px;
            top: 25%;
            left: 0;

            mix-blend-mode: multiply;

            z-index: 2;
          }
          &:nth-child(3) {
            --translate-x: -300px;
            bottom: 0;
            right: 0;
            z-index: 1;
          }
        }
      }

      .quote-slider {
        position: relative;
        .quote-open {
          @include media-breakpoint-up(lg) {
            transform: translateX(-100%);
          }
        }
        .quote-close {
          float: right;
          @include media-breakpoint-up(lg) {
            transform: translateX(-100%);
          }
        }

        .slide {
          //padding: 0 $grid-gutter-width;
          figure.quote {
            margin: 0 10px;
            blockquote {
              margin: 0;
              p {
                font-family: "Rock Salt";

                @include media-breakpoint-up(lg) {
                  font-size: $font-size-base * 1.6;
                }
              }
            }
            figcaption {
              padding-left: 2rem;
              font-family: $font-family-base;
              font-size: $font-size-base * 1.3;
              span {
                font-weight: 600;
              }
            }
          }
        }
      }

      .carousel-dots {
        display: flex;
        .carousel-dot {
          display: inline-block;
          background: transparent;
          border: 2px solid $primary;
          border-radius: 100%;
          height: 11px;
          width: 11px;
          margin: 0 10px;
          &[active="true"] {
            background: $primary;
          }
        }
      }
    }
</style>
