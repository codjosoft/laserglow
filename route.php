<?php

include 'email.php';

$func = $_GET['func'];
if(!isset($func)    || $func == ''){
    return;
}else {
    if(function_exists($func)){
        $func();
    } else{
        return "no such function";
    }
}