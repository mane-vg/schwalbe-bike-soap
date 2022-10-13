<script>
    function initParallax(element) {
        let oldPosition;

        let item = element.querySelector('.icon-parallax');
        let options = {};
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    window.addEventListener('scroll', iconScrollHandler);
                    oldPosition = item.getBoundingClientRect().y;
                }
                if(!entry.isIntersecting) {
                    window.removeEventListener('scroll', iconScrollHandler);
                }
            });
        };
        let startersetObserver = new IntersectionObserver(callback, options);
        startersetObserver.observe(item);

        function iconScrollHandler() {
            let position = item.getBoundingClientRect().y;
            let offset = parseInt(getComputedStyle(item).getPropertyValue('--translate-x'));
            // if(position < oldPosition) {
            //     item.style.setProperty('--translate-x', (offset - (position - oldPosition)/3) + 'px');
            // } else {
                item.style.setProperty('--translate-x', (offset - (position - oldPosition)/3) + 'px');
            // }
            oldPosition = position;
        }
    }
</script>

<section class="starterset">
    <div class="row">
        <picture class="background">
            <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.avif 750w,
                            src/assets/images/backgrounds/old-brown-paper-texture-background-medium.avif 1200w,
                            src/assets/images/backgrounds/old-brown-paper-texture-background-large.avif 1920w" type="image/avif">
            <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.webp 750w,
                            src/assets/images/backgrounds/old-brown-paper-texture-background-medium.webp 1200w,
                            src/assets/images/backgrounds/old-brown-paper-texture-background-large.webp" type="image/webp">
            <img src="src/assets/images/backgrounds/old-brown-paper-texture-background-large.jpg"
                 srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.jpg 750w,
                         src/assets/images/backgrounds/old-brown-paper-texture-background-medium.jpg 1200w,
                         src/assets/images/backgrounds/old-brown-paper-texture-background-large.jpg 1920w" type="image/webp">
        </picture>
        <div class="container" use:initParallax>
            <img class="icon-parallax" src="src/assets/images/starterset/schwalbe-icon-jetzt-erhaeltlich.svg" type="img/svg">
            <div class="span-12">
                <picture class="">
                    <source srcset="src/assets/images/starterset/bike-soap-8-small.avif 750w,
                                    src/assets/images/starterset/bike-soap-8-medium.avif 1200w,
                                    src/assets/images/starterset/bike-soap-8-large.avif 1920w" type="image/avif">
                    <source srcset="src/assets/images/starterset/bike-soap-8-small.webp 750w,
                                    src/assets/images/starterset/bike-soap-8-medium.webp 1200w,
                                    src/assets/images/starterset/bike-soap-8-large.webp 1920w" type="image/webp">
                    <img src="src/assets/images/starterset/bike-soap-8-large.jpg"
                         srcset="src/assets/images/starterset/bike-soap-8-small.jpg 750w,
                                 src/assets/images/starterset/bike-soap-8-medium.jpg 1200w,
                                 src/assets/images/starterset/bike-soap-8-large.jpg 1920w">
                </picture>
            </div>
            <div class="text-container">
                <h2 class="h1 highlighted">Startset mit Blechdose + <br/>Bio-Rosshaarbürste</h2>
                <a class="btn btn-primary" href="https://google.com">Zum Produkt</a>
                <div class="uvp"><span class="identifier">UVP</span> 29,90 €</div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/import.scss";

    .starterset {
      overflow: hidden;
      .row {
        picture.background {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 75%;

          z-index: -1;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .container {
          position: relative;
          .icon-parallax {
            position: absolute;
            left: 0;
            top: 30%;
            max-width: 70px;
            --translate-x: 0px;
            transform: translate(-25%, var(--translate-x));
            transition: transform 0.1s;

            @include media-breakpoint-up(md) {
              max-width: 120px;
              transform: translate(-15%, var(--translate-x));
            }
            @include media-breakpoint-up(lg) {
              max-width: unset;
              transform: translate(-50%, var(--translate-x));
            }
          }
          .text-container {
            grid-column: 3/13;
            margin: -35px 0 100px 0;

            @include media-breakpoint-up(md) {
              margin: -60px 0 60px 0;
            }
            @include media-breakpoint-up(lg) {
              margin: -125px 0 100px 0;
            }

            h2 {
              font-size: calc($h1-large-size / 3.5);
              color: white;

              @include media-breakpoint-up(md) {
                font-size: calc($h1-large-size / 2);
              }
              @include media-breakpoint-up(lg) {
                font-size: calc($h1-large-size * 6/7);
              }
            }
            a.btn {
              display: inline-block;
              float: left;
            }
            .uvp {
              font-size: calc($h1-large-size / 4);
              font-weight: bold;
              display: inline-block;
              float: right;

              @include media-breakpoint-up(md) {
                font-size: calc($h1-large-size / 2);
              }
              @include media-breakpoint-up(lg) {
                font-size: calc($h1-large-size / 2);
              }

              .identifier {
                font-size: $font-size-base;
                font-weight: 600;

                @include media-breakpoint-up(lg) {
                  font-size: $font-size-base * 1.25;
                }
                @include media-breakpoint-up(lg) {
                  font-size: $font-size-base * 1.25;
                }
              }
            }
          }
        }
      }
    }
</style>
