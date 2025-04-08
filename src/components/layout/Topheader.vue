<template>
    <header class="bg-white h-[60px] px-5 w-full border-b border-gray-100 flex justify-between items-center md:shadow-[0px_1px_4px_1px_rgba(0,0,0,0.05)]">
        <div class=" md:!flex gap-1 items-center flex-none">
            <li class="w-full h-[48px] flex items-center justify-center"><IconLogo class="fill-indigo-600 dark:fill-indigo-500"/></li>            
            <p class="font-extrabold whitespace-nowrap text-xl text-indigo-600 dark:text-indigo-500">PlanOrder</p>
        </div>

     <div class="flex items-center gap-2">
        <Button class="*:!text-xl bg" icon="pi pi-bell" text plain severity="contrast"/>
       
        <Button class="*:!text-2xl h-12" icon="pi pi-cog" text plain severity="contrast"/>
       
        <Button class="w-12 !p-0 flex items-center justify-center h-12" text plain severity>
            <IconAvatar class="*:text-blue-200 w-7 h-7 md:w-9 md:h-9"/>
        </Button>
       
        
    
    </div>
    </header>
</template>

<script setup lang="ts">
import { Button } from 'primevue';
import IconLogo from '@/components/icons/IconLogo.vue';
import IconAvatar from '@/components/icons/IconAvatar.vue';
</script>

<style>

.p-button-contrast {
    border: none;
    background-color: #ffffff;
}
:root {
    --p-button-contrast-background: #ffffff;
    --p-button-contrast-color: var(--p-gray-900);
    --p-button-contrast-border: none;
    --p-button-contrast-hover-background: var(--p-surface-0);
}
</style>