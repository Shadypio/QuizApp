<template>
    <div class="text-center items-center px-24 py-0">
        <p class="text-2xl">Your results...</p>
        <h1 class="text-5xl"> {{correctAnswers}}/{{ quizQuestionLength }} </h1>
        <RouterLink to="/" class="py-4">Go Back</RouterLink>
    </div>

    
</template>

<script setup>
import {defineProps} from "vue";
import {RouterLink} from "vue-router";

const {quizQuestionLength, correctAnswers} = defineProps([
    'quizQuestionLength',
    'correctAnswers'
]);
</script>