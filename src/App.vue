<template>
  <div id="app" class="wrapper">
      <TheNav></TheNav>
      <!-- Top Container -->
      <router-view/>
      <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheFooter from "@/components/TheFooter";

export default {
  name: 'App',
  components: {
    TheFooter,
    TheNav
  },
  mounted() {
    this.$router.push({
      name: "home",
      params: {}
    });
  }
}
</script>

<style>
/* CSS Variables */
:root {
  --primary: #ddd;
  --dark: #333;
  --light: #fff;
  --letter: #000;
  --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
}

html {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--dark);
}

body {
  background: #ccc;
  margin: 10px 10px;
  line-height: 1.4;
}

.btn {
  background-color: var(--dark);
  color: var(--light);
  padding: 0.6rem 1.3rem;
  text-decoration: none;
  border: 0;
}

/* Stay ion the container */
img {
  max-width: 100%;
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  /*grid-template-rows: 1fr auto 1fr;*/
  grid-template-rows: auto 1fr auto;
  width: 98vw;
  height: 97vh;
}

/* Area  Showcase */
.showcase {
  grid-area: showcase;
  padding-left: 1rem;
  padding-right: 5rem;
  padding-top: 0rem;
  padding-bottom: 0rem;
  box-shadow: var(--shadow);
}

.showcase h1 {
  font-size: 3rem;
  font-family: "Bookman Old Style";
  font-weight: lighter;
  margin-top: 0;
  margin-bottom: 0;
  color: var(--letter);
}

/* Top Container */
.top-container {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
        'showcase'
        'content';
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto 2fr;
}

.content {
  grid-area: content;
  padding: 10px;
  box-shadow: var(--shadow);
}

/* Footer */
footer {
  margin-top: 0;
  background: var(--dark);
  color: var(--light);
  text-align: center;
  padding: 0;
  line-height: 0;
}

/* Media Queries */
/* Scherm <= 700px
@media(max-width: 700px) {
  .top-container {
    grid-template-areas:
        'showcase showcase'
        'top-box-a top-box-b';
  }

  .showcase h1 {
    font-size: 2.5rem;
  }

  .main-nav ul {
    grid-template-columns: 1fr;
  }

  .info {
    grid-template-columns: 1fr;
  }
  / * margin: auto => to horizontally center the element within its container.
      The element will then take up the specified width, and the remaining space will be split equally between the
      left and right margins.* /
 * /
  .info .btn {
    display: block;
    text-align: center;
    margin: auto;
  }

}
  */

/* Scherm <= 500px
@media(max-width: 500px) {
  .top-container {
    grid-template-areas:
        'showcase'
        'top-box-a'
        'top-box-b';
  }
}
*/
</style>
