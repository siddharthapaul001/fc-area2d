<?php
    date_default_timezone_set("UTC");
    //Get random numbers
    $randomValueRetail1 = floor(rand(5,30));
    $randomValueRetail2 = floor(rand(5,30));
    $randomValueOnline1 = floor(rand(1,10));
    $randomValueOnline2 = floor(rand(1,10));
    //Times
    $time1 =  date('H:i:s', strtotime('-3 seconds'));
    $time2 =  date("H:i:s", time());
    //Output
   echo  "&label=".$time1.",".$time2."&value=".$randomValueRetail1.",".$randomValueRetail2."|".$randomValueOnline1.",".$randomValueOnline2."&displayValue=".$time1.",".$time2;
?>