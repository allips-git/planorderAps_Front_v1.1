<template>
    <div class="custom-systemtable">
        <DataTable v-model:filters="filters" :value="customers" filterDisplay="row" dataKey="id" :loading="loading" tableStyle="min-width: 50rem"
        class="my-table"  style="width: 100%;"
        >
                <template #header style="min-width: 50rem;">
                    <div class="custom-header">
                        <IconField iconPosition="left">
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="오류 코드를 검색해주세요" />
                        </IconField>
                    </div>
                </template>
                <template #empty> No customers found. </template>

                
                <Column field="순번" header="순번" sortable :showFilterMenu="false" style="flex">
                    <template #body="{ data }">
                             <span>{{ data.순번 }}</span>
                     </template>

                   

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        class="max-w-[200px] min-w-[80px]"
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                     </template>
                </Column>

                <Column header="발생시각" field="발생시각" :showFilterMenu="false" sortable filterMatchMode="equals">
                    <template #body="{ data }">
                         <!-- <div class="flex items-center gap-2"> -->
                             <span>{{ data.발생시각 }}</span>
                        <!-- </div> -->
                     </template>

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="w-full max-w-[200px]"
                        size="small" 
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                     </template>
                
                </Column>
                
                <Column field="status" header="상태" sortable :showFilterMenu="false" filterMatchMode="equals">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel,filterCallback }">
                    <Select v-model="filterModel.value" :options="statuses"  size="small" placeholder="검색" @input="filterCallback()"  class="p-column-filter" showClear> 
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Select>
                </template>
                </Column>
                
                
                
                <Column field="플랫폼구분" header="플랫폼구분" sortable :showFilterMenu="false">
                    <template #body="{ data }">
                        <!-- <div class="flex items-center gap-2"> -->
                            <span>{{ data.플랫폼구분 }}</span>
                        <!-- </div> -->
                    </template>
                    
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        class="w-full min-w-[120px] max-w-[170px]"
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                    </template>
                </Column>
                
                <Column field="오류코드" header="오류코드" sortable :showFilterMenu="false">
                    <template #body="{ data }">
                        <!-- <div class="flex items-center gap-2"> -->
                            <span>{{ data.오류코드 }}</span>
                        <!-- </div> -->
                    </template>
                    
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        class="max-w-[120px] min-w-[90px]"
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                    </template>
                </Column>
                
                <Column field="요청URL" header="요청URL" sortable :showFilterMenu="false">
                    <template #body="{ data }">
                        <!-- <div class="flex items-center gap-2"> -->
                            <span>{{ data.요청URL }}</span>
                        <!-- </div> -->
                    </template>
                    
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="w-full min-w-[300px]"
                        size="small" 
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                    </template>
                </Column>
                
                <Column field="오류발생회원코드" header="오류발생회원코드" sortable :showFilterMenu="false">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <span>{{ data.오류발생회원코드 }}</span>
                        </div>
                    </template>
                    
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        class="min-w-[100px] max-w-[150px]"
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                    </template>
                </Column>
                
                
                <Column header="처리일자" filterField="처리일자" sortable :showFilterMenu="false">
                    <template #body="{ data }">
                        <!-- <div class="flex items-center gap-2"> -->
                            <span>{{ data.처리일자 }}</span>
                        <!-- </div> -->
                    </template>
                    
                    <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        class="w-full min-w-[200px]"
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                    </template>
                    
                </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import IconField from 'primevue/iconfield'; 
import InputText from 'primevue/inputtext'; 
import InputIcon from 'primevue/inputicon'; 
import Tag from 'primevue/tag';
import Select from 'primevue/select';

const customers = ref(
    [
        {
            순번:'1',
            발생시각:'2025.04.10 15:00:00',
            status: "확인필요",
            플랫폼구분: "공장",
            오류코드: "500",
            요청URL: "/api/auth/login",
            오류발생회원코드: "FA005",
            처리일자: "2025-04-09 15:34:54",
        },
        {
            순번:'1',
            발생시각:'2025.04.10 15:00:00',
            status: "확인필요",
            플랫폼구분: "공장",
            오류코드: "500",
            요청URL: "/api/auth/login",
            오류발생회원코드: "FA005",
            처리일자: "2025-04-09 15:34:54",
        },
        {
            순번:'1',
            발생시각:'2025.04.10 15:00:00',
            status: "확인필요",
            플랫폼구분: "공장",
            오류코드: "500",
            요청URL: "/api/auth/login",
            오류발생회원코드: "FA005",
            처리일자: "2025-04-09 15:34:54",
        },
      
    ]
);
const filters = ref(
    {
        global: { value: null, matchMode:"contains" },
        순번: { constraints: [{ value: null, matchMode:"contains" }] },
        발생시각: { constraints: [{ value: null, matchMode: "contains" }] },
        status: { value: null, matchMode: "contains" },
        플랫폼구분: { constraints: [{ value: null, matchMode: "contains" }] },
        오류코드: { constraints: [{ value: null, matchMode: "contains" }] },
        요청URL: { constraints: [{ value: null, matchMode: "contains" }] },
        오류발생회원코드: { constraints: [{ value: null, matchMode: "contains" }] },
        처리일자: { constraints: [{ value: null, matchMode: "contains" }] },
    }
);

const statuses = ref(['확인 필요', '처리 중', '처리 완료']);

const getSeverity = (status) => {
    switch (status) {
        case '처리중':
            return 'progress';

        case '확인필요':
            return 'waiting';

        case '처리완료':
            return 'complete';

    }
};

</script>
