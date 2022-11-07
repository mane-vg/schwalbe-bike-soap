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
        if(window.innerWidth >= 900) {
            startersetObserver.observe(item);
        }

        let startingOffset = parseInt(getComputedStyle(item).getPropertyValue('--translate-x'));
        let maxOffset = parseInt(getComputedStyle(item).getPropertyValue('--translate-x-max'));

        function iconScrollHandler() {
            let position = item.getBoundingClientRect().y;
            let offset = parseInt(getComputedStyle(item).getPropertyValue('--translate-x'));
            if(position < oldPosition) {
                let xValue = Math.min(maxOffset, (offset - (position - oldPosition)/3));
                item.style.setProperty('--translate-x', xValue + 'px');
            } else {
                let xValue = Math.max(startingOffset, (offset - (position - oldPosition)/3));
                item.style.setProperty('--translate-x', xValue + 'px');
            }
            oldPosition = position;
        }
    }

    function initZoom(element) {
        let options = {threshold: 1};
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    element.querySelector('img').style.transform = 'scale(1.25)';
                }
                if(!entry.isIntersecting) {
                    element.querySelector('img').style.transform = '';
                }
            });
        };
        let imageObserver = new IntersectionObserver(callback, options);
        imageObserver.observe(element);
    }
</script>

<section class="starterset">
    <div class="row">
        <picture class="background">
            <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.avif 1170w,
                            src/assets/images/backgrounds/old-brown-paper-texture-background-medium.avif 1200w,
                            src/assets/images/backgrounds/old-brown-paper-texture-background-large.avif 1920w" type="image/avif">
            <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.webp 1170w,
                            src/assets/images/backgrounds/old-brown-paper-texture-background-medium.webp 1200w,
                            src/assets/images/backgrounds/old-brown-paper-texture-background-large.webp" type="image/webp">
            <img src="src/assets/images/backgrounds/old-brown-paper-texture-background-large.jpg"
                 srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-small.jpg 1170w,
                         src/assets/images/backgrounds/old-brown-paper-texture-background-medium.jpg 1200w,
                         src/assets/images/backgrounds/old-brown-paper-texture-background-large.jpg 1920w" alt="Papiertextur">
        </picture>
        <div class="container" use:initParallax>
            <img class="icon-parallax" src="src/assets/images/starterset/schwalbe-icon-jetzt-erhaeltlich.svg" type="img/svg" alt="Schwalbe Bike Soap: Jetzt erhältlich">
            <div class="span-12">
                <picture class="" use:initZoom>
                    <source srcset="src/assets/images/starterset/bike-soap-8-small.avif 1170w,
                                    src/assets/images/starterset/bike-soap-8-medium.avif 1200w,
                                    src/assets/images/starterset/bike-soap-8-large.avif 1920w" type="image/avif">
                    <source srcset="src/assets/images/starterset/bike-soap-8-small.webp 1170w,
                                    src/assets/images/starterset/bike-soap-8-medium.webp 1200w,
                                    src/assets/images/starterset/bike-soap-8-large.webp 1920w" type="image/webp">
                    <img src="src/assets/images/starterset/bike-soap-8-large.jpg"
                         srcset="src/assets/images/starterset/bike-soap-8-small.jpg 1170w,
                                 src/assets/images/starterset/bike-soap-8-medium.jpg 1200w,
                                 src/assets/images/starterset/bike-soap-8-large.jpg 1920w" alt="Schwalbe BikeSoap im Einsatz">
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
          .span-12 {
            overflow: hidden;
            picture {
              img {
                width: 100%;
                transform: scale(1);
                transition: transform 1.5s ease-in-out;
              }
            }
          }
          .icon-parallax {
            position: absolute;
            left: 10%;
            top: 40%;
            max-width: 85px;
            --translate-x: -125px;
            --translate-x-max: 0;
            transform: translate(-25%, var(--translate-x));
            transition: transform 0.1s;
            z-index: 1;
            mix-blend-mode: color-burn;

            @include media-breakpoint-up(md) {
              max-width: 120px;
              transform: translate(-15%, var(--translate-x));
            }
            @include media-breakpoint-up(lg) {
              left: 0;
              top: 30%;
              max-width: 150px;
              --translate-x: -200px;
              --translate-x-max: 300px;
              transform: translate(-20%, var(--translate-x));
            }
            @include media-breakpoint-up(xl) {
              max-width: unset;
              --translate-x: -255px;
              --translate-x-max: 335px;
              transform: translate(-30%, var(--translate-x));
            }
          }
          .text-container {
            grid-column: 2/13;
            margin: -45px 0 35px 0;
            z-index: 1;

            @include media-breakpoint-up(md) {
              margin: -60px 0 60px 0;
            }
            @include media-breakpoint-up(lg) {
              margin: -100px 0 100px 0;
            }
            @include media-breakpoint-up(xl) {
              margin: -110px 0 100px 0;
            }

            h2 {
              font-size: 3rem;//calc($h1-large-size / 3.75);
              color: white;

              @include media-breakpoint-up(md) {
                font-size: calc($h1-large-size / 2);
              }
              @include media-breakpoint-up(lg) {
                font-size: calc($h1-large-size * 4/5);
              }
              @include media-breakpoint-up(xl) {
                font-size: calc($h1-large-size * 6/7);
              }
            }
            a.btn {
              display: inline-block;
              float: left;
            }
            .uvp {
              font-size: calc($h1-large-size / 6);
              font-weight: bold;
              display: inline-block;
              float: right;
              font-family: "Titillium Web";
              line-height: 1;
              margin-top: 0.75rem;

              @include media-breakpoint-up(md) {
                margin-top: 0;
                font-size: calc($h1-large-size / 2);
              }
              @include media-breakpoint-up(lg) {
                font-size: calc($h1-large-size / 2);
                margin-top: -2rem;
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
