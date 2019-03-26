<?php


    class apexCharts
    {
        private $dataSeries;
        private $dataLabels;
        private $divGraphic;
        private $typeGraphic;
        private $titleGraphic;
        private $titleXaxes;
        private $titleYaxes;
        private $percentageGraphic;

        public function htmlGraphic()
        {   
            $htmlGraphic = '<script>novoGrafico(';
            $htmlGraphic .= 
            '
                "'.$this->divGraphic.'",
                "'.$this->typeGraphic.'",
                "'.$this->titleGraphic.'",
                '.$this->titleXaxes.',
                '.$this->titleYaxes.',
                ['.$this->dataSeries.'],
                ['.$this->dataLabels.']
            ';

            

            if($this->percentageGraphic === 1):
                $htmlGraphic .= ', 1';
            endif;
            
            $htmlGraphic .= ");</script>";

                    

            echo $htmlGraphic;
        }   

        public function htmlInclude()
        {
            echo '<script src="apexCharts.min.js"></script>
                  <script src="apexCharts.js"></script>';
        }

        public function setData($series, $labels)
        {
            foreach($series as $data):

                if(empty($graphicData)):
                    $graphicData = '{
                        name: "'.$data['name'].'",
                        data: ['.$data['data'].']
                    }';
                else:
                    $graphicData .= ',{
                        name: "'.$data['name'].'",
                        data: ['.$data['data'].']
                    }';
                endif;

            endforeach;

            $this->dataLabels = $labels;
            $this->dataSeries = $graphicData;
        }

        public function setGraphic($graphicId, $graphicType, $graphicPercentage = null)
        {
            $this->divGraphic = $graphicId;
            $this->typeGraphic = $graphicType;
            $this->percentageGraphic = $graphicPercentage;
        }

        public function setTitles($graphic, $xayes = null, $yaxes = null)
        {
            $this->titleGraphic = $graphic;
            $this->titleXaxes = ($xayes !== null) ? '"' . $xayes . '"' : 'undefined';
            $this->titleYaxes = ($yaxes !== null) ? '"' . $yaxes . '"' : 'undefined';
        }
    }

    

?>