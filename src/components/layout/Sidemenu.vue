<template>
   <ul class="h-screen bg-gray-50 w-[68px] pt-2 flex flex-col">
    <li class="flex flex-col items-center w-full gap-1 h-[62px]">
        <IconChart/>
        <div class="text-[10px] text-indigo-600 font-bold">대시보드</div>
    </li>
    <li class="flex flex-col items-center w-full gap-1 h-[62px]">
        <IconList/>
        <div class="text-[10px] text-gray-400">원장관리</div>
    </li>
    <li class="flex flex-col items-center w-full gap-1 h-[62px]">
        <IconUser/>
        <div class="text-[10px] text-gray-400">회원관리</div>
    </li>
   </ul>
</template>

<script setup lang="ts">
import IconChart from '@/components/icons/IconChart.vue';
import IconList from '@/components/icons/IconList.vue';
import IconUser from '@/components/icons/IconUser.vue';
</script>