<script>
    import Carousel from 'svelte-carousel';
</script>

<section class="starterset-contents">
    <div class="row">
        <div class="container-fluid">
            <div class="span-12">
                <h3>Das Starterset beinhaltet</h3>
                <Carousel particlesToShow={2} particlesToScroll={1} infinite={false} swiping={false}
                    let:showPrevPage let:showNextPage>
                    <div slot="prev" on:click={showPrevPage} class="carousel-control carousel-prev">
                        <img src="src/assets/images/carousel/chevron-left.svg">
                    </div>
                    <div class="slide">
                        <picture>
                            <source srcset="./src/assets/images/starterset-content/bikesoap-beutel.avif" type="image/avif">
                            <source srcset="./src/assets/images/starterset-content/bikesoap-beutel.webp" type="image/webp">
                            <img src="./src/assets/images/starterset-content/bikesoap-beutel.jpg" alt="Schwalbe Bikesoap Beutel">
                        </picture>
                        <div class="slide-text">
                            <h4>Beutel</h4>
                            <p>Packnatur® Mehrweg Cellulose.<br/>Beutel, kompostierbar.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <picture>
                            <source srcset="./src/assets/images/starterset-content/bikesoap-seife.avif" type="image/avif">
                            <source srcset="./src/assets/images/starterset-content/bikesoap-seife.webp" type="image/webp">
                            <img src="./src/assets/images/starterset-content/bikesoap-seife.jpg" alt="Schwalbe Bikesoap Seife">
                        </picture>
                        <div class="slide-text">
                            <h4>Seife</h4>
                            <p>Natürlich, ohne künstliche<br/>Zusätze, vegan.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <picture>
                            <source srcset="./src/assets/images/starterset-content/bikesoap-buerste.avif" type="image/avif">
                            <source srcset="./src/assets/images/starterset-content/bikesoap-buerste.webp" type="image/webp">
                            <img src="./src/assets/images/starterset-content/bikesoap-buerste.jpg" alt="Schwalbe Bikesoap Bürste">
                        </picture>
                        <div class="slide-text">
                            <h4>Bürste</h4>
                            <p>Holzbürste mit Rosshaarbesatz.<br/>Für schonende Reinigung.</p>
                        </div>
                    </div>
                    <div class="slide">
                        <picture>
                            <source srcset="./src/assets/images/starterset-content/bikesoap-box.avif" type="image/avif">
                            <source srcset="./src/assets/images/starterset-content/bikesoap-box.webp" type="image/webp">
                            <img src="./src/assets/images/starterset-content/bikesoap-box.jpg" alt="Schwalbe Bikesoap Box">
                        </picture>
                        <div class="slide-text">
                            <h4>Box</h4>
                            <p>Wiederverwendbare Aufbewahrungsbox.<br/> 100% recyclebar.</p>
                        </div>
                    </div>
                    <div slot="next" on:click={showNextPage} class="carousel-control carousel-next">
                        <img src="src/assets/images/carousel/chevron-right.svg">
                    </div>
                </Carousel>
            </div>
        </div>
    </div>
</section>

<style lang="scss" global>
    @import "src/assets/scss/_import.scss";

    .starterset-contents {
      .sc-carousel__content-container {
        .sc-carousel__pages-window {
          padding: 0 150px;
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          z-index: 3;
          &.carousel-prev {
            left: 0;
          }
          &.carousel-next {
            right: 0;
          }
        }
      }
      .slide {
        max-width: 50%;
        img {

        }
        .slide-text {
          margin: 0 auto;
          text-align: center;
        }
      }
    }
</style>
