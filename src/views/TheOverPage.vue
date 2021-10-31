<template>
  <section class="top-container">
    <header class="showcase">
      <h1>Over FeelEBoom</h1>
    </header>
    <div class="content"> <!--TODO-->
      Over FeelEBoom
    </div>
    <div class="top-box top-box-a">
      <h4>Over FeelEBoom</h4>
      <p>Over FeelEBoom.</p> <!--TODO-->
      <a href="#" class="btn">Meer info</a> <!--TODO-->
    </div>
    <div class="top-box top-box-b">
      <h4>Over FeelEBoom</h4>
      <p>Over FeelEBoom</p>
      <a href="#" class="btn">Meer info</a> <!--TODO-->
    </div>
  </section>

</template>

<script>
export default {
  name: "TheIntroductiePage"
}
</script>

<style scoped>
/* Area  Showcase */
.showcase {
  grid-area: showcase;
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