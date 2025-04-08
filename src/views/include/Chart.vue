
<template>
    <div class="custum-chart">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-[270px]" />
    </div>
</template>

<script setup>
import { elements } from "chart.js";
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
            {
                label: '공장',
                fill: false,
                borderColor: "#18A0FB",
                yAxisID: 'y',
                data: [65, 59, 80, 81, 56, 55, 10,65, 59, 80, 81, 56, 55, 10,65, 59, 80, 81, 56, 55, 10,65, 59, 80, 81, 56, 55, 10,3,4]
            },
            {
                label: '센터',
                fill: false,
                borderColor: "#9BE8A7",
                yAxisID: 'y1',
                data: [28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,8,5]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor,
                    useBorderRadius: true,
                    borderRadius: 5,
                    boxWidth: 9,
                    boxHeight: 9,
                    fillStyle: "#9BE8A7",
                }
            },

            tooltip : {
                mode            : 'index',
                intersect       : false,
                displayColors   : false,
                padding         : 12,
               
            }
        },
        scales: {

         
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    display: false
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
               
            },
            y1: {
                type: 'linear',
                display: false,
                position: 'right',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawOnChartArea: false,
                    color: surfaceBorder,
                }
            }
        },
       
    };
}
</script>
