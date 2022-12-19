<script>
    import Carousel from 'svelte-carousel';
</script>

<section class="social">
    <div class="row">
        <div class="container">
            <div class="span-12">
                <h2>Es schäumen schon viele vor Freude</h2>
            </div>
        </div>
    </div>
    <div class="row">
        <picture class="background">
            <source srcset="@publish.domain/images/backgrounds/old-brown-paper-texture-background-small.avif 1170w,
                        @publish.domain/images/backgrounds/old-brown-paper-texture-background-medium.avif 1200w,
                        @publish.domain/images/backgrounds/old-brown-paper-texture-background-large.avif 1920w" type="image/avif">
            <source srcset="@publish.domain/images/backgrounds/old-brown-paper-texture-background-small.webp 1170w,
                        @publish.domain/images/backgrounds/old-brown-paper-texture-background-medium.webp 1200w,
                        @publish.domain/images/backgrounds/old-brown-paper-texture-background-large.webp 1920w" type="image/webp">
            <img src="@publish.domain/images/backgrounds/old-brown-paper-texture-background-large.jpg"
                 srcset="@publish.domain/images/backgrounds/old-brown-paper-texture-background-small.jpg 1170w,
                     @publish.domain/images/backgrounds/old-brown-paper-texture-background-medium.jpg 1200w,
                     @publish.domain/images/backgrounds/old-brown-paper-texture-background-large.jpg 1920w" alt="Papiertextur">
        </picture>
        <div class="container social-container">
            <a class="instagram-link account" href="https://instagram.com/" target="_blank"><img src="@publish.domain/images/social/icon-instagram.svg" alt="Icon Instagram"></a>
            <hr/>
            <div class="social-slider">
                <Carousel particlesToShow={1} particlesToScroll={1} arrows={false} autoplay={true} pauseOnFocus={true} dots={false} swiping={false}>
                    <div class="slide">
                        <div class="slide-content">
                            <picture>
                                <source srcset="@publish.domain/images/social/bikesoap-instagram-1-large.avif" type="image/avif">
                                <source srcset="@publish.domain/images/social/bikesoap-instagram-1-large.webp" type="image/webp">
                                <img src="@publish.domain/images/social/bikesoap-instagram-1.large.jpg"
                                     srcset="@publish.domain/images/social/bikesoap-instagram-1-large.jpg" alt="Schwalbe Bike Soap in Aktion">
                            </picture>
                            <a href="https://www.instagram.com/steffimarth/" target="_blank">@steffimarth</a>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-content">
                            <picture>
                                <source srcset="@publish.domain/images/social/bikesoap-instagram-2-large.avif" type="image/avif">
                                <source srcset="@publish.domain/images/social/bikesoap-instagram-2-large.webp" type="image/webp">
                                <img src="@publish.domain/images/social/bikesoap-instagram-2-large.jpg" alt="Schwalbe Bike Soap in Aktion">
                            </picture>
                            <a href="https://www.instagram.com/steffimarth/" target="_blank">@steffimarth</a>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-content">
                            <picture>
                                <source srcset="@publish.domain/images/social/bikesoap-instagram-3-large.avif" type="image/avif">
                                <source srcset="@publish.domain/images/social/bikesoap-instagram-3-large.webp" type="image/webp">
                                <img src="@publish.domain/images/social/bikesoap-instagram-3-large.jpg"
                                     srcset="@publish.domain/images/social/bikesoap-instagram-3-large.jpg" alt="Schwalbe Bike Soap in Aktion">
                            </picture>
                            <a href="https://www.instagram.com/steffimarth/" target="_blank">@steffimarth</a>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-content">
                            <picture>
                                <source srcset="@publish.domain/images/social/bikesoap-instagram-4-large.avif" type="image/avif">
                                <source srcset="@publish.domain/images/social/bikesoap-instagram-4-large.webp" type="image/webp">
                                <img src="@publish.domain/images/social/bikesoap-instagram-4-large.jpg"
                                     srcset="@publish.domain/images/social/bikesoap-instagram-4-large.jpg" alt="Schwalbe Bike Soap in Aktion">
                            </picture>
                            <a href="https://www.instagram.com/patricklange1/" target="_blank">@patricklange1</a>
                        </div>
                    </div>
                </Carousel>
            </div>
            <a class="instagram-link hashtag highlighted" href="https://www.instagram.com/explore/tags/bikesoap/" target="_blank">#BIKESOAP</a>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";

    section.social {
      position: relative;
      overflow: hidden;
      picture.background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        z-index: -1;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &::before {
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          opacity: 0.8;
          background-color: $green;
        }
      }

      .social-slider {
        grid-column: 1/13;

        border-radius: 4px;

        @include media-breakpoint-up(lg) {
          background-color: $darkgrey;
          grid-column: 4/8;
        }
        @include media-breakpoint-up(xl) {
          grid-column: 6/8;
        }
        .slide {
          .slide-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            padding: calc($grid-gutter-width/2) calc($grid-gutter-width/2) 0 calc($grid-gutter-width/2);
            picture {

            }
            a {
              color: $darkgrey;
              text-decoration: none;
              font-family: $font-family-base;
              font-size: $font-size-base;
              padding: 20px 0;
              @include media-breakpoint-up(lg) {
                color: white;
              }
            }
          }
        }
      }

      .social-container {
        padding: calc($section-margin / 2) 0;
        align-items: center;

        hr {
          display: none;
          align-self: center;
          grid-column: 5/12;
          width: calc(100% - $grid-gutter-width);
          border-style: solid;
          border-width: 1px;

          @include media-breakpoint-up(lg) {
            display: block;
            grid-column: 2/4;
          }
          @include media-breakpoint-up(xl) {
            grid-column: 4/6;
          }
        }

        .instagram-link {
          &.account {
            display: none;
            grid-column: 2/5;

            @include media-breakpoint-up(lg) {
              display: block;
              grid-column: 1;
            }
            @include media-breakpoint-up(xl) {
              grid-column: 3;
            }
          }
          &.hashtag {
            grid-column: 1/13;
            justify-self: center;
            font-size: $font-size-base * 4.5;
            text-decoration: none;
            color: white;

            @include media-breakpoint-up(lg) {
              grid-column: 8/13;
              justify-self: end;
              font-size: $font-size-base * 7.6;
            }
            @include media-breakpoint-up(xl) {
              grid-column: 8/13;
              justify-self: end;
              font-size: $font-size-base * 10.9;
            }
          }
        }
      }
    }
</style>
