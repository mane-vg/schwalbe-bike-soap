<script>

    function initFeatureSlider(element) {
        let imageContainer = element.querySelector('.image-container');
        let textContainer = element.querySelector('.text-container');

        let scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    window.addEventListener('scroll', scrollListener);
                } else {
                    window.removeEventListener('scroll', scrollListener);
                }
            });
        }, {});
        scrollObserver.observe(element);

        let lastScroll = element.parentNode.getBoundingClientRect().top;
        let scrollStep = 1;
        let scrollStepHeight = element.parentNode.scrollHeight / 3;
        function scrollListener(event) {
            let stickyWrapper = element.parentNode;
            let stickyContainerHeight = element.scrollHeight;
            let scrolledDistance = Math.abs(stickyWrapper.getBoundingClientRect().top - 80 - stickyContainerHeight);

            if(lastScroll > stickyWrapper.getBoundingClientRect().top) {
                if(scrolledDistance > scrollStep * scrollStepHeight && scrollStep < 3) {
                    nextElement();
                    scrollStep++;
                }
            } else {
                if(scrolledDistance < scrollStep * scrollStepHeight && scrollStep > 1) {
                    previousElement();
                    scrollStep--;
                }
            }

            lastScroll = stickyWrapper.getBoundingClientRect().top;
        }


        function nextElement() {
            let currentImageElement = imageContainer.querySelector('.slide.active');
            let currentTextElement = textContainer.querySelector('.slide.active');

            let nextImageElement = currentImageElement.nextElementSibling;
            let nextTextElement = currentTextElement.nextElementSibling;

            if(nextImageElement) {
                currentImageElement.classList.remove('active');
                currentImageElement.classList.add('prev');
                nextImageElement.classList.remove('next');
                nextImageElement.classList.add('active');
            }
            if(nextTextElement) {
                currentTextElement.classList.remove('active');
                currentTextElement.classList.add('prev');
                nextTextElement.classList.remove('next');
                nextTextElement.classList.add('active');
            }
        }

        function previousElement() {
            let currentImageElement = imageContainer.querySelector('.slide.active');
            let currentTextElement = textContainer.querySelector('.slide.active');

            let prevImageElement = currentImageElement.previousElementSibling;
            let prevTextElement = currentTextElement.previousElementSibling;

            if(prevImageElement) {
                currentImageElement.classList.remove('active');
                currentImageElement.classList.add('next');
                prevImageElement.classList.remove('prev');
                prevImageElement.classList.add('active');
            }
            if(prevTextElement) {
                currentTextElement.classList.remove('active');
                currentTextElement.classList.add('next');
                prevTextElement.classList.remove('prev');
                prevTextElement.classList.add('active');
            }
        }
    }
</script>

<section class="features">
    <div class="row">
        <div class="container-fluid">
            <h2>Was macht die Seife aus?</h2>
            <div class="sticky-wrapper">
                <div class="feature-wrapper" use:initFeatureSlider>
                    <div class="image-container">
                        <picture class="background">
                            <source srcset="@publish.domain/images/backgrounds/old-brown-paper-texture-background-square-small.avif 500w,
                                            @publish.domain/images/backgrounds/old-brown-paper-texture-background-square-medium.avif 1000w,
                                            @publish.domain/images/backgrounds/old-brown-paper-texture-background-square-large.avif 1500w" type="image/avif">
                            <source srcset="@publish.domain/images/backgrounds/old-brown-paper-texture-background-square-large.webp 500w,
                                            @publish.domain/images/backgrounds/old-brown-paper-texture-background-square-large.webp 1000w,
                                            @publish.domain/images/backgrounds/old-brown-paper-texture-background-square-large.webp 1500w" type="image/webp">
                            <img src="@publish.domain/images/backgrounds/old-brown-paper-texture-background-square-large.jpg"
                                 srcset="@publish.domain/images/backgrounds/old-brown-paper-texture-background-square-small.jpg 500w,
                                         @publish.domain/images/backgrounds/old-brown-paper-texture-background-square-medium.jpg 1000w,
                                         @publish.domain/images/backgrounds/old-brown-paper-texture-background-square-large.jpg 1500w" alt="Hintergrund braunes Papier">
                        </picture>
                        <div class="slide active">
                            <div class="slide-content">
                                <picture>
                                    <source srcset="@publish.domain/images/features/bike-soap-9-small.avif,
                                                    @publish.domain/images/features/bike-soap-9-medium.avif,
                                                    @publish.domain/images/features/bike-soap-9-large.avif" type="image/avif">
                                    <source srcset="@publish.domain/images/features/bike-soap-9-small.webp,
                                                    @publish.domain/images/features/bike-soap-9-medium.webp,
                                                    @publish.domain/images/features/bike-soap-9-large.webp" type="image/webp">
                                    <img src="@publish.domain/images/features/bike-soap-9-large.jpg"
                                         srcset="@publish.domain/images/features/bike-soap-9-small.jpg,
                                                 @publish.domain/images/features/bike-soap-9-medium.jpg,
                                                 @publish.domain/images/features/bike-soap-9-large.jpg" alt="Schwalbe Bike Soap Frau mit Bürste">
                                </picture>
                            </div>
                        </div>
                        <div class="slide next">
                            <div class="slide-content">
                                <picture>
                                    <source srcset="@publish.domain/images/features/bike-soap-12-small.avif,
                                                    @publish.domain/images/features/bike-soap-12-medium.avif,
                                                    @publish.domain/images/features/bike-soap-12-large.avif" type="image/avif">
                                    <source srcset="@publish.domain/images/features/bike-soap-12-small.webp,
                                                    @publish.domain/images/features/bike-soap-12-medium.webp,
                                                    @publish.domain/images/features/bike-soap-12-large.webp" type="image/webp">
                                    <img src="@publish.domain/images/features/bike-soap-12-large.jpg"
                                         srcset="@publish.domain/images/features/bike-soap-12-small.jpg,
                                                 @publish.domain/images/features/bike-soap-12-medium.jpg,
                                                 @publish.domain/images/features/bike-soap-12-large.jpg" alt="Schwalbe Bike Soap Bürste am Fahrrad">
                                </picture>
                            </div>
                        </div>
                        <div class="slide next">
                            <div class="slide-content">
                                <picture>
                                    <source srcset="@publish.domain/images/features/bike-soap-13-small.avif,
                                                    @publish.domain/images/features/bike-soap-13-medium.avif,
                                                    @publish.domain/images/features/bike-soap-13-large.avif" type="image/avif">
                                    <source srcset="@publish.domain/images/features/bike-soap-13-small.webp,
                                                    @publish.domain/images/features/bike-soap-13-medium.webp,
                                                    @publish.domain/images/features/bike-soap-13-large.webp" type="image/webp">
                                    <img src="@publish.domain/images/features/bike-soap-13-large.jpg"
                                         srcset="@publish.domain/images/features/bike-soap-13-small.jpg,
                                                 @publish.domain/images/features/bike-soap-13-medium.jpg,
                                                 @publish.domain/images/features/bike-soap-13-large.jpg" alt="Schwalbe Bike Soap Fahrrad abspülen">
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <picture class="background">
                            <source srcset="@publish.domain/images/features/feature-background-small.avif 500w,
                                            @publish.domain/images/features/feature-background-medium.avif 1000w,
                                            @publish.domain/images/features/feature-background-large.avif 1500w" type="image/avif">
                            <source srcset="@publish.domain/images/features/feature-background-small.webp 500w,
                                            @publish.domain/images/features/feature-background-medium.webp 1000w,
                                            @publish.domain/images/features/feature-background-large.webp 1500w" type="image/webp">
                            <img src="@publish.domain/images/features/feature-background-large.jpg"
                                 srcet="@publish.domain/images/features/feature-background-small.jpg 500w,
                                        @publish.domain/images/features/feature-background-medium.jpg 1000w,
                                        @publish.domain/images/features/feature-background-large.jpg 1500w" alt="Braunes Papier Hintergrund mit Streifen">
                        </picture>
                        <hr class="top"/>
                        <hr class="bottom"/>
                        <div class="slide active">
                            <div class="slide-content">
                                <h3 class="highlighted">Lange <br class="no-xs"/>Nutzungsdauer</h3>
                                <p>Eine Seife reicht für bis zu 100 Wäschen. Für eine Wäsche reicht es aus,
                                    die Bürste zwei bis dreimal wieder frisch mit der Seife einzuschäumen.</p>
                            </div>
                        </div>
                        <div class="slide next">
                            <div class="slide-content">
                                <h3 class="highlighted">Hervorragende Reinigungswirkung</h3>
                                <p>Die Bike Soap wirkt entfettend und ist stark schäumend.
                                    Die Dreckpartikel auf dem Fahrrad werden umhüllt und können anschließend, ohne zu kratzen, abgewaschen werden.
                                    Die Seife hat außerden fettlösende Eigenschaften.</p>
                            </div>
                        </div>
                        <div class="slide next">
                            <div class="slide-content">
                                <h3 class="highlighted">Ausschließlich natürliche Inhaltsstoffe</h3>
                                <p>Die Bike Soap ist dermatologisch getestet, vegan und mikroplastikfrei.
                                    Deshalb werden weder Lacke noch Reifen bei der Reinigung angegriffen.
                                    Die Seife ist zu 100% biologisch abbaubar nach OECD.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss" global>
  @import "src/assets/scss/_import.scss";

    section.features {
      .row {
        .container-fluid {
          .sticky-wrapper {
            height: 350vh;
            .feature-wrapper {
              position: sticky;
              top: 130px;
              left: 0;
              right: 0;
              height: calc(100vh - 130px);
              @include display-grid;
              grid-template-columns: 1fr;
              grid-template-rows: calc(50vh - 130px) calc(50vh);

              overflow: hidden;

              @include media-breakpoint-up(lg) {
                top: 80px;
                height: calc(100vh - 80px);

                grid-template-columns: 1fr 1fr;
                grid-template-rows: unset;
              }
              @include media-breakpoint-up(xl) {
                top: 80px;
                height: 50vw;
              }

              .image-container {
                position: relative;

                grid-column: span 1;
                order: 1;

                overflow: hidden;

                picture.background {
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;

                  img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                  }
                }

                .slide {
                  position: absolute;
                  top: 0;

                  width: 100%;
                  height: 100%;

                  transition: left 1s;

                  img {
                    opacity: 0;
                    object-fit: cover;
                    transition: opacity 1s;

                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;

                    @include media-breakpoint-up(lg) {
                      height: 100%;
                    }
                  }

                  &.prev {
                    left: -100%;
                    img {
                      transition-delay: 0.5s;
                    }
                  }
                  &.active {
                    left: 0;
                    img {
                      opacity: 1;
                    }
                  }
                  &.next {
                    left: 100%;
                    img {
                      transition-delay: 0.5s;
                    }
                  }

                  .slide-content {
                    width: 100%;
                    height: 100%;

                    picture {
                      mix-blend-mode: multiply;
                      img {

                      }
                    }
                  }
                }
              }
              .text-container {
                position: relative;
                grid-column: span 1;
                order: 2;

                overflow: hidden;

                picture.background {
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  z-index: -1;

                  img {
                    height: 100%;
                    width: 100%;

                    @include media-breakpoint-up(xl) {
                      object-fit: cover;
                      width: unset;
                    }
                  }
                }

                hr.top, hr.bottom {
                  position: absolute;
                  width: 75%;
                  left: 50%;
                  transform: translateX(-50%);

                  &.top {
                    top: calc($section-margin/10);
                    @include media-breakpoint-up(xs) {
                      top: calc($section-margin/5);
                    }
                    @include media-breakpoint-up(md) {
                      top: calc($section-margin/2);
                    }
                    @include media-breakpoint-up(lg) {
                      top: calc($section-margin/1.25);
                    }
                  }
                  &.bottom {
                    bottom: calc($section-margin/10);
                    @include media-breakpoint-up(xs) {
                      bottom: calc($section-margin/5);
                    }
                    @include media-breakpoint-up(md) {
                      bottom: calc($section-margin/2);
                    }
                    @include media-breakpoint-up(lg) {
                      bottom: calc($section-margin/1.25);
                    }
                  }
                }

                .slide {
                  position: absolute;
                  top: 0;
                  left: 0;

                  opacity: 0;

                  transition: left 1s, opacity 1s;

                  &.prev {
                    left: -100%;
                  }
                  &.active {
                    opacity: 1;
                  }
                  &.next {
                    left: 100%;
                  }

                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  height: 100%;
                  width: 100%;

                  .slide-content {
                    padding: 0 7.5%;
                    @include media-breakpoint-up(md) {
                      padding: 25%;
                    }
                    @include media-breakpoint-up(lg) {
                      padding: 10%;
                    }
                    @include media-breakpoint-up(xl) {
                      padding: 0 10%;
                    }
                    h3 {
                      font-size: calc($h1-large-size / 4.25);
                      line-height: 1;
                      margin: 0;

                      @include media-breakpoint-up(xs) {
                        font-size: calc($h1-large-size / 3.75);
                      }
                      //@include media-breakpoint-up(md) {
                      //  font-size: calc($h1-large-size * 3/7);
                      //}
                      @include media-breakpoint-up(lg) {
                        font-size: calc($h1-large-size * 3/7);
                      }
                      @include media-breakpoint-up(xl) {
                        font-size: calc($h1-large-size * 6/7);
                      }

                      .no-xs {
                        @include media-breakpoint-down(xs) {
                          display: none;
                        }
                      }
                    }
                    p {
                      text-align: center;
                      @include media-breakpoint-down(md) {
                        font-size: $font-size-base * 0.8;
                      }
                      @include media-breakpoint-up(lg) {
                        padding: 0 10%;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
</style>
