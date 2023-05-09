<template>
    <div class="text-center px-24 py-0">
        <p class="text-2xl">Your results...</p>
        <h1 class="text-5xl"> {{correctAnswers}}/{{ quizQuestionLength }} </h1>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
const {quizQuestionLength, correctAnswers} = defineProps([
    'quizQuestionLength',
    'correctAnswers'
]);
</script>