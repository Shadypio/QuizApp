<template>
    <div class="w-[310px] rounded overflow-hidden mr-5 mb-8 shadow-[1px_1px_10px_rgba(0,0,0,0.1)] px-2.5 py-0">
        <img class="w-full h-[190px] m-0 mt-2" :src="quiz.img" alt="" />
        <div class="px-2.5 py-0">
            <h2 class="font-bold">{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
    quiz: Object,
});

const navigateToQuiz = () => {
    router.push(`/quiz/${quiz.id}`)
}
</script>
