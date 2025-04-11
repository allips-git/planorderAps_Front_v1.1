<template>

    <div class="z-0 w-full overflow-y-auto">

        <main class="flex flex-col w-full h-screen overflow-y-hidden bg-gray-100">

            <header class="top-0 z-10 flex items-center gap-4 px-3 py-3 bg-white border-b border-gray-200 md:px-5">
                <div class="font-bold text-gray-900">결제관리</div>
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
                        <div class="text-lg font-bold">총 매출</div>
                    </div>

                    <div class="flex items-end justify-end gap-1 pt-3 ">
                        <div class="text-[36px] font-semibold text-end">100,000,000</div>
                        <div class="text-[20px] font-bold leading-[40px]">원</div>
                    </div>
                </div>

                <div class="col-span-3 p-5 border-r border-gray-200">
                    <div class="flex items-center gap-3 state_title">
                        <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                            <IconBlind/>
                        </div>
                        <div class="text-lg font-bold">평균 결제액</div>
                    </div>

                    <div class="flex items-end justify-end gap-1 pt-3 ">
                        <div class="text-[36px] font-semibold text-end">100,000</div>
                        <div class="text-[20px] font-bold leading-[40px]">원</div>
                    </div>
                </div>

                <div class="col-span-3 p-5 border-r border-gray-200">
                    <div class="flex items-center gap-3 state_title">
                        <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                            <IconBlind/>
                        </div>
                        <div class="text-lg font-bold">베이직 결제 건수</div>
                    </div>

                    <div class="flex items-end justify-end gap-1 pt-3 ">
                        <div class="text-[36px] font-semibold text-end">500</div>
                        <div class="text-[20px] font-bold leading-[40px]">건</div>
                    </div>
                </div>
                    

                <div class="col-span-3 p-5 border-r border-gray-200">
                    <div class="flex items-center gap-3 state_title">
                        <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                            <IconBlind/>
                        </div>
                        <div class="text-lg font-bold">프리미엄 결제 건수</div>
                    </div>

                    <div class="flex items-end justify-end gap-1 pt-3 ">
                        <div class="text-[36px] font-semibold text-end">45</div>
                        <div class="text-[20px] font-bold leading-[40px]">건</div>
                    </div>
                </div>
                    

                <div class="col-span-3 p-5 border-r border-gray-200">
                    <div class="flex items-center gap-3 state_title">
                        <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                            <IconBlind/>
                        </div>
                        <div class="text-lg font-bold">광고 결제 건수</div>
                    </div>

                    <div class="flex items-end justify-end gap-1 pt-3 ">
                        <div class="text-[36px] font-semibold text-end">45</div>
                        <div class="text-[20px] font-bold leading-[40px]">건</div>
                    </div>
                </div>
                    

                <div class="col-span-3 p-5 border-r border-gray-200">
                    <div class="flex items-center gap-3 state_title">
                        <div class="w-[32px] h-[32px] flex justify-center items-center bg-blue-50 rounded-lg">
                            <IconBlind/>
                        </div>
                        <div class="text-lg font-bold">환불처리</div>
                    </div>

                    <div class="flex items-end justify-end gap-1 pt-3 ">
                        <div class="text-[36px] font-semibold text-end">500,000</div>
                        <div class="text-[20px] font-bold leading-[40px]">원 (5건)</div>
                    </div>
                </div>
         </div>
         
         <div class="w-full">


         </div>
        
            </div>

            <div class="grid w-full grid-cols-12">
                <section class="bg-white border-gray-200 cols-span-8">아자</section>
            </div>
        </main>



    </div>
</template>

<script setup lang="ts">

import IconBlind from '@/components/icons/IconBlind.vue';
import IconCategory from '@/components/icons/IconCategory.vue';

</script>