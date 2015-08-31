<?php
include('connection1.php');
error_reporting(E_ALL & E_NOTICE & E_STRICT);

$error = FALSE;
$taken = FALSE;

//проверка дали името е set-нато и дали е с повече от 2 символа
if(isset($_REQUEST['name']) && strlen($_REQUEST['name'])>2) {
 $name = htmlspecialchars($_REQUEST['name']);
} else {
 $error = TRUE;
}
//проверка дали датата е set-ната и дали не е празно полето
if(isset($_REQUEST['date']) && $_REQUEST['date'] != '') {
 $date = htmlspecialchars($_REQUEST['date']);
 $sql_where .= " AND date = ".mysql_real_escape_string($date)."";
} else {
 $error = TRUE;
}
//проверка дали часа е set-ната и дали не е празно полето
if(isset($_REQUEST['hour_from']) && $_REQUEST['hour_from'] != '') {
 $hour_from = htmlspecialchars($_REQUEST['hour_from']);
 $sql_where2 .= " AND hour_from < ".mysql_real_escape_string($hour_from)." AND  hour_to > ".mysql_real_escape_string($hour_from)."";
} else {
 $error = TRUE;
}
//проверка дали часа е set-ната и дали не е празно полето
if(isset($_REQUEST['hour_to']) && $_REQUEST['hour_to'] != '') {
 $hour_to = htmlspecialchars($_REQUEST['hour_to']);
 $sql_where2 .= " AND hour_to < ".mysql_real_escape_string($hour_to)." AND hour_from > ".mysql_real_escape_string($hour_to)."";
} else {
 $error = TRUE;
}
//проверка дали началния час е по-голям от крайния час
if($_REQUEST['hour_from'] > $_REQUEST['hour_to']) {
 $error = TRUE;
}

//дали има така дата в резервацията
$check = mysql_query("SELECT * FROM reservations WHERE 1=1 ".$sql_where."  ");
if($check) {
	//ако има такава дата да провери дали има такива запазени часове
 $check_hours = mysql_query("SELECT * FROM reservations WHERE 1=1 ".$sql_where." ".$sql_where2." ");
 if($check_hours) {
  $taken = TRUE;
 } else {
	 //проверка дали има грешки или дали е зает часа
  if(!$error || !$taken) {
	  //ако няма грешки записва резервацията
  $q = mysql_query("INSERT INTO 'reservations' ('user_name','date','hour_from','hour_to')
      VALUES ('".$name."',".$date.", ".$hour_from.", ".$hour_to.")");
  if($q) {
	  //ако се запише да се изпише текста
   echo 'Успешна резервация!';
  } else {
   die();
  }
  } else {
   die();
  }
 }
}
?>