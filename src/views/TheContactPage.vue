<template>
  <section class="top-container">
    <header class="showcase">
      <h1>Contact</h1>
    </header>
    <div class="content"> <!--TODO-->
      <span>
        Stel hier uw vraag, ik neem zo spoedig mogelijk contact op
        <img src="../assets/img/sisters.png">
      </span>
      <span>
      <form action="action_page.php">
        <span>
          <label for="name">Uw naam</label>
          <input type="text" id="name" name="name" placeholder="uw naam..">
        </span>
        <span>
          <label for="email">Uw email</label>
          <input type="text" id="email" name="email" placeholder="uw email..">
        </span>
        <span>
          <label for="tel">of uw telefoon nummer</label>
          <input type="text" id="tel" name="tel" placeholder="uw telefoon..">
        </span>
        <span>
          <label for="subject">Onderwerp</label>
          <input type="text" id="subject" name="subject" value="Graag informatie over yoga bij feeleboom">
        </span>
        <span>
          <label for="question">Uw vraag</label>
          <textarea id="question" name="question" placeholder="uw vraag.." style="height:200px"></textarea>
        </span>
        <span>
          <input type="submit" value="Verstuur">
        </span>
      </form>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheContactPage"
}
</script>

<style scoped>

.content {
  grid-area: content;
  padding: 0px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
  box-shadow: none;
}

.content > span {
  padding: 10px;
  box-shadow: var(--shadow);
}

.content form {
  display: flex;
  flex-direction: column;
}

.content form span {
  display: flex;
  flex-direction: column;
}

/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: var(--dark);
  color: var(--light);
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: var(--primary);
  color: var(--dark);
}
</style>