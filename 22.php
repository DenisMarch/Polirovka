<?php 
    function name($num){
        return 0 if(!$num);
        $num++;
        return $num;
    }
   echo name(22);
?>
