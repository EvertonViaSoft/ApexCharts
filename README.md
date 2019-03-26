## ApexCharts 

Desenvolvi estes documentos para fazer uma integração entre o PHP, Javascript e o apexCharts(Graficos para html5 em canvas).  
Neste projeto crio uma classe com funções para automatizar a criar novos graficos sem ter que desenvolver parte disso em Javascript, como normalmente fazem.


#### Arquivos e suas funcões.
----

**apexChartsDiv.js**
``` 
Contem as funções utilizadas pelo PHP (Gera graficos para ser utilizado junto a informações na div.)
```
**apexCharts.js**
```
Contem as funções utilizadas pelo PHP
```
**apexCharts.min.js**
```
Nada mais que o apexCharts não deixe-o de fora da sua aplicação se não nada funcionará.
```
**apexCharts.php**
```
Responsavel por gerar qualquer grafico.
```

## Passar os dados para o grafico via PHP
----
passe um array que tenha um subitem em cada item indice deste array (exemplo abaixo),  
tambem passa os labels todos dentro de aspas simples (exemplo abaixo).

```php
$dadosGrafico = [
    0 => [
        "name" => "Item1",
        "data" => "3,1,5,2,7,3" 
    ]
];

$labelsGrafico = "'Num1', 'Num2', 'Num3', 'Num4', 'Num5', 'Num6'";
```
       
## Criando os graficos 
```php 
$chart = new apexCharts; // Chama a classe
        
$chart->setData($dados, $labels); // $dados =: dados do grafico ; $labels =: labels do grafico
$chart->setGraphic($div, $tipo, $percentage); // $div =: id da div a receber o grafico ; $tipo =: line, bar, area ; $percentage =: 1 grafico com porcentagem, não é obrigado a prencher.
$chart->setTitles($title, $xAxes, $yAxes); // $title =: titulo do grafico ; $xAxes =: titulo dos xAxes (não é necessario) ; $yAxes =: titulo dos yAxes (não é necessario);

$chart->htmlInclude(); 
// return <script src="apexCharts.min.js"></script>
//        <script src="apexCharts.js"></script>

$chart->htmlGraphic(); // gera o grafico 
```

