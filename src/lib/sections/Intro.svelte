<script>
    import { fade } from 'svelte/transition';

    export let fadeIn = false;

    function fadeInWhenInViewport(element) {
        let options = {rootMargin: '0px 0px 0px 0px', threshold: 1};
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    fadeIn = true;
                } else {
                    fadeIn = false;
                }
            });
        };
        let introSectionObserver = new IntersectionObserver(callback, options);
        introSectionObserver.observe(element);
    }
</script>

<section class="intro">
    <div class="row">
        <div class="container text-container">
            <div class="span-8">
                <h1 class="highlighted">Natural Bike Soap</h1>
                <p class="lead">Mehr als nur Bikes waschen.</p>
                <p>Hervorragende Reinigungswirkung, lange Nutzungsdauer und ausschließlich natürliche Inhaltsstoffe:
                    Die neue „Natural Bike Soap“ von Schwalbe ist ein Produkt, dass Umweltverträglichkeit mit der
                    besten Reinigungskraft vereint.</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="container bordered-container" use:fadeInWhenInViewport>
            <div class="span-12">
                {#if fadeIn}
                    <hr transition:fade={{duration: 1000}} />
                    <div class="span-container">
                        <span transition:fade={{delay: 250, duration: 1000}}>Umweltfreundlich</span>
                        <span class="star" transition:fade={{delay: 500, duration: 1000}}>*</span>
                        <span transition:fade={{delay: 750, duration: 1000}}>Mehr als 100 Wäschen</span>
                        <span class="star" transition:fade={{delay: 1000, duration: 1000}}>*</span>
                        <span transition:fade={{delay: 1250, duration: 1000}}>Für alle Bikes geeignet</span>
                    </div>
                    <hr transition:fade={{delay: 0, duration: 1000}}/>
                {/if}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "./src/assets/scss/_import.scss";

    .intro {
      .row {
        .text-container {
          text-align: center;
          h1 {
            text-align: center;
            font-size: calc($h1-large-size / 2.25);
            @include media-breakpoint-up(md) {
              font-size: calc($h1-large-size / 2);
            }
            @include media-breakpoint-up(lg) {
              font-size: calc($h1-large-size * 8/7);
            }
          }
        }
        .bordered-container {
          margin-top: 50px;
          .span-container {
            display: inline-flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding: calc($section-margin/4) 0;
            width: 100%;

            @include media-breakpoint-up(lg) {
              padding: calc($section-margin/2) 0;
              flex-direction: row;
            }

            span {
              font-family: $font-family-base;
              font-size: 26px;
              text-transform: uppercase;
              font-weight: 600;
              line-height: 1;
              align-self: center;
              padding: calc($grid-gutter-width/2) 0;

              @include media-breakpoint-up(lg) {
                padding: 0;
              }

              &.star {
                margin-top: 13px;
                line-height: 26px;
                font-size: 46px;
              }
            }
          }
          //height: 100px;
          //border-top: 3px dotted $darkgrey;
          //border-bottom: 3px dotted $darkgrey;
        }
      }
    }
</style>
