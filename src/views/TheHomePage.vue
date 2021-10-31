<template>
  <section class="top-container">
    <header class="showcase">
      <h1>Feel E Boom</h1>
    </header>
    <div class="content"> <!--TODO-->
      Wanneer je in contact bent met je ziel dan stroomt het leven, je wordt zichtbaar, je bent bewust van het groter geheel,
      je hart is open en je kan het leven ontvangen in zijn volle potentie.
    </div>
    <div class="top-box top-box-a">
      <h4>FeelEBoom</h4>
      <p>Over FeelEBoom</p> <!--TODO-->
      <router-link class="btn" :to="{ name: 'over'}">Meer info</router-link>
    </div>
    <div class="top-box top-box-b">
      <h4>Actueel</h4>
      <p>Uitleg over de huidige reeks</p>
      <a href="#" class="btn">Meer info</a> <!--TODO-->
    </div>
  </section>

</template>

<script>
export default {
  name: "TheHomePage"
}
</script>

<style scoped>
/* Top Container */
.top-container {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
        'showcase showcase showcase showcase top-box-a'
        'showcase showcase showcase showcase top-box-b'
        'content  content  content  content  content';
  grid-template-columns: repeat(5, 1fr);
}

/* Area  Showcase */
.showcase {
  grid-area: showcase;
  background: url(../assets/img/herbeumont.jpg);
  background-size: cover;
  background-position: top;
  padding-right: 5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: var(--shadow);
}

.showcase h1 {
  font-size: 4rem;
  font-family: "Bookman Old Style";
  font-weight: lighter;
  margin-bottom: 0;
  color: var(--letter);
}

.showcase p {
  font-size: 2.0rem;
  margin-top: 0;
  color: var(--letter);
}

.content {
  grid-area: content;
  box-shadow: var(--shadow);
}

/* Area  Top Box */
.top-box {
  width: 50%;
  background: var(--primary);
  display: grid;
  align-items: center;
  justify-items: center;
  box-shadow: var(--shadow);
  padding: 1.5rem;
}

.top-box .price {
  font-size: 2.5rem;
}

.top-box-a {
  grid-area: top-box-a;
}

.top-box-b {
  grid-area: top-box-b;
}


</style>