<template>
    <header class="mt-5">
        <h4 class="text-2xl">Question {{ questionStatus }}</h4>
        <div class="w-[300px] h-12 border-[3px] border-solid border-[bisque]">
            <div class="h-full bg-[bisque]" :style="{width: barPercentage}"></div>
        </div>
    </header>
</template>

<script setup>
import {defineProps} from "vue";

const {questionStatus, barPercentage} = defineProps([
    'questionStatus',
    'barPercentage'
]);

</script>