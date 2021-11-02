<template>
  <section class="top-container">
    <header class="showcase">
      <h1>Praktisch</h1>
    </header>
    <div class="content">
      <span>
        <h1>Inschrijven</h1>
        <p>Schrijf je in via de <router-link :to="{ name: 'contact'}">contact pagina</router-link>.</p>
        <p>50€ voor de reeks van vijf lessen</p>
        <p>Nieuwe leerlingen betalen de eerste les afzonderlijk aan 10€</p>
      </span>
      <span>
        <h1>Meebrengen</h1>
        <p>Losse kledij</p>
        <p>Een yogamatje</p>
        <p>De eerste keren dat je komt kan je een yogamatje lenen.</p>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThePraktischPage"
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