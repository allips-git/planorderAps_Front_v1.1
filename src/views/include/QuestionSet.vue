<template>
    <div class="w-[870px]">

        <header class="flex justify-between py-1 bg-white x-5">
         <h3 class="text-sm font-bold leading-[3]"> 문의 상세 모달</h3>
         <div class="">
             <Button icon="pi pi-window-maximize" severity="secondary" text rounded aria-label="Cancel" style="color: black;"/>
             <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Cancel" style="color: black;"/>
         </div>
     </header>
     
     <div class="set-form-box">
         <div class="set-input-box">
             <h2 class="text-sm font-bold">문의 기본 정보</h2>
            
             <div class="input-box-form-4">
                <div class="input-label-form-box-4">
                    <label for="문의이슈번호" class="text-sm ">문의이슈번호</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="input-label-form-box-4">
                    <label for="문의유형" class="text-sm ">문의유형</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="input-label-form-box-4">
                    <label for="문의회원" class="text-sm ">문의회원</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="input-label-form-box-4">
                    <label for="회원구분" class="text-sm ">회원구분</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="input-label-form-box-4">
                    <label for="최근번호일자" class="text-sm ">최근번호일자</label>
                    <InputText type="text" v-model="value"/>
                </div>

                <div class="input-label-form-box-4">
                    <label for="최근답변일자" class="text-sm ">최근답변일자</label>
                    <InputText type="text" v-model="value"/>
                </div>
                
                <div class="input-label-form-box-4">
                    <label for="답변담당자" class="text-sm ">답변담당자</label>
                    <InputText type="text" v-model="value"/>
                </div>
                
                <div class="input-label-form-box-4">
                    <label for="상태" class="text-sm">상태</label>
                    <Select v-model="selectedStatus" :options="statuses" optionLabel="name" class="w-full md:w-56" />

                </div>
             </div> 
         </div>

         <div class="set-input-box">
            <div class="input-box-form">
                <div class="input-label-form-box">
                    <label for="문의제목" class="text-sm">문의제목</label>
                    <InputText type="text" v-model="value" placeholder="문의합니다"/>
                </div>

                <div class="input-label-text-box">                  
                    <label for="문의 내용" class="text-sm">문의내용</label>
                     <Textarea placeholder="문의합니다" v-model="value" rows="5" cols="30" />
                </div>

                <div class="w-full h-[1px] bg-black"></div>

                <div class="input-label-text-box">                  
                    <label for="문의 답변" class="text-sm">문의답변</label>
                     <Textarea placeholder="답변합니다" v-model="value" rows="5" cols="30" />
                </div>

                <div class="flex justify-end">
                    <Button label="저장하기"/>

                </div>
            </div>
         </div>

         <div class="set-input-box">
            <h2 class="text-sm font-bold">문의 히스토리</h2>
            <div class="set-text-box">
                <h4 class="text-sm font-normal text-gray-900">문의 날짜 : 2025.04.07 17:00:00</h4>
                <h4 class="text-sm font-normal text-gray-900">답변 날짜 : 2025.04.08 17:00:00</h4>
                <h4 class="text-sm font-normal text-gray-900">답변 담당자 : 전수현</h4>

                <div class="flex justify-between">
                    <p class="text-sm font-normal text-gray-900">문의 내용: 무니무니 나문희...</p>
                    <i class="pi pi-chevron-down"></i>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm font-normal text-gray-900">답변 내용: 답변입니다...</p>
                    <i class="pi pi-chevron-down"></i>
                </div>
            </div>

            <div class="set-text-box">
                <h4 class="text-sm font-normal text-gray-900">문의 날짜 : 2025.04.07 17:00:00</h4>
                <h4 class="text-sm font-normal text-gray-900">답변 날짜 : 2025.04.08 17:00:00</h4>
                <h4 class="text-sm font-normal text-gray-900">답변 담당자 : 전수현</h4>

                <div class="flex justify-between">
                    <p class="text-sm font-normal text-gray-900">문의 내용: 무니무니 나문희...</p>
                    <i class="pi pi-chevron-down"></i>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm font-normal text-gray-900">답변 내용: 답변입니다...</p>
                    <i class="pi pi-chevron-down"></i>
                </div>
            </div>

            <div class="set-text-box">
                <h4 class="text-sm font-normal text-gray-900">문의 날짜 : 2025.04.07 17:00:00</h4>
                <h4 class="text-sm font-normal text-gray-900">답변 날짜 : 2025.04.08 17:00:00</h4>
                <h4 class="text-sm font-normal text-gray-900">답변 담당자 : 전수현</h4>

                <div class="flex justify-between">
                    <p class="text-sm font-normal text-gray-900">문의 내용: 무니무니 나문희...</p>
                    <i class="pi pi-chevron-down"></i>
                </div>

                <div class="flex justify-between">
                    <p class="text-sm font-normal text-gray-900">답변 내용: 답변입니다...</p>
                    <i class="pi pi-chevron-down"></i>
                </div>
            </div>
         </div>
     </div>
        
    </div>
</template>

<script setup lang="ts">
import { Button, InputText } from 'primevue';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import { ref } from "vue";

const selectedStatus = ref();
const statuses = ref([
    { name: "진행중", code: 'P' },
    { name: '완료', code: 'C' },
    { name: '답변대기중', code: 'W' },
]);

</script>


<style></style>