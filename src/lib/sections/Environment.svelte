<script>

</script>

<section class="environment">
    <div class="row">
        <div class="container">
            <div class="span-8">
                <h3>Gut für die Umwelt – gut für dein Bike</h3>
                <div class="image-wrapper">
                    <img class="svg" src="src/assets/images/environment/icon_phosphate-silicone.svg">
                    <img class="svg" src="src/assets/images/environment/icon_dermatologically-tested.svg">
                    <img class="svg" src="src/assets/images/environment/icon_microplastic-free.svg">
                    <img class="svg" src="src/assets/images/environment/icon_vegan.svg">
                </div>
                <p class="small center-text">Zu 100% leicht biologisch abbaubar nach OECD.</p>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/_import.scss";

    .environment {
      .image-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

        img.svg {
          max-height: 75px;

          @include media-breakpoint-up(md) {
            max-height: 125px;
          }
          @include media-breakpoint-up(lg) {
            max-height: 150px;
          }
        }
      }
      p.small {
        color: $green;
      }
    }
</style>
