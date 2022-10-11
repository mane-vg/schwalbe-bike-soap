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
                            <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background.avif" type="image/avif">
                            <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background.webp" type="image/webp">
                            <img src="src/assets/images/backgrounds/old-brown-paper-texture-background-square.jpg">
                        </picture>
                        <div class="slide active">
                            <div class="slide-content">
                                <picture>
                                    <source srcset="src/assets/images/features/bike-soap-9.avif" type="image/avif">
                                    <source srcset="src/assets/images/features/bike-soap-9.webp" type="image/webp">
                                    <img src="src/assets/images/features/bike-soap-9.jpg">
                                </picture>
                            </div>
                        </div>
                        <div class="slide next">
                            <div class="slide-content">
                                <picture>
                                    <source srcset="src/assets/images/features/bike-soap-12.avif" type="image/avif">
                                    <source srcset="src/assets/images/features/bike-soap-12.webp" type="image/webp">
                                    <img src="src/assets/images/features/bike-soap-12.jpg">
                                </picture>
                            </div>
                        </div>
                        <div class="slide next">
                            <div class="slide-content">
                                <picture>
                                    <source srcset="src/assets/images/features/bike-soap-13.avif" type="image/avif">
                                    <source srcset="src/assets/images/features/bike-soap-13.webp" type="image/webp">
                                    <img src="src/assets/images/features/bike-soap-13.jpg">
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <picture class="background">
                            <source srcset="src/assets/images/features/feature-background.avif" type="image/avif">
                            <source srcset="src/assets/images/features/feature-background.webp" type="image/webp">
                            <img src="src/assets/images/features/feature-background.jpg">
                        </picture>
                        <div class="slide active">
                            <div class="slide-content">
                                <h3 class="highlighted">Lange Nutzungsdauer</h3>
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
              top: 80px;
              left: 0;
              right: 0;

              height: 50vw;

              @include display-grid;
              grid-template-columns: 1fr 1fr;

              overflow: hidden;

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
                    height: 100%;
                    object-fit: cover;
                    transition: opacity 1s;
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
                    object-fit: cover;
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
                    padding: 0 22%;
                    h3 {
                      font-size: 120px;
                      line-height: 1;
                      margin: 0;
                    }
                    p {
                      text-align: center;
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
