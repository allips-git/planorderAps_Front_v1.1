<script setup lang="ts">
import Topheader from '@/components/layout/Topheader.vue';
import Sidemenu from '@/components/layout/Sidemenu.vue';
import Index from '@/views/index.vue';
import CustomerSupport from "@/views/customerSupport.vue"
</script>

<template>
   <!-- <div class="w-full h-full overflow-y-auto">
      <Topheader/>
      <div class="flex flex-row">
         <Sidemenu/>
         <RouterView/>
      </div>
   </div> -->


   <div>
      <div class="flex flex-col">
         <Topheader/>
         <div class="flex">
            <Sidemenu/>
            <div class="w-full overflow-y-auto">
               <RouterView/>
            </div>
         </div>
      </div>
   </div>
</template>

<style>
@import "@/assets/main.css"
</style>
