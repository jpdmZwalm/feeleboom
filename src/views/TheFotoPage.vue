<template>
  <section class="top-container">
    <div class="content">
      De foto's moeten allemaal dezelfde hoogte/breedte verhouding hebben.
      Nu genomen van de oude site, maar daar zijn ze in rage resolutie
      <p>Uitleg</p>
    </div>
    <div class="content">
      <img src="../assets/img/fotos/kristien2.png">
      <p>Kristien</p>
    </div>
    <div class="content">
      <img src="../assets/img/fotos/tuin.png">
      <p>De tuin</p>
    </div>
    <div class="content">
      <img src="../assets/img/fotos/schilderij.png">
      <p>Schilderij</p>
    </div>
    <div class="content">
      <img src="../assets/img/fotos/zaal1.png">
      <p>De zaal 1</p>
    </div>
    <div class="content">
      <img src="../assets/img/fotos/zaal2.png">
      <p>De zaal 2</p>
    </div>
    <div class="content">
      <img src="../assets/img/fotos/zaal3.png">
      <p>De zaal 3</p>
    </div>
    <div class="content">
      <img src="../assets/img/fotos/zaal4.png">
      <p>De zaal 4</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheFotoPage"
}
</script>

<style scoped>
/* Top Container */
.top-container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

.content {
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow);
}

.content p {
  margin: 0px;
  padding: 5px;
  box-shadow: var(--shadow);
}

.content img {
  width: 100%;
  height: auto;
}


</style>