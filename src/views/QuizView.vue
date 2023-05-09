<template>
    
    <div>
        <QuizHeader :questionStatus="questionStatus"
        :barPercentage="barPercentage"/>
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]"/>
        </div>
    </div>

    <button @click="currentQuestionIndex++">Next Question</button>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import q from "../data/quizzes.json";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";


const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = q.find((quiz) => quiz.id === quizId);

const currentQuestionIndex = ref(0);

/* const questionStatus = ref(`${currentQuestionIndex.value} / ${quiz.questions.length}`)

watch(() => currentQuestionIndex.value, () => {
    questionStatus.value = `${currentQuestionIndex.value} / ${quiz.questions.length}`
    
}) */

const questionStatus = computed(() => `${currentQuestionIndex.value} / ${quiz.questions.length}`)
const barPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`)

</script>

<style scoped>




</style>

