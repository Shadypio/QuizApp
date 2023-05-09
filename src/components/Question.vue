<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}</h1>
        <div v-for="option in question.options" :key="option.id" class="answers-container" @click="emitSelectedOption(option.isCorrect)">
            <div class="option">
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const emit = defineEmits(['selectOption']);

const {question} = defineProps([
    'question'
]);

const emitSelectedOption = (isCorrect) => {
    emit('selectOption', isCorrect);
}
</script>

<style scoped>
.question-container {
    margin-top: 20px;

}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    height: 30px;
    padding: 0 20px;
}
</style>
