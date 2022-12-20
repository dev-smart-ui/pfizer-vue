<?php

$xml = file_get_contents('additional-info.xml');
$xmldata = simplexml_load_string($xml);
$jsondata = json_encode($xmldata);
$jsondata = json_decode($jsondata, true);

$xml_control_support = file_get_contents('control-support-info.xml');
$xml_control_support_data = simplexml_load_string($xml_control_support);
$json_control_support_data = json_encode($xml_control_support_data);
$control_support_data = json_decode($json_control_support_data, true);

switch ($_GET['action']) {

    case "additional_info0":

        $additional_id_1 = $jsondata['pages']['item']['additional-info']['aditionalList']['aditional1']['id'];
        $additional_title_1 = $jsondata['pages']['item']['additional-info']['aditionalList']['aditional1']['title'];
        $additional_content_1 = $jsondata['pages']['item']['additional-info']['aditional1'];
        $response = [
            'data' => [
                    "additional_id" => $additional_id_1,
                    "additional_title" => $additional_title_1,
                    "additional_content" => $additional_content_1,
                ],
        ];

        $data = json_encode($response, JSON_UNESCAPED_UNICODE);
        echo $data;
        break;

    case "additional_info1":

        $additional_id_2 = $jsondata['pages']['item']['additional-info']['aditionalList']['additional2']['id'];
        $additional_title_2 = $jsondata['pages']['item']['additional-info']['aditionalList']['additional2']['title'];
        $additional_content_2 = $jsondata['pages']['item']['additional-info']['additional2'];
        $response = [
            'data' => [
                "additional_id" => $additional_id_2,
                "additional_title" => $additional_title_2,
                "additional_content" => $additional_content_2,
            ],
        ];

        $data = json_encode($response, JSON_UNESCAPED_UNICODE);
        echo $data;
        break;

    case "additional_info2":

        $additional_id_3 = $jsondata['pages']['item']['additional-info']['aditionalList']['aditional3']['id'];
        $additional_title_3 = $jsondata['pages']['item']['additional-info']['aditionalList']['aditional3']['title'];
        $additional_content_3 = $jsondata['pages']['item']['additional-info']['additional3'];
        $response = [
            'data' => [
                "additional_id" => $additional_id_3,
                "additional_title" => $additional_title_3,
                "additional_content" => $additional_content_3,
            ],
        ];

        $data = json_encode($response, JSON_UNESCAPED_UNICODE);
        echo $data;
        break;

    case "additional_info3":

        $additional_id_4 = $jsondata['pages']['item']['additional-info']['aditionalList']['aditional4']['id'];
        $additional_title_4 = $jsondata['pages']['item']['additional-info']['aditionalList']['aditional4']['title'];
        $additional_content_4 = $jsondata['pages']['item']['additional-info']['additional4'];
        $response = [
            'data' => [
                "additional_id" => $additional_id_4,
                "additional_title" => $additional_title_4,
                "additional_content" => $additional_content_4,
            ],
        ];

        $data = json_encode($response, JSON_UNESCAPED_UNICODE);
        echo $data;
        break;
        

    default:
        $data = 0;
        echo $data;
        break;
}

