<template>
    
    <div>
        <QuizHeader :questionStatus="questionStatus"
        :barPercentage="barPercentage"/>
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]"
            v-if="!showResults"
            @selectOption="onSelectOption"/>
            <Result 
                v-else
                :quizQuestionLength="quiz.questions.length"
                :correctAnswers="correctAnswers"/>
        </div>
    </div>
    
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import q from "../data/quizzes.json";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";


const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = q.find((quiz) => quiz.id === quizId);

const currentQuestionIndex = ref(0);
const correctAnswers = ref(0);
const showResults = ref(false)

/* const questionStatus = ref(`${currentQuestionIndex.value} / ${quiz.questions.length}`)

watch(() => currentQuestionIndex.value, () => {
    questionStatus.value = `${currentQuestionIndex.value} / ${quiz.questions.length}`
    
}) */

const questionStatus = computed(() => `${currentQuestionIndex.value} / ${quiz.questions.length}`)
const barPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`)

const onSelectOption = (isCorrect) => {
    if (isCorrect) {
        correctAnswers.value++;
    } else {
        alert('Incorrect')
    }

    if( (quiz.questions.length - 1) === currentQuestionIndex.value)
    {
        showResults.value = true;
    }

    currentQuestionIndex.value++;
}

</script>

<style scoped>




</style>

