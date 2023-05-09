<template>
    <div>
        <QuizHeader/>
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]"/>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import {ref} from "vue";
import q from "../data/quizzes.json";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";


const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = q.find((quiz) => quiz.id === quizId);

const currentQuestionIndex = ref(0);

</script>

<style scoped>




</style>

