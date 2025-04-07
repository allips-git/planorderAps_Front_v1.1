<template>
    <header class="bg-white h-[60px] w-full border-b border-gray-100 flex justify-between items-center md:shadow-[0px_1px_4px_1px_rgba(0,0,0,0.05)]">
        <div class=" md:!flex gap-1 items-center hidden flex-none">
            <li class="w-full h-[48px] flex items-center justify-center"><IconLogo class="fill-indigo-600 dark:fill-indigo-500"/></li>            
            <router-link class="" to="/"><p class="font-extrabold whitespace-nowrap text-2xl text-indigo-600 dark:text-indigo-500">PlanOrder</p></router-link>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Button } from 'primevue';
import IconLogo from '../icons/IconLogo.vue';
</script>