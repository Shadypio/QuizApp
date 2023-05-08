<template>
    <h1> Quiz View </h1>
    <h2>{{ quiz.name }}</h2>
    

</template>

<script setup>
import { useRoute } from "vue-router";
import q from "../data/quizzes.json";

const route = useRoute();
const quizId = route.params.id;
const quiz = q.find((quiz) => quiz.id === parseInt(quizId));
</script>

<style scoped>
</style>
