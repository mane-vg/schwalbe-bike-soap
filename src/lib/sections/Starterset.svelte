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
            <source srcset="./src/assets/images/starterset/old-brown-paper-texture-background.avif" type="image/avif">
            <source srcset="./src/assets/images/starterset/old-brown-paper-texture-background.webp" type="image/webp">
            <img src="./src/assets/images/starterset/old-brown-paper-texture-background.jpg" type="image/webp">
        </picture>
        <div class="container" use:initParallax>
            <img class="icon-parallax" src="src/assets/images/starterset/schwalbe-icon-jetzt-erhaeltlich.svg" type="img/svg">
            <div class="span-12">
                <picture class="">
                    <source srcset="./src/assets/images/starterset/bike-soap-8.avif" type="image/avif">
                    <source srcset="./src/assets/images/starterset/bike-soap-8.webp" type="image/webp">
                    <img src="./src/assets/images/starterset/bike-soap-8.jpg">
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
        }
        .container {
          position: relative;
          .icon-parallax {
            position: absolute;
            left: 0;
            top: 30%;
            --translate-x: 0px;
            transform: translate(-50%, var(--translate-x));
            transition: transform 0.1s;
          }
          .text-container {
            grid-column: 3/12;
            margin: -125px 0 100px 0;
            h2 {
              font-size: 120px;
              color: white;
            }
            a.btn {
              display: inline-block;
              float: left;
            }
            .uvp {
              font-size: 70px;
              font-weight: bold;
              display: inline-block;
              float: right;
              .identifier {
                font-size: 25px;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
</style>
