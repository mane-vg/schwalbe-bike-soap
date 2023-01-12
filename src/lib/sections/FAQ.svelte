<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    export let accordionMore = false;
    export let viewportWidth = 1920;

    function initAccordion(element) {
        if(element.classList.contains('open')) {
            element.querySelector('.accordion-content').style.maxHeight = element.querySelector('.accordion-content .accordion-content-inner').scrollHeight + 'px';
        }
        element.querySelector('.accordion-header').addEventListener('click', openAccordion);

        window.addEventListener('orientationchange', function(event) {
            if(element.classList.contains('open')) {
                setTimeout(function() {
                    element.querySelector('.accordion-content').style.maxHeight = element.querySelector('.accordion-content .accordion-content-inner').scrollHeight + 'px';
                }, 1);
            }
        });

        window.addEventListener('resize', function() {
            if(element.classList.contains('open')) {
                setTimeout(function() {
                    element.querySelector('.accordion-content').style.maxHeight = element.querySelector('.accordion-content .accordion-content-inner').scrollHeight + 'px';
                }, 1);
            }
        });

        function openAccordion(event) {
            element.classList.toggle('open');
            if(element.classList.contains('open')) {
                element.querySelector('.accordion-content').style.maxHeight = element.querySelector('.accordion-content .accordion-content-inner').clientHeight + 'px';
            } else {
                element.querySelector('.accordion-content').style.maxHeight = '';
            }
        }
    }

    onMount(() => {
        viewportWidth = window.innerWidth;
    });
</script>

<section class="faq">
    <div class="row">
        <div class="container">
            <div class="span-10">
                <h2>Fragen, die nicht nur wir uns stellen:</h2>
            </div>
            <div class="span-10">
                <div class="accordion">
                    <div class="accordion-item" class:open={window.innerWidth >= 900} use:initAccordion>
                        <div class="accordion-header">
                            Wieso ist Schwalbe überhaupt auf die Idee gekommen, eine Seife zu entwickeln?
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                <p>Wir bei Schwalbe testen das ganze Jahr Reifen und müssen daher viele Bikes waschen und pflegen.
                                    Nach einer Tour und dem Bike Service haben wir angefangen, über andere Lösungen nachzudenken
                                    als die bisher vorhandenen Reinigungsprodukte. Keine Flasche, sondern ein Produkt, das lange hält,
                                    einfach funktioniert und komplett umweltverträglich ist. Heraus kam die gute alte Seife.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" use:initAccordion>
                        <div class="accordion-header">
                            Warum sollte ich bei der Bike-Wäsche auf ein natürliches Produkt zurückgreifen?
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                <p>Fahrradfahren ist umwelt- und klimafreundlich. Wir sind der Überzeugung, dass auch eine Seife
                                    für die Bike-Wäsche ausschließlich aus natürlichen Inhaltsstoffen hergestellt werden und
                                    umweltfreundlich sein sollte. Zumal sie ebenfalls höchste Qualitätsansprüchen erfüllt.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" use:initAccordion>
                        <div class="accordion-header">
                            Ist die Seife so leistungsstark wir andere Reinigungsmittel?
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                <p>Auf jeden Fall. Die Seife hat eine hervorragende Reinigungswirkung und ist stark schäumend.
                                    Die Dreckpartikel auf dem Fahrrad werden umhüllt und können anschließend abgewaschen werden
                                    ohne zu kratzen. Die Seife hat zudem fettlösende Eigenschaften.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" use:initAccordion>
                        <div class="accordion-header">
                            Kann ich die Seife auch einzeln nachkaufen?
                        </div>
                        <div class="accordion-content">
                            <div class="accordion-content-inner">
                                <p>Ja, die Seife ist auch einzeln erhältlich zu einem Preis von 7,90 Euro.</p>
                            </div>
                        </div>
                    </div>
                    {#if accordionMore}
                        <div transition:fly={{delay: 125, y: -50, duration: 1000}} class="accordion-item" use:initAccordion>
                            <div class="accordion-header">
                                Bis zu 100 Bike-Wäschen – ist das viel?
                            </div>
                            <div class="accordion-content">
                                <div class="accordion-content-inner">
                                    <p>Das ist sogar sehr viel – unsere Seife ist äußerst ergiebig und hält damit deutlich länger als Konkurrenzprodukte.</p>
                                </div>
                            </div>
                        </div>
                        <div transition:fly={{delay: 250, y: -50, duration: 1000}} class="accordion-item" use:initAccordion>
                            <div class="accordion-header">
                                Kann man die Seife zum Duschen verwenden?
                            </div>
                            <div class="accordion-content">
                                <div class="accordion-content-inner">
                                    <p>Da die Seife ausschließlich aus natürlichen Inhaltsstoffen besteht, kann sie theoretisch auch
                                        zum Duschen verwendet werden. Das sollte man allerdings nicht allzu oft machen, da die Seife
                                        entfettend ist. Das ist wiederum nicht gut für die Hautflora.</p>
                                </div>
                            </div>
                        </div>
                        <div transition:fly={{delay: 375, y: -50, duration: 1000}} class="accordion-item" use:initAccordion>
                            <div class="accordion-header">
                                Ist die Seife wirklich vegan?
                            </div>
                            <div class="accordion-content">
                                <div class="accordion-content-inner">
                                    <p>Ja, sie ist vegan und aus keinerlei Inhaltsstoffe tierischen Ursprungs hergestellt.</p>
                                </div>
                            </div>
                        </div>
                        <div transition:fly={{delay: 500, y: -50, duration: 1000}} class="accordion-item" use:initAccordion>
                            <div class="accordion-header">
                                Kann ich die Seife für alle Fahrradtypen verwenden?
                            </div>
                            <div class="accordion-content">
                                <div class="accordion-content-inner">
                                    <p>Ja, die Seife ist für alle Fahrradtypen nutzbar.</p>
                                </div>
                            </div>
                        </div>
                        <div transition:fly={{delay: 625, y: -50, duration: 1000}} class="accordion-item" use:initAccordion>
                            <div class="accordion-header">
                                Kann ich die Seife auf Carbon verwenden?
                            </div>
                            <div class="accordion-content">
                                <div class="accordion-content-inner">
                                    <p>Die Seife ist mikroplastikfrei und greift keine Lacke an. Daher kann sie bedenkenlos auch bei Carbon verwendet werden.</p>
                                </div>
                            </div>
                        </div>
                        <div transition:fly={{delay: 750, y: -50, duration: 1000}} class="accordion-item" use:initAccordion>
                            <div class="accordion-header">
                                Kann man damit auch den Antrieb reinigen?
                            </div>
                            <div class="accordion-content">
                                <div class="accordion-content-inner">
                                    <p>Ja, man kann damit auch den Antrieb reinigen oder andere ölige Dinge abwaschen.
                                        Dafür solltest du aber unbedingt auf einen Waschplatz mit Ölabscheider gehen,
                                        so wie es bei jeder Antriebsreinigung gemacht werden muss.</p>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="span-10 button-holder">
                <p class="center-text">
                    {#if !accordionMore}
                        <button transition:fade class="btn btn-primary-outline" on:click={() => accordionMore = true}>Mehr anzeigen</button>
                    {/if}
                </p>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
  @import "src/assets/scss/import.scss";

  section.faq {
    .accordion {
      .accordion-item {
        .accordion-header {
          font-family: $font-family-base;
          font-size: $font-size-base * 1;
          font-weight: 600;
          background-image: url(@publish.domain/images/faq/chevron-down.svg);
          background-repeat: no-repeat;
          background-position: center right;

          padding: calc($grid-gutter-width/2) $grid-gutter-width calc($grid-gutter-width/2) 0;
          border-bottom: 1px solid black;

          cursor: pointer;

          @include media-breakpoint-up(lg) {
            font-size: $font-size-base * 1.3;
            padding: calc($grid-gutter-width/2) 0;
          }
          &:hover {
            color: $primary;
          }
        }
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s;
          .accordion-content-inner {
            p {
              display: inline-block;
            }
          }
        }
        &.open {
          .accordion-header {
            background-image: url(@publish.domain/images/faq/chevron-up.svg);
          }
          .accordion-content {

          }
        }
      }
    }

    .button-holder {
      margin-top: $section-margin * 0.35;
      @include media-breakpoint-up(lg) {
        margin-top: $section-margin * 0.7;
      }
    }
  }
</style>
