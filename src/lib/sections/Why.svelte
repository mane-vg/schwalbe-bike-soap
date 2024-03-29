<script>
    import { onMount } from 'svelte';
    import Carousel from 'svelte-carousel';

    function initParallax(element, parameters) {
        let oldPosition;
        let initialOffset = parseInt(getComputedStyle(element).getPropertyValue('--translate-x'));

        if(window.innerWidth < 1200) {
            parameters.maxOffset = 0;
        }

        if(window.innerWidth < 450) {
            return;
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
                let xValue = Math.min(parameters.maxOffset, (offset - (position - oldPosition)/parameters.multiplier));
                element.style.setProperty('--translate-x', xValue + 'px');
            } else {
                let xValue = Math.max(initialOffset, (offset - (position - oldPosition)/parameters.multiplier));
                element.style.setProperty('--translate-x', xValue + 'px');
            }
            oldPosition = position;
        }
    }

    onMount(() => {
        window.addEventListener('resize', initParallax);
        window.addEventListener('orientationchange', initParallax);
    });
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
                        <source srcset="@publish.domain/images/why/Unbound-Schwalbe-Peter-small.avif 200w,
                                        @publish.domain/images/why/Unbound-Schwalbe-Peter-medium.avif 350w,
                                        @publish.domain/images/why/Unbound-Schwalbe-Peter-large.avif 493w" type="image/avif">
                        <source srcset="@publish.domain/images/why/Unbound-Schwalbe-Peter-small.webp 200w,
                                        @publish.domain/images/why/Unbound-Schwalbe-Peter-medium.webp 350w,
                                        @publish.domain/images/why/Unbound-Schwalbe-Peter-large.webp 493w" type="image/webp">
                        <img src="@publish.domain/images/why/Unbound-Schwalbe-Peter-large.jpg"
                             srcset="@publish.domain/images/why/Unbound-Schwalbe-Peter-small.jpg 200w,
                                     @publish.domain/images/why/Unbound-Schwalbe-Peter-medium.jpg 350w,
                                     @publish.domain/images/why/Unbound-Schwalbe-Peter-large.jpg 493w" alt="Schwalbe Peter Krischio">
                    </picture>
                    <picture use:initParallax={{multiplier: 1, maxOffset: 50}}>
                        <source srcset="@publish.domain/images/why/streifen-small.avif 200w,
                                        @publish.domain/images/why/streifen-medium.avif 350w,
                                        @publish.domain/images/why/streifen-large.avif 500w" type="image/avif">
                        <source srcset="@publish.domain/images/why/streifen-small.webp 200w,
                                        @publish.domain/images/why/streifen-medium.webp 350w,
                                        @publish.domain/images/why/streifen-large.webp 500w" type="image/webp">
                        <img src="@publish.domain/images/why/streifen-large.png"
                             srcset="@publish.domain/images/why/streifen-small.png 200w,
                                     @publish.domain/images/why/streifen-medium.png 350w,
                                     @publish.domain/images/why/streifen-large.png 500w" alt="Streifenmuster">
                    </picture>
                    <picture use:initParallax={{multiplier: 1.75, maxOffset: 0}}>
                        <source srcset="@publish.domain/images/why/bike-soap-5-small.avif 200w,
                                        @publish.domain/images/why/bike-soap-5-medium.avif 350w,
                                        @publish.domain/images/why/bike-soap-5-large.avif 500w" type="image/avif">
                        <source srcset="@publish.domain/images/why/bike-soap-5-small.webp 200w,
                                        @publish.domain/images/why/bike-soap-5-medium.webp 350w,
                                        @publish.domain/images/why/bike-soap-5-large.webp 500w" type="image/webp">
                        <img src="@publish.domain/images/why/bike-soap-5-large.jpg"
                             srcset="@publish.domain/images/why/bike-soap-5-small.jpg 200w,
                                     @publish.domain/images/why/bike-soap-5-medium.jpg 350w,
                                     @publish.domain/images/why/bike-soap-5-large.jpg 500w" alt="Schwalbe Bike Soap">
                    </picture>
                </div>
            </div>
            <div class="col-right">
                <div class="quote-slider">
                    <img class="quote-open" src="@publish.domain/images/why/icon-quote-open.svg" alt="Quote open">
                    <Carousel particlesToShow={1} particlesToScroll={1} infinite={true} arrows={false} autoplay={true} autoplayDuration={7500}
                              pauseOnFocus={true} dots={true} swiping={true} duration={500} let:currentPageIndex let:pagesCount let:showPage>
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
                    <img class="quote-close" src="@publish.domain/images/why/icon-quote-close.svg" alt="Quote close">
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";

    section.why {
      .container {
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
        @include media-breakpoint-down(md) {
          order: 2;
        }
      }

      .col-left {
        grid-column: 1/13;
        min-height: 50vh;
        order: 1;
        @include media-breakpoint-up(md) {
          min-height: 75vh;
        }
        @include media-breakpoint-up(lg) {
          order: 2;
          grid-column: 1/6;
          min-height: unset;
        }
      }
      .col-right {
        grid-column: 1/13;
        width: 100%;
        order: 3;
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

          max-width: 65%;

          transform: translateY(var(--translate-x));
          transition: transform 0.1s;
          @include media-breakpoint-up(lg) {
            max-width: 55%;
            --translate-x: -200px;
          }

          &:nth-child(1) {
            top: 0;
            left: 10%;
            z-index: 3;
            @include media-breakpoint-up(lg) {
              --translate-x: -200px;
            }
          }
          &:nth-child(2) {

            top: 25%;
            left: 0;

            mix-blend-mode: multiply;

            z-index: 2;
            @include media-breakpoint-up(lg) {
              --translate-x: -275px;
            }
          }
          &:nth-child(3) {
            bottom: 0;
            right: 0;
            z-index: 1;
            @include media-breakpoint-up(lg) {
              --translate-x: -300px;
            }
          }
        }
      }

      .quote-slider {
        position: relative;
        .quote-open {
          max-width: 20%;
          @include media-breakpoint-up(lg) {
            transform: translateX(-100%);
          }
        }
        .quote-close {
          float: right;
          max-width: 20%;
          @include media-breakpoint-up(lg) {
            transform: translateX(-100%);
          }
        }

        .slide {
          //padding: 0 $grid-gutter-width;
          display: flex;
          align-items: center;
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
              font-size: $font-size-base;
              @include media-breakpoint-up(lg) {
                font-size: $font-size-base * 1.3;
              }
              span {
                font-weight: 600;
              }
            }
          }
        }
      }

      .carousel-dots {
        display: flex;
        margin-top: 1rem;
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
