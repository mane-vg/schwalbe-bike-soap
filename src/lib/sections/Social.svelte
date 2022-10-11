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
            <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background.avif" type="image/avif">
            <source srcset="src/assets/images/backgrounds/old-brown-paper-texture-background-square.webp" type="image/webp">
            <img src="src/assets/images/backgrounds/old-brown-paper-texture-background.jpg">
        </picture>
        <div class="container social-container">
            <a class="instagram-link account" href="https://instagram.com/" target="_blank"><img src="src/assets/images/social/icon-instagram.svg"></a>
            <hr/>
            <div class="social-slider">
                <Carousel particlesToShow={1} particlesToScroll={1} arrows={false} autoplay={true} pauseOnFocus={true} dots={false} swiping={false}>
                    <div class="slide">
                        <div class="slide-content">
                            <picture>
                                <source srcset="src/assets/images/social/bikesoap-instagram-1.avif" type="image/avif">
                                <source srcset=".src/assets/images/social/bikesoap-instagram-1.webp" type="image/webp">
                                <img src="src/assets/images/social/bikesoap-instagram-1.jpg">
                            </picture>
                            <a href="https://www.instagram.com/steffimarth/" target="_blank">@steffimarth</a>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-content">
                            <picture>
                                <source srcset="src/assets/images/social/bikesoap-instagram-2.avif" type="image/avif">
                                <source srcset="src/assets/images/social/bikesoap-instagram-2.webp" type="image/webp">
                                <img src="src/assets/images/social/bikesoap-instagram-2.jpg">
                            </picture>
                            <a href="https://www.instagram.com/steffimarth/" target="_blank">@steffimarth</a>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-content">
                            <picture>
                                <source srcset="src/assets/images/social/bikesoap-instagram-3.avif" type="image/avif">
                                <source srcset="src/assets/images/social/bikesoap-instagram-3.webp" type="image/webp">
                                <img src="src/assets/images/social/bikesoap-instagram-3.jpg">
                            </picture>
                            <a href="https://www.instagram.com/steffimarth/" target="_blank">@steffimarth</a>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="slide-content">
                            <picture>
                                <source srcset="src/assets/images/social/bikesoap-instagram-4.avif" type="image/avif">
                                <source srcset="src/assets/images/social/bikesoap-instagram-4.webp" type="image/webp">
                                <img src="src/assets/images/social/bikesoap-instagram-4.jpg">
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
        grid-column: 6/8;
        background-color: $darkgrey;
        border-radius: 4px;
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
              color: white;
              text-decoration: none;
              font-family: $font-family-base;
              font-size: $font-size-base;
              padding: 20px 0;
            }
          }
        }
      }

      .social-container {
        padding: $section-margin 0;
        align-items: center;

        hr {
          align-self: center;
          grid-column: 4/6;
          width: calc(100% - $grid-gutter-width);
          border-style: solid;
          border-width: 1px;
        }

        .instagram-link {
          &.account {
            grid-column: 3;
          }
          &.hashtag {
            grid-column: 8/13;
            justify-self: end;
            font-size: $font-size-base * 10.9;
            text-decoration: none;
            color: white;
          }
        }
      }
    }
</style>
