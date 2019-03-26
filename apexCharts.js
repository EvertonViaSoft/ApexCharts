function novoGrafico($idElement, $typeElement, $titleElement, $xTitle, $yTitle, $contentElement, $dataLabels, $percentage)
{
    var options = 
    {
        chart: {
            height: 350,
            type: $typeElement,
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            },
            toolbar: {
                show: true,
                tools: {
                    download: true
                },
            }
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        series: 
            $contentElement
        ,
        title: {
            text: $titleElement,
            align: 'center'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 6
        },
        xaxis: {
            categories: $dataLabels,
            title: {
                text: $xTitle
            }
        },
        yaxis: {
            title: {
                text: $yTitle
            },
            forceNiceScale: true,
            min:0,
        },
        
        legend: {
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

    if($percentage == 1){
        chart.updateOptions({
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "%";
                    }
                },
                title: {
                    text: $yTitle
                },
                forceNiceScale: true,
                min:0,
            }
        });
    }
}