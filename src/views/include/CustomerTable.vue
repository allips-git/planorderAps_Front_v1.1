<template>
    <div class="custom-customer" style="max-width: 1300px;">
        <DataTable v-model:filters="filters" :value="customers" filterDisplay="row" dataKey="id" :loading="loading" tableStyle="width:100% table-layout:auto"
        class="my-table"  style="width: 100%;"
        >
                <template #header>
                    <div class="custom-header">
                        <IconField iconPosition="left">
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="아이디를 검색해주세요" />
                        </IconField>
                    </div>
                </template>
                <template #empty> No customers found. </template>

                
                <Column field="순번" header="순번" sortable :showFilterMenu="false" style="flex">
                    <template #body="{ data }">
                         <div class="flex items-center gap-2">
                             <span>{{ data.순번 }}</span>
                        </div>
                     </template>

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                     </template>
                </Column>

                <Column header="문의유형" field="문의유형" :showFilterMenu="false" sortable filterMatchMode="equals">
                    <template #body="{ data }">
                         <div class="flex items-center gap-2">
                             <span>{{ data.문의유형 }}</span>
                        </div>
                     </template>

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
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

                <Column header="제목" filterField="제목" :showFilterMenu="false">
                    <template #body="{ data }">
                         <div class="flex items-center gap-2">
                             <span>{{ data.문의유형 }}</span>
                        </div>
                     </template>

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                     </template>
                   
                </Column>



                <Column field="회원구분" header="회원구분" :showFilterMenu="false">
                    <template #body="{ data }">
                         <div class="flex items-center gap-2">
                             <span>{{ data.문의유형 }}</span>
                        </div>
                     </template>

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                     </template>
                </Column>

                <Column field="회원구분" header="회원구분" :showFilterMenu="false">
                    <template #body="{ data }">
                         <div class="flex items-center gap-2">
                             <span>{{ data.문의유형 }}</span>
                        </div>
                     </template>

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                     </template>
                </Column>

                <Column field="회원구분" header="회원구분" :showFilterMenu="false">
                    <template #body="{ data }">
                         <div class="flex items-center gap-2">
                             <span>{{ data.문의유형 }}</span>
                        </div>
                     </template>

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
                        @input="filterCallback()"
                        placeholder="검색"
                        />
                     </template>
                </Column>

                <Column field="회원구분" header="회원구분" :showFilterMenu="false">
                    <template #body="{ data }">
                         <div class="flex items-center gap-2">
                             <span>{{ data.문의유형 }}</span>
                        </div>
                     </template>

                     <template #filter="{ filterModel, filterCallback }">
                        <InputText
                        v-model="filterModel.value"
                        type="text"
                        size="small" 
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
            문의유형:'주문 / 발주',
            status: "진행중",
            제목: "aa@gmail.com",
            회원구분: "공장",
            문의회원: "aa@gmail.com(공장명)",
            문의일자: "2025-04-09 14:34:54",
            최근답변일자: "2025-04-09 15:34:54",
        },
        {
            순번:'1',
            문의유형:'주문 / 발주',
            status: "완료됨",
            제목: "aa@gmail.com",
            회원구분: "공장",
            문의회원: "aa@gmail.com(공장명)",
            문의일자: "2025-04-09 14:34:54",
            최근답변일자: "2025-04-09 15:34:54",
        },
        {
            순번:'1',
            문의유형:'주문 / 발주',
            status: "답변대기중",
            제목: "aa@gmail.com",
            회원구분: "공장",
            문의회원: "aa@gmail.com(공장명)",
            문의일자: "2025-04-09 14:34:54",
            최근답변일자: "2025-04-09 15:34:54",
        }
    ]
);
const filters = ref(
    {
        global: { value: null, matchMode:"contains" },
        순번: { constraints: [{ value: null, matchMode:"contains" }] },
        문의유형: { constraints: [{ value: null, matchMode: "contains" }] },
        status: { value: null, matchMode: "contains" },
        제목: { constraints: [{ value: null, matchMode: "contains" }] },
        문의회원: { constraints: [{ value: null, matchMode: "contains" }] },
        회원구분: { constraints: [{ value: null, matchMode: "contains" }] },
        최근답변일자: { constraints: [{ value: null, matchMode: "contains" }] },
        문의일자: { constraints: [{ value: null, matchMode: "contains" }] },
    }
);

const statuses = ref(['진행중', '답변대기중', '완료됨']);

const getSeverity = (status) => {
    switch (status) {
        case '진행중':
            return 'progress';

        case '답변대기중':
            return 'waiting';

        case '완료됨':
            return 'complete';

    }
};

</script>
