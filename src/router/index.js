// define routing rules
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/quiz/:id',
        name: 'quiz',
        component: QuizView
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router