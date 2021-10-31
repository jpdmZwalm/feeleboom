<template>
  <nav class="main-nav">
    <ul>
      <li>
        <a><router-link :to="{ name: 'home'}" class="tooltip title"><img class="resize" src="../assets/img/logoFeelEboom.png">
          <div>
            <div>FeelEBoom</div>
            <div>Yoga en Therapie</div>
            <span class="tooltiptext">Tooltip text</span>
          </div>
        </router-link></a>
      </li>
      <li><a href="#">Lessen</a></li>
      <li><a href="#">Inschrijven</a></li>
      <li><a href="#">Wegwijzer</a></li>
      <li><a><router-link :to="{ name: 'over'}">Over FeelEBoom</router-link></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNav"
}
</script>

<style scoped>
img.resize {
  width:40px; /* you can use % */
  height: auto;
}

.title {
  box-shadow: var(--shadow);
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(2, auto);
}

.tooltip {
  position: relative;
  /* display: inline-block; */
  /* border-bottom: 1px dotted black; */
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: var(--dark);
  color: var(--light);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 95%;
  left: 105%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--dark) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>