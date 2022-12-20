<script>

    function initBackgroundVideo(element) {
        let options = {};
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        };
        let videoIntersectionObserver = new IntersectionObserver(callback, options);
        videoIntersectionObserver.observe(element);
    }
</script>

<section class="bikewash">
    <div class="row">
        <video class="background desktop" use:initBackgroundVideo muted playsinline loop preload="metadata">
            <source src="@publish.domain/images/bikewash/bikesoap-stopmotion-landscape.webm" type="video/webm">
            <source src="@publish.domain/images/bikewash/bikesoap-stopmotion-landscape.mp4" type="video/mp4">
        </video>
        <video class="background mobile" use:initBackgroundVideo muted playsinline loop preload="metadata">
            <source src="@publish.domain/images/bikewash/bikesoap-stopmotion-portrait.webm" type="video/webm">
            <source src="@publish.domain/images/bikewash/bikesoap-stopmotion-portrait.mp4" type="video/mp4">
        </video>
        <div class="container">
            <div class="span-12">
                <div class="text-container">
                    <h2 class="h1 highlighted">Fahradwäsche?<br/><span class="green">Nachhaltig!</span></h2>
                    <p>Beginne jetzt dein Bike umweltschonend zu waschen.<br/>
                        Deinem Bike zuliebe – und der Natur.</p>
                    <p><a href="https://schwalbe.com" class="btn btn-primary">Zum Produkt</a></p>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";

    section.bikewash {
      position: relative;
      video.background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        max-width: 100vw;
        object-fit: cover;

        //z-index: -1;

        &.mobile {
          display: block;
          @include media-breakpoint-up(lg) {
            display: none;
          }
        }
        &.desktop {
          display: none;
          @include media-breakpoint-up(lg) {
            display: block;
          }
        }
      }
      .row {
        @include media-breakpoint-up(lg) {
          height: 100vh;
        }
        //@include media-breakpoint-down(md) {
        //  &:after {
        //    content: ' ';
        //    position: absolute;
        //    top: 0;
        //    left: 0;
        //    bottom: 0;
        //    right: 0;
        //
        //    background: rgba(white, 0.2);
        //
        //    z-index: 0;
        //  }
        //}
      }
      .span-12 {
        z-index: 2;
        margin: $section-margin 0;
        @include media-breakpoint-down(md) {
          padding: 0 0 calc($section-margin * 1.75) 0;
        }

        .text-container {

        }
      }
      h2.h1 {
        font-size: $font-size-base * 3.5;

        @include media-breakpoint-up(lg) {
          font-size: $font-size-base * 6;
        }
        span.green {
          color: $green;
        }
      }
    }
</style>
