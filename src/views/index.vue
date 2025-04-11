<template>
    <div class="w-full">

        <main class="flex flex-col w-full overflow-y-hidden bg-gray-100">
          <header class="top-0 z-10 flex items-center justify-between px-3 py-3 bg-white border-b border-gray-200 md:px-5">
              <div class="flex items-center gap-1">
                  
                      <Button severity="contrast" icon="pi pi-angle-left" plain text rounded></Button>
                      
                      <div class="relative cursor-pointer">
                          <div class="flex items-center justify-center text-xl font-bold" @click="showDatePicker"> 2025년 04월 07일 <span class="ml-2 text-gray-400 pi pi-calendar"></span></div>
                          <Popover ref="datepickerOpen" class="*:!p-0">
                              <DatePicker class="custom_datepicker" inline iconDisplay="input"/>
                          </Popover>
                      </div>
                      <Button severity="contrast" icon="pi pi-angle-right" plain text rounded>
      
                      </Button>
                  
              </div>
              <div class="flex items-center justify-center gap-1">
                  <p class="text-xs text-gray-600 md:text-sm">2025.04.07 13:40에 업데이트됨</p>
                  <Button variant="text" rounded severity="contrast" text  plain icon="pi pi-refresh"  class="w-20 "></Button>
              </div>
          </header>
          <div class="grid grid-cols-6 gap-4 p-4 ">
            <!-- 할일목록 -->
            <div class="col-span-6 dashboard_card_todo">
                <div class="w-full bg-white border-gray-200 rounded-[4px] border-1">
                    <div class="flex gap-1 px-5 pt-3 pb-3 border-b border-gray-200">
                        <div class="bg-green-50 w-[24px] h-[24px] rounded-full flex items-center justify-center">
                        <IconPencil/>
                        </div>
                        <div class="font-bold text-gray-900">할일 목록</div>
                    </div>
                    <ul class="md:flex-col dashboard-todo-list">
                        <li class="flex justify-between col-span-3 p-4 border-r border-gray-200">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">공장 가입 요청 승인</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li>
                        <li class="flex justify-between col-span-3 p-4 border-r border-gray-200">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">매장 가입 요청 승인</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li>
                        <li class="flex justify-between col-span-3 p-4 border-r border-gray-200">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">공장 제휴 요청 승인</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li>
                        <li class="flex justify-between col-span-3 p-4 border-r border-gray-200">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">매장 제휴 요청 승인</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li>
                        <li class="flex justify-between col-span-3 p-4 ">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">답변 대기 문의</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <!-- 오류 alert -->
             <div class="flex items-center justify-between w-full col-span-6 px-5 pt-3 pb-3 bg-red-100 border-red-800 rounded-sm border-1">

                 <div class="font-bold text-red-800"> 알림 : 확인 되지 않은 서버 오류 1건이 감지되었습니다!</div>
                 <div class="text-sm text-gray-600">2025.04.07 (17:56:00) 기준</div>

             </div>
            
            <!-- 시스템, 오류 -->
            <div class="grid grid-cols-6 col-span-6 gap-4 dashboard_section">

                <section class="xl:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-6 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconGauge/>

                            </div>

                            <h4 class="mr-2 font-bold">시스템 상태 및 안정성</h4>
                            <p class="text-gray-400">></p>

                       </div>
                       <div class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </div>
                    </div>

                    <div class="grid w-full grid-cols-12">
                        <div class="col-span-3 p-5 border-r border-gray-200 sm:cols-span-12 xl:p-4">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <p class="text-base font-bold xl:text-lg">활성 사용자</p>
                            </div>
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <h4 class="text-[36px] font-semibold text-end">1364</h4>
                                <p class="text-[20px] font-bold leading-[40px]">명</p>
                            </div>
                        </div>

                        <div class="col-span-3 p-5 border-r border-gray-200 xl:p-4">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <p class="text-base font-bold xl:text-lg">서버 상태</p>
                            </div>
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <h4 class="text-[36px] font-semibold text-end">양호</h4>
                            </div>
                        </div> 
                        
                        <div class="col-span-3 p-5 border-r border-gray-200 xl:p-4">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <p class="text-base font-bold xl:text-lg">평균 응답 시간</p>
                            </div>
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <h4 class="text-[36px] font-semibold text-end">0.98</h4>
                                <p class="text-[20px] font-bold leading-[40px]">초</p>
                            </div>
                        </div> 
                        
                        <div class="col-span-3 p-5 xl:p-4 ">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <p class="text-base font-bold xl:text-lg">API 성공률</p>
                            </div>
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <h4 class="text-[36px] font-semibold text-end">98</h4>
                                <p class="text-[20px] font-bold leading-[40px]">%</p>
                            </div>
                        </div>
                    </div>
                </section> 

                <section class="xl:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-6 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconError/>

                            </div>
                            <h4 class="mr-2 font-bold">최근 오류</h4>
                             <p class="text-gray-400">></p>
                       </div>
                       <p class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </p>
                    </div>

                  <div class="px-5 pt-3 pb-3">

                      <Errortable/>

                  </div>
                   
                </section> 

            </div>

            <!-- 성과지표, 요약 -->
            <div class="grid grid-cols-6 col-span-6 gap-4 dashboard_section">
                <section class="xl:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-6 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconResult/>

                            </div>
                            <h4 class="mr-2 font-bold">일별 성과 지표</h4>
                             <p class="text-gray-400">></p>
                       </div>
                       <p class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </p>
                       
                    </div>

                    <div class="px-5 pt-3 pb-3">
                       
                     
                    <div class="flex justify-end custom_select">
                        <Select v-model="selectedCategory" :options="category" optionLabel="name" placeholder="가입현황" class="w-[106px] h-[30px] md:w-56" />
                    </div>
                        
                        
                        <Chart/>
                    </div>
                
                </section> 
                <section class="xl:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-6 border-gray-200 border-1  pt-3 pb-3 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                                <IconOver/>
                            </div>
                            <h4 class="mr-2 font-bold">일자별 요약</h4>
                             <p class="text-gray-400">></p>
                       </div>
                       <p class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </p>
                    </div>
                   
                    <OverviewTable/>
                </section> 

            </div>

            <!-- 문의 현황, 공지 사항 -->
            <div class="grid grid-cols-6 col-span-6 gap-4 dashboard_section">
                <section class="xl:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-6 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconsQues/>

                            </div>
                            <h4 class="mr-2 font-bold">문의 현황</h4>
                             <p class="text-gray-400">></p>
                       </div>
                       <h4 class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </h4>
                    </div>

                    <div class="px-5 pt-3 pb-3">
                        <ul class="flex flex-col gap-3 ">
                            <li class="flex gap-3">
                                <div class="custom_button">
                                     <Button label="진행중" class="btn_progress"/>
                                </div>

                                <div class="text-gray-900">
                                    문의합니다 문의합니다 문의합니다 문의합니다
                                    <div class="text-sm text-gray-600">aa@aa.com (공장명) | 2025. 04. 08 17:00</div>
                                </div>
                            </li>

                            <li class="flex gap-3">
                                <div class="custom_button">
                                     <Button label="진행중" class="btn_progress"/>
                                </div>

                                <div class="text-gray-900">
                                    문의합니다 문의합니다 문의합니다 문의합니다
                                    <div class="text-sm text-gray-600">aa@aa.com (공장명) | 2025. 04. 08 17:00</div>
                                </div>
                            </li>
                            <li class="flex gap-3">
                                <div class="custom_button">
                                     <Button label="답변대기중" class="btn_waiting"/>
                                </div>

                                <div class="text-gray-900">
                                    문의합니다 문의합니다 문의합니다 문의합니다
                                    <div class="text-sm text-gray-600">aa@aa.com (공장명) | 2025. 04. 08 17:00</div>
                                </div>
                            </li>
                            <li class="flex gap-3">
                                <div class="custom_button">
                                     <Button label="완료됨" class="btn_complete"/>
                                </div>

                                <div class="text-gray-900">
                                    문의합니다 문의합니다 문의합니다 문의합니다
                                    <div class="text-sm text-gray-600">aa@aa.com (공장명) | 2025. 04. 08 17:00</div>
                                </div>
                            </li>
                            <li class="flex gap-3">
                                <div class="custom_button">
                                     <Button label="진행중" class="btn_progress"/>
                                </div>

                                <div class="text-gray-900">
                                    문의합니다 문의합니다 문의합니다 문의합니다
                                    <div class="text-sm text-gray-600">aa@aa.com (공장명) | 2025. 04. 08 17:00</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                   
                </section> 
                <section class="xl:col-span-3 md:col-span-6 sm:col-span-6 xs:col-span-6 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconNotice/>
                            </div>
                            <h4 class="mr-2 font-bold">공지 사항</h4>
                             <p class="text-gray-400">></p>
                       </div>
                       <p class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </p>
                    </div>
                    
                    <NoticeTable/>
                    
                </section> 

            </div>
           
           
          </div>
        </main>

        <!-- <QuestionSet/> -->
        <!-- <QuestionCom/> -->
        <!-- <ErrorSet/> -->

    </div>
</template>

<script setup lang="ts">
import Topheader from '@/components/layout/Topheader.vue';
import { ref } from 'vue';
import { Button } from 'primevue';
import DatePicker from 'primevue/datepicker';

import Select from 'primevue/select';

import Popover from 'primevue/popover';
import Sidemenu from '@/components/layout/Sidemenu.vue';
import IconPencil from '@/components/icons/IconPencil.vue';
import IconFacAdmit from '@/components/icons/IconFacAdmit.vue';
import IconGauge from '@/components/icons/IconGauge.vue';
import IconBlind from '@/components/icons/IconBlind.vue';
import IconError from '@/components/icons/IconError.vue';
import IconResult from '@/components/icons/IconResult.vue';
import IconOver from '@/components/icons/IconOver.vue';
import IconsQues from '@/components/icons/IconsQues.vue';
import IconNotice from '@/components/icons/IconNotice.vue';
import Errortable from '@/views/include/errortable.vue';
import Chart from '@/views/include/chart.vue';
import OverviewTable from '@/views/include/OverviewTable.vue';
import NoticeTable from '@/views/include/NoticeTable.vue';
import QuestionSet from './include/QuestionSet.vue';
import QuestionCom from './include/QuestionCom.vue';
import ErrorSet from './include/ErrorSet.vue';


const datepickerOpen = ref();

const showDatePicker = (event) => {
    datepickerOpen.value.toggle(event);
}



const selectedCategory = ref();
const category = ref([
    { name: '가입현황', code: 'NY' },
    { name: '제휴현황', code: 'RM' },
    { name: '사용율현황', code: 'LDN' },
    
]);

</script>

<style>

</style>