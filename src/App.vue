<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>

    <div class="options-container">
      <div class="card" v-for="quiz in quizzes" :key="quiz.id">
        <img :src="quiz.img" alt="" />
        <h2>{{ quiz.name }}</h2>
        <p>{{ quiz.questions.length }} questions</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import q from "./data/quizzes.json";
  import {ref, watch} from "vue";

  const quizzes = ref(q);
  const search = ref('');

  watch(search, () => {
    quizzes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
  })
</script>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  header {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /* CARD */
  .card {
    width: 310px;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-right: 20px;
    margin-bottom: 35px;
  }

  .card img {
    width: 100%;
    height: 190px;
    margin: 0;
  }

  .card .card-text {
    padding: 0 10px; 
  }

  .card .card-text h2 {
    font-weight: bold;
  }
</style>