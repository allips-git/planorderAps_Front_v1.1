<template>
    <div class="w-[1365px]">

        <header class="flex justify-between py-1 bg-white x-5">
         <h3 class="text-sm font-bold leading-[3]"> 오류 세부 정보 </h3>
         <div class="">
             <Button icon="pi pi-window-maximize" severity="secondary" text rounded aria-label="Cancel" style="color: black;"/>
             <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Cancel" style="color: black;"/>
         </div>
     </header>

     <div class="set-form-box">
        <div class="set-input-box">
             <h2 class="text-sm font-bold">오류 기본 정보</h2>
            
             <div class="input-box-form-2">
                <div class="input-label-form-box-2">
                    <label for="오류코드" class="text-sm ">오류코드</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="input-label-form-box-2">
                    <label for="플랫폼구분" class="text-sm ">플랫폼구분</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="input-label-form-box-2">
                    <label for="영향받은 트랜젝션 수" class="text-sm ">영향받은 트랜젝션 수</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="input-label-form-box-2">
                    <label for="이슈번호" class="text-sm ">이슈번호</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="col-span-2 input-label-form-box-2">
                    <label for="발생 일자" class="text-sm ">발생 일자</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="col-span-2 input-label-form-box-2">
                    <label for="처리 일자" class="text-sm ">처리 일자</label>
                    <InputText type="text" v-model="value"/>
                </div>
                
               
              
             </div> 
         </div>

         <div class="set-input-box">
            <h2 class="text-sm font-bold">요청 및 응답 데이터</h2>

            <div class="input-box-form">
                <div class="input-label-form-box">
                    <label for="요청 URL" class="text-sm">요청 URL</label>
                    <InputText type="text" v-model="value" placeholder="문의합니다"/>
                </div>

                <div class="input-label-text-box">                  
                    <label for="요청 데이터 (Request)" class="text-sm">요청 데이터 (Request)</label>
                     <Textarea placeholder="오류입니다"
                      v-model="value" rows="5" cols="30" />
                </div>

                <div class="input-label-text-box">                  
                    <label for="응답 데이터 (Request)" class="text-sm">응답 데이터 (Request)</label>
                     <Textarea placeholder="오류입니다"
                      v-model="value" rows="5" cols="30" />
                </div>

            </div>
         </div>

         <div class="set-input-box">

            <h2 class="text-sm font-bold">상태 업데이트</h2>

            <div class="input-box-form">

                <div class="input-label-form-box-2">
                    <label for="상태" class="text-sm">상태</label>
                    <Select v-model="selectedStatus" :options="statuses" optionLabel="name" class="w-full md:w-56" />

                </div>
            
                <div class="input-label-text-box">                  
                    <label for="상태 내용" class="text-sm">상태내용</label>
                     <Textarea placeholder="문의합니다" v-model="value" rows="5" cols="30" />
                </div>

                <div class="w-full h-[1px] bg-black"></div>

                <div class="input-label-text-box">                  
                    <label for="상태 히스토리" class="text-sm">상태 히스토리</label>
                     <Textarea placeholder="답변합니다" v-model="value" rows="5" cols="30" />
                </div>

                <div class="flex justify-end">
                    <Button label="저장하기"/>

                </div>
            </div>
         </div>

         <div class="set-input-box">
            <h2 class="text-sm font-bold">유사 오류 목록</h2>
            <SimErrorTable/>
         </div>
     </div>



    </div>
</template>

<script setup lang="ts">
import { Button, InputText } from 'primevue';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';

import { ref } from "vue";
import SimErrorTable from './SimErrorTable.vue';

const selectedStatus = ref();
const statuses = ref([
    { name: "진행중", code: 'P' },
    { name: '완료', code: 'C' },
    { name: '답변대기중', code: 'W' },
]);



</script>


