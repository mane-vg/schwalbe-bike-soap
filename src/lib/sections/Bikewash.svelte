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
        <video class="background" use:initBackgroundVideo muted playsinline loop preload="metadata">
            <source src="src/assets/images/bikewash/bikesoap-stopmotion.webm" type="video/webm">
            <source src="src/assets/images/bikewash/bikesoap-stopmotion.mp4" type="video/mp4">
        </video>
        <div class="container">
            <div class="span-12">
                <h2 class="h1 highlighted">Fahradwäsche?<br/><span class="green">Nachhaltig!</span></h2>
                <p>Beginne jetzt dein Bike umweltschonend zu waschen.<br/>
                    Deinem Bike zuliebe – und der Natur.</p>
                <p><a href="https://schwalbe.com" class="btn btn-primary">Zum Produkt</a></p>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";

    section.bikewash {
      position: relative;
      height: 100vh;
      video.background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        object-fit: cover;

        z-index: -1;
      }
      .span-12 {
        margin-top: $section-margin;
      }
      h2.h1 {
        font-size: $font-size-base * 6;
        span.green {
          color: $green;
        }
      }
    }
</style>
