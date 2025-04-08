<template>
    <Topheader/>
    <div class="flex flex-row">
        <Sidemenu/>

        <main class="flex flex-col w-full h-screen overflow-y-auto bg-gray-100">
          <header class="sticky top-0 z-10 flex items-center justify-between px-3 py-3 bg-white border-b border-gray-200 md:px-5">
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
          <div class="flex flex-col gap-4 p-4">
            <!-- 할일목록 -->
            <div class="dashboard_card_todo">
                <div class="w-full bg-white border-gray-200 rounded-[4px] border-1">
                    <div class="flex gap-1 px-5 pt-3 pb-3 border-b border-gray-200">
                        <div class="bg-green-50 w-[24px] h-[24px] rounded-full flex items-center justify-center">
                        <IconPencil/>
                        </div>
                        <div class="font-bold text-gray-900">할일 목록</div>
                    </div>
                    <ul class="dashboard-todo-list">
                        <li class="flex justify-between p-4 border-r border-gray-200">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">공장 가입 요청 승인</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li>
                        <li class="flex justify-between p-4 border-r border-gray-200">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">매장 가입 요청 승인</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li><li class="flex justify-between p-4 border-r border-gray-200">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">공장 제휴 요청 승인</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li><li class="flex justify-between p-4 border-r border-gray-200">
                            <div class="flex flex-col gap-1">
                                <div class="w-[24px] h-[24px] bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <IconFacAdmit/>
                                </div>
                                <div class="text-sm font-bold">매장 제휴 요청 승인</div>
                            </div>
                            <div class="text-[40px] font-bold">12</div>
                        </li><li class="flex justify-between p-4 border-r border-gray-200">
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
             <div class="flex items-center justify-between w-full px-5 pt-3 pb-3 bg-red-100 border-red-800 rounded-sm border-1">

                 <div class="font-bold text-red-800"> 알림 : 확인 되지 않은 서버 오류 1건이 감지되었습니다!</div>
                 <div class="text-sm text-gray-600">2025.04.07 (17:56:00) 기준</div>

             </div>
            
            <!-- 시스템, 오류 -->
            <div class="grid w-full grid-cols-6 gap-4 dashboard_section">
                <div class="col-span-3 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconGauge/>

                            </div>
                            <div class="mr-2 font-bold">시스템 상태 및 안정성</div>
                             <div class="text-gray-400">></div>
                       </div>
                       <div class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </div>
                    </div>
                    <div class="grid w-full grid-cols-12">
                        <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">활성 사용자</div>
                            </div>
                            <div class="flex items-end justify-end gap-1 pt-3 w-[180px]">
                                <div class="text-[36px] font-semibold text-end">1364</div>
                                <div class="text-[20px] font-bold">명</div>
                            </div>
                        </div>
                        <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">서버 상태</div>
                            </div>
                            <div class="flex items-end justify-end gap-1 pt-3 w-[180px]">
                                <div class="text-[36px] font-semibold text-end">양호</div>
                            </div>
                        </div> <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">평균 응답 시간</div>
                            </div>
                            <div class="flex items-end justify-end gap-1 pt-3 w-[180px]">
                                <div class="text-[36px] font-semibold text-end">0.98</div>
                                <div class="text-[20px] font-bold">초</div>
                            </div>
                        </div> <div class="col-span-3 p-5 ">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">API 성공률</div>
                            </div>
                            <div class="flex items-end justify-end gap-1 pt-3 w-[180px]">
                                <div class="text-[36px] font-semibold text-end">98</div>
                                <div class="text-[20px] font-bold">%</div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-span-3 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconError/>

                            </div>
                            <div class="mr-2 font-bold">최근 오류</div>
                             <div class="text-gray-400">></div>
                       </div>
                       <div class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </div>
                    </div>

                  <div class="px-5 pt-3 pb-3">

                      <Errortable/>

                  </div>
                   
                </div> 

            </div>

            <!-- 성과지표, 요약 -->
            <div class="grid w-full grid-cols-6 gap-4 dashboard_section">
                <div class="col-span-3 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconResult/>

                            </div>
                            <div class="mr-2 font-bold">일별 성과 지표</div>
                             <div class="text-gray-400">></div>
                       </div>
                       <div class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </div>
                       
                    </div>

                    <div class="px-5 pt-3 pb-3">
                       
                     
                    <div class="flex justify-end custom_select">
                        <Select v-model="selectedCategory" :options="category" optionLabel="name" placeholder="가입현황" class="w-[106px] h-[30px] md:w-56" />
                    </div>
                        
                        
                        <Chart/>
                    </div>
                
                </div> 
                <div class="col-span-3 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                                <IconOver/>
                            </div>
                            <div class="mr-2 font-bold">일자별 요약</div>
                             <div class="text-gray-400">></div>
                       </div>
                       <div class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </div>
                    </div>
                   
                    <OverviewTable/>
                </div> 

            </div>

            <!-- 문의 현황, 공지 사항 -->
            <div class="grid w-full grid-cols-6 gap-4 dashboard_section">
                <div class="col-span-3 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconsQues/>

                            </div>
                            <div class="mr-2 font-bold">문의 현황</div>
                             <div class="text-gray-400">></div>
                       </div>
                       <div class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </div>
                    </div>
                   
                </div> 
                <div class="col-span-3 border-gray-200 border-1 rounded-[4px] bg-white dashboard_contents">
                    <div class="flex justify-between gap-1 px-5 pt-3 pb-3 border-b border-gray-200 contents_title">
                       <div class="flex gap-1 contents_title_text">
                            <div class="rounded-full flex justify-center items-center w-[24px] h-[24px] bg-green-50">
                            <IconNotice/>
                            </div>
                            <div class="mr-2 font-bold">공지 사항</div>
                             <div class="text-gray-400">></div>
                       </div>
                       <div class="text-sm text-center text-gray-600 contents_title_statue">
                        2025.04.07 (17:56:00) 기준
                       </div>
                    </div>
                   
                </div> 

            </div>
           
           
          </div>
        </main>
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


const datepickerOpen = ref();

const showDatePicker = (event) => {
    datepickerOpen.value.toggle(event);
}

const error = ref(
    [
        {
           오류코드: "500",
           발생플랫폼: "공장 시스템",
           오류발생회원코드: "FA005",
            세부사항: "외부 주문 500 에러 발생",
            시간: "2025.04.08 14:00:00"
        }
    ]
)

const selectedCategory = ref();
const category = ref([
    { name: '가입현황', code: 'NY' },
    { name: '제휴현황', code: 'RM' },
    { name: '사용율현황', code: 'LDN' },
    
]);

</script>

<style>

</style>