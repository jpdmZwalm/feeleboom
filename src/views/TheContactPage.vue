<template>
  <section class="top-container">
    <header class="showcase">
      <h1>Contact</h1>
    </header>
    <div class="content"> <!--TODO-->
      Contact
    </div>
  </section>
</template>

<script>
export default {
  name: "TheContactPage"
}
</script>

<style scoped>
/* Top Container */
.top-container {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
        'showcase'
        'showcase'
        'content';
  grid-template-columns: repeat(1, 1fr);
}

/* Area  Showcase */
.showcase {
  grid-area: showcase;
  padding-right: 5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

</style>