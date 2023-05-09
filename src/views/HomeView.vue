<template>
    <div class="max-w-screen-lg mx-auto my-0">
        <header class="my-2.5 flex items-center">
            <h1 class="font-bold mr-[30px]">Quizzes</h1>
            <input
                class="border-none p-2.5 rounded bg-[rgba(128,128,128,0.1)]"
                v-model.trim="search"
                type="text"
                placeholder="Search..."
            />
        </header>

        <div class="flex flex-wrap mt-10">
            <RouterLink v-for="quiz in quizzes" :to="`/quiz/${quiz.id}`">
                <Card :key="quiz.id" :quiz="quiz" />
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import q from "../data/quizzes.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import { RouterLink } from "vue-router";

const quizzes = ref(q);
const search = ref("");

/* watch function updates data based on search values */
watch(search, () => {
    quizzes.value = q.filter((quiz) =>
        quiz.name.toLowerCase().includes(search.value.toLowerCase())
    );
});
</script>

<!-- <div class="card" v-for="quiz in quizzes" :key="quiz.id">
              <img :src="quiz.img" alt="" />
              <h2>{{ quiz.name }}</h2>
              <p>{{ quiz.questions.length }} questions</p>
</div> -->
