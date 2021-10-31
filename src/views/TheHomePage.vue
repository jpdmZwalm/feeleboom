<template>
  <section class="top-container">
    <header class="showcase">
      <h1>Feel E Boom</h1>
    </header>
    <div class="content"> <!--TODO-->
      Tekst_1_HomePage
    </div>
    <div class="top-box top-box-a">
      <h4>Kristien Reynaert</h4>
      <p>Over mij.</p> <!--TODO-->
      <a href="#" class="btn">Meer info</a> <!--TODO-->
    </div>
    <div class="top-box top-box-b">
      <h4>Contact</h4>
      <p>Beerlegemsebaan 74</p>
      <p>9630 Zwalm</p>
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
  margin-right: 50px;
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