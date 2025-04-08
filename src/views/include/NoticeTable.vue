<template>
    <div class="custom_notice">
        <DataTable :value="notice" tableStyle="min-width: 50rem">
            <Column field="구분" ></Column>
            <Column field="내용" ></Column>
            <Column field="시간" ></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const notice = ref(
    [
        {
            구분: "공장",
            내용: "'발주처 이름' 발주서가 반려되었습니다.",
            시간: "25.04.08"
        },
        {
            구분: "공장",
            내용: "'발주처 이름' 발주서가 반려되었습니다.",
            시간: "25.04.08"
        },
        {
            구분: "센터",
            내용: "'발주처 이름' 발주서가 반려되었습니다.",
            시간: "25.04.08"
        },
        {
            구분: "공장/센터",
            내용: "공지사항 테스트입니다.",
            시간: "25.04.08"
        },
        {
            구분: "공장",
            내용: "2~4시 서버 점검입니다.",
            시간: "25.04.08"
        },
        {
            구분: "공장",
            내용: "'발주처 이름' 발주서가 반려되었습니다.",
            시간: "25.04.08"
        },
        {
            구분: "공장",
            내용: "'발주처 이름' 발주서가 반려되었습니다.",
            시간: "25.04.08"
        },
        {
            구분: "센터",
            내용: "'발주처 이름' 발주서가 반려되었습니다.",
            시간: "25.04.08"
        },
        {
            구분: "공장/센터",
            내용: "공지사항 테스트입니다.",
            시간: "25.04.08"
        },
        {
            구분: "공장",
            내용: "'발주처 이름' 발주서가 반려되었습니다.",
            시간: "25.04.08"
        }
    ]
);

</script>