<template>
<div class="custom simerrortable">
    <DataTable 
        v-model:filters="filters" 
        :value="errors" 
        data-key="id" 
        filter-display="row" 
        :loading="loading"    
        stripedRows 
        removableSort 
        scrollable 
        maximizable
    >
    
        <Column field="이슈번호" header="이슈번호" :showFilterMenu="false" sortable>
            <template #body="{data}">
                {{ data.이슈번호 }}
            </template>
            <template #filter="{ filterModel, filterCallback}">
                <InputText v-model="filterModel.value" size="small" type="text" @input="filterCallback()" placeholder="검색"/>
            </template>
        </Column>

        <Column field="발생시각" header="발생시각" :showFilterMenu="false" sortable>
            <template #body="{data}">
                {{ data.발생시각 }}
            </template>
            <template #filter="{ filterModel, filterCallback}">
                <InputText v-model="filterModel.value" type="text" size="small" @input="filterCallback()" placeholder="검색"/>
            </template>
        </Column>


        <Column field="플랫폼구분" header="플랫폼구분" :showFilterMenu="false" sortable>
            <template #body="{data}">
                {{ data.플랫폼구분 }}
            </template>
            <template #filter="{ filterModel, filterCallback}">
                <InputText v-model="filterModel.value" type="text" size="small" @input="filterCallback()" placeholder="검색"/>
            </template>
        </Column>


        <Column field="오류코드" header="오류코드" :showFilterMenu="false" sortable >
            <template #body="{data}">
                {{ data.오류코드 }}
            </template>
            <template #filter="{ filterModel, filterCallback}">
                <InputText v-model="filterModel.value" type="text" size="small" @input="filterCallback()" placeholder="검색"/>
            </template>
        </Column>


        <Column field="요청URL" header="요청URL" :showFilterMenu="false" sortable>
            <template #body="{data}">
                {{ data.요청URL }}
            </template>
            <template #filter="{ filterModel, filterCallback}">
                <InputText v-model="filterModel.value" type="text" size="small" @input="filterCallback()" placeholder="검색"/>
            </template>
        </Column>

        <Column field="처리일자" header="처리일자" :showFilterMenu="false" sortable>
            <template #body="{data}">
                {{ data.처리일자 }}
            </template>
            <template #filter="{ filterModel, filterCallback}">
                <InputText v-model="filterModel.value" type="text" size="small" @input="filterCallback()" placeholder="검색"/>
            </template>
        </Column>


    </DataTable>
</div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext'; 
import { ref } from 'vue';

const errors = ref([
    {
        이슈번호: '1',
        발생시각: "2025-04-09 18:45:09",
        플랫폼구분: "공장",
        오류코드: "500",
        요청URL: "/api/auth/login",
        처리일자: "2025-04-09 19:00:00"
    },
    {
        이슈번호: '1',
        발생시각: "2025-04-09 18:45:09",
        플랫폼구분: "공장",
        오류코드: "500",
        요청URL: "/api/auth/login",
        처리일자: "2025-04-09 19:00:00"
    },
    {
        이슈번호: '1',
        발생시각: "2025-04-09 18:45:09",
        플랫폼구분: "공장",
        오류코드: "500",
        요청URL: "/api/auth/login",
        처리일자: "2025-04-09 19:00:00"
    }
])

const filters = ref(
    {
        이슈번호: { constraints: [{ value: null, matchMode:"contains" }] },
        발생시각: { constraints: [{ value: null, matchMode:"contains" }] },
        플랫폼구분: { constraints: [{ value: null, matchMode:"contains" }] },
        오류코드: { constraints: [{ value: null, matchMode:"contains" }] },
        요청URL: { constraints: [{ value: null, matchMode:"contains" }] },
        처리일자: { constraints: [{ value: null, matchMode:"contains" }] },
    }
);
</script>