<?php
date_default_timezone_set("America/New_York");
echo '5454';
$res = array('error' => false);
$action = 'read';
$host = $_SERVER['HTTP_HOST'];
$protocol = isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS']) ? 'https' : 'http';
if(isset($_GET['action'])){
	$action = $_GET['action'];
}


if($action == 'tykjourney'){
	$date = date("m/d/Y h:i:s A"); 
	$event = $_POST['event'];	
	$button_name = $_POST['button_name'];	
	$action = $_POST['action'];	
	$value = $_POST['value'];	
	 
		
	$filename = 'analytics.txt';
	$current = file_get_contents($filename);
	$str = $date . "; event: " . $event . "; button_name: " . $button_name . "; action: " . $action . "; value: " . $value .  "\n";
	$current .= $str;
	file_put_contents($filename, $current);
}





if($action == 'tykscreenview'){
	$date = date("m/d/Y h:i:s A"); 
	$event = $_POST['event'];	
	$appName = $_POST['app_name'];	
	$screenName = $_POST['screen_name'];		
	 
		
	$filename = 'analytics.txt';
	$current = file_get_contents($filename);
	$str = $date . "; event: " . $event . "; app_name: " . $appName . "; screen_name: " . $screenName . "\n";
	$current .= $str;
	file_put_contents($filename, $current);
}

if($action == 'tykanswers'){
	$date = date("m/d/Y h:i:s A"); 
	$event = $_POST['event'];
	$action = $_POST['action'];	
	$questionName = $_POST['question_name'];	
	$answerType = $_POST['answer_type'];	
	$answerUnit = $_POST['answer_unit'];	
	$answer_correct_value = $_POST['answer_correct_value'];	
	$answerInputValue = $_POST['answer_input_value'];	
		
	
	$filename = 'analytics.txt';
	$current = file_get_contents($filename);
	$str = $date . "; event: " . $event . "; action: " . $action . "; question_name: " . $questionName . "; answer_type: " . $answerType . "; answer_unit: " . $answerUnit . "; answer_correct_value: " . $answer_correct_value . "; answer_input_value: " . $answerInputValue . "\n";
	$current .= $str;
	file_put_contents($filename, $current);
}

?>