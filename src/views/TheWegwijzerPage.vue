<template>
  <section class="top-container">
    <header class="showcase">
      <h1>Wegwijzer</h1>
    </header>
    <!--https://www.businessinsider.com/how-to-embed-google-map?international=true&r=US&IR=T-->
    <div class="content">
      <span>
        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5031.817015183361!2d3.718171!3d50.906909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdaee8e87d63a739!2sfeelEboom!5e0!3m2!1snl!2sbe!4v1635759339866!5m2!1snl!2sbe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5031.817015183361!2d3.718171!3d50.906909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdaee8e87d63a739!2sfeelEboom!5e0!3m2!1snl!2sbe!4v1635759339866!5m2!1snl!2sbe" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </span>
      <span>
        <h1>Praktisch</h1>
        <p>Feeleboom is gelegen in Beerlegem Zwalm.</p>
        <p>&nbsp;</p>
        <p>Beerlegem is te bereiken met het openbaar vervoer.</p>
        <p>Als je met de fiets komt kan je deze veilig parkeren in de tuin.</p>
        <p>&nbsp;</p>
        <p>Kom je met de auto, parkeer dan gerust op de oprit.</p>
        <p>Je kan ook parkeren bij de kerk van Beerlegem. Dan is het nog 200 meter te voet.</p>
        <p>Graag niet parkeren op de parking aan de overkant. Voor het huis mag wel.</p>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheWegwijzerPage"
}
</script>

<style scoped>
.content {
  box-shadow: none;
  grid-area: content;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
  padding: 0px;
}

.content span {
  padding: 5px;
  box-shadow: var(--shadow);
}

</style>