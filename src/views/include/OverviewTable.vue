
<template>
    <div class="custom_overviewtable">
        <DataTable :value="result" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-sm font-bold">최근 7일 합계</span>
                </div>
            </template>
            <Column field="날짜" header="날짜"></Column>
            <Column field="공장가입수" header="공장가입수"></Column>
            <Column field="매장가입" header="매장가입"></Column>
            <Column field="공장제휴요청" header="발생 플랫폼"></Column>
            <Column field="매장제휴요청" header="발생 플랫폼"></Column>
            <Column field="공장제휴요청" header="발생 플랫폼"></Column>
            <Column field="문의" header="발생 플랫폼"></Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const result = ref(
    [
        {
            날짜: "5.11",
            공장가입수: "5건",
            매장가입: "5건",
            공장제휴요청: "5건",
            매장제휴요청: "5건",
            플랜오더사용률: "5건",
            문의: "5건",
        },
        {
            날짜: "5.11",
            공장가입수: "5건",
            매장가입: "5건",
            공장제휴요청: "5건",
            매장제휴요청: "5건",
            플랜오더사용률: "5건",
            문의: "5건",
        } , {
            날짜: "5.11",
            공장가입수: "5건",
            매장가입: "5건",
            공장제휴요청: "5건",
            매장제휴요청: "5건",
            플랜오더사용률: "5건",
            문의: "5건",
        }  ,{
            날짜: "5.11",
            공장가입수: "5건",
            매장가입: "5건",
            공장제휴요청: "5건",
            매장제휴요청: "5건",
            플랜오더사용률: "5건",
            문의: "5건",
        } , {
            날짜: "5.11",
            공장가입수: "5건",
            매장가입: "5건",
            공장제휴요청: "5건",
            매장제휴요청: "5건",
            플랜오더사용률: "5건",
            문의: "5건",
        } , {
            날짜: "5.11",
            공장가입수: "5건",
            매장가입: "5건",
            공장제휴요청: "5건",
            매장제휴요청: "5건",
            플랜오더사용률: "5건",
            문의: "5건",
        } , {
            날짜: "5.11",
            공장가입수: "5건",
            매장가입: "5건",
            공장제휴요청: "5건",
            매장제휴요청: "5건",
            플랜오더사용률: "5건",
            문의: "5건",
        }
    ]
);


</script>
