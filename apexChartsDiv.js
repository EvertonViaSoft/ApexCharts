function novoGrafico($idElement, $typeElement, $titleElement, $xTitle, $yTitle, $contentElement, $dataLabels)
{
    var options = 
    {
        chart: {
            height: "100",
            type: $typeElement,
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            sparkline: {
                enabled: true
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
            total: {
                formatter: function (val) {
                    return val + '%'
                }  
            },
        },
        stroke: {
            curve: 'smooth'
        },
        series: 
            $contentElement
        ,
        title: {
            text: undefined,
            align: 'center'
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        markers: {
            size: 6
        },
        xaxis: {
            border:0,
            show:true,
        },
        yaxis: {
            title: {
                text: $yTitle
            },
        },
        
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'left',
            offsetY: -25,
            offsetX: -5
        }
    }

    var chart = new ApexCharts(
        document.querySelector($idElement),
        options
    );

    chart.render();
}