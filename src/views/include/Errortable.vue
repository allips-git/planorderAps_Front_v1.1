<template>
    <div class="custom_datatable">
        <DataTable :value="error" tableStyle="min-width: 50rem">
            <Column field="오류코드" header="오류 코드"></Column>
            <Column field="발생플랫폼" header="발생 플랫폼"></Column>
            <Column field="오류발생회원코드" header="오류 발생 회원 코드"></Column>
            <Column field="세부사항" header="세부 사항"></Column>
            <Column field="시간" header="시간"></Column>
        </DataTable>
        
    </div>
</template>

<style>
@import "@/assets/primevue_custom.scss"
  

</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional


const error = ref(
    [
        {오류코드: "500",
        발생플랫폼: "500",
        오류발생회원코드: "500",
        세부사항: "500",
        시간: "500",
                        },

                        {오류코드: "500",
        발생플랫폼: "500",
        오류발생회원코드: "F8030",
        세부사항: "500",
        시간: "500",
                        },
                      
    ]
);

</script>

