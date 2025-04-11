<template>

    <div class="z-0 w-full overflow-y-auto">

        <main class="flex flex-col w-full h-screen overflow-y-hidden bg-gray-100">
            <header class="top-0 z-10 flex items-center gap-4 px-3 py-3 bg-white border-b border-gray-200 md:px-5">
                   <div class="font-bold text-gray-900">고객지원</div>
                   <div class="w-[1px] h-[12px] bg-gray-400"></div>
            </header>
            
    
             <!-- 카드 -->
            <div class="flex flex-col gap-4 p-4">
                 <div class="grid grid-cols-12 border-1 border-gray-200 bg-white h-full *:col-span-2">
                    
                        <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">총 문의수</div>
                            </div>
    
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <div class="text-[36px] font-semibold text-end">255</div>
                                <div class="text-[20px] font-bold leading-[40px]">건</div>
                            </div>
                        </div>
    
                        <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">주문 / 발주 관련</div>
                            </div>
    
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <div class="text-[36px] font-semibold text-end">255</div>
                                <div class="text-[20px] font-bold leading-[40px]">건</div>
                            </div>
                        </div>
                            
    
                        <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">회원 간 분쟁 관련</div>
                            </div>
    
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <div class="text-[36px] font-semibold text-end">255</div>
                                <div class="text-[20px] font-bold leading-[40px]">건</div>
                            </div>
                        </div>
                            
    
                        <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">서비스 관련</div>
                            </div>
    
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <div class="text-[36px] font-semibold text-end">255</div>
                                <div class="text-[20px] font-bold leading-[40px]">건</div>
                            </div>
                        </div>
                            
    
                        <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconBlind/>
                                </div>
                                <div class="text-lg font-bold">제휴 관련</div>
                            </div>
    
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <div class="text-[36px] font-semibold text-end">255</div>
                                <div class="text-[20px] font-bold leading-[40px]">건</div>
                            </div>
                        </div>
                            
    
                        <div class="col-span-3 p-5 border-r border-gray-200">
                            <div class="flex items-center gap-3 state_title">
                                <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                                    <IconCategory/>
                                </div>
                                <div class="text-lg font-bold">기타</div>
                            </div>
    
                            <div class="flex items-end justify-end gap-1 pt-3 ">
                                <div class="text-[36px] font-semibold text-end">255</div>
                                <div class="text-[20px] font-bold leading-[40px]">건</div>
                            </div>
                        </div>
                            
                            
                 </div>
                 
                 <div class="w-full">

                     <CustomerTable/>

                 </div>
                  <!-- <Errortable/> -->
                
            </div>
    
        </main>



    </div>
   
</template>

<script setup lang="ts">
import IconBlind from '@/components/icons/IconBlind.vue';
import IconCategory from '@/components/icons/IconCategory.vue';
import CustomerTable from '@/views/include/CustomerTable.vue';
import Errortable from './include/Errortable.vue';
</script>