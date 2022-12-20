<?php

$xml = file_get_contents('additional-info.xml');

$xmldata = simplexml_load_string($xml);

$jsondata = json_encode($xmldata);

$jsondata = json_decode($jsondata, true);

//$additional_title_1 = $jsondata['pages']['item']['aditionalList'];
//print_r($additional_title_1);

//var_dump($jsondata['pages']['item']['additional-info']['aditionalList']['aditional1']['id']);


// control-support-info
$xml_control_support = file_get_contents('control-support-info.xml');
$xml_control_support_data = simplexml_load_string($xml_control_support);
$json_control_support_data = json_encode($xml_control_support_data);
$control_support_data = json_decode($json_control_support_data, true);

$control_support_id_1 = $control_support_data['pages']['item']['control-support-info']['infoList']['info1']['id'];
$control_support_title_1 = $control_support_data['pages']['item']['control-support-info']['infoList']['info1']['title'];
$control_support_content_1 = $control_support_data['pages']['item']['control-support-info']['info1'];
var_dump($control_support_data['pages']['item']['control-support-info']['info1']);