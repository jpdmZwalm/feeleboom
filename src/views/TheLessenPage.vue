<template>
  <section class="top-container">
    <header class="showcase">
      <h1>Lessen</h1>
    </header>
    <div class="content">
      <span>
        <h1>Yoga</h1>
        <h4>Woensdag Voormiddag</h4>
        <p>Wekelijks van 10h tot 11h</p>
        <p>Beerlegemsebaan 74, 9630 Zwalm</p>
        <p>50€ voor vijf lessen</p>
        <p>Yoga asana’s zijn de basis van de yoga. De houdingen brengen een hoger bewustwording mee van het lichaam. En dat is belangrijk want we weten dat alles, ja echt alles kan gelezen worden op het lichaam.</p>
        <p>We lezen en we interpreteren voortdurend de anderen maar we vergeten onszelf te lezen. Door te bewegen op een hele trage zachte wijze kan je niet alleen bewust worden van je lichaam maar het biedt ook de mogelijkheid om het stromen van de energie weer op te wekken.</p>
      </span>
      <span>
        <h1>Yoga</h1>
        <h4>Woensdag Voormiddag</h4>
        <p>Wekelijks van 20h tot 21h</p>
        <p>Beerlegemsebaan 74, 9630 Zwalm</p>
        <p>50€ voor vijf lessen</p>
        <p>Yoga asana’s zijn de basis van de yoga. De houdingen brengen een hoger bewustwording mee van het lichaam. En dat is belangrijk want we weten dat alles, ja echt alles kan gelezen worden op het lichaam.</p>
        <p>We lezen en we interpreteren voortdurend de anderen maar we vergeten onszelf te lezen. Door te bewegen op een hele trage zachte wijze kan je niet alleen bewust worden van je lichaam maar het biedt ook de mogelijkheid om het stromen van de energie weer op te wekken.</p>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheLessenPage"
}
</script>

<style scoped>
.content {
  grid-area: content;
  padding: 0px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  box-shadow: none;
}

.content > span {
  padding: 10px;
  padding-top: 0;
  box-shadow: var(--shadow);
}

span > p {
  line-height: 1;
}

</style>