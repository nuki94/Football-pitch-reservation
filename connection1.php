<?php

	$username="root";
    $database="table";
    $server="localhost:3306"; 
    mysql_connect($server, $username) or die(mysql_error());
    mysql_select_db($database) or die(mysql_error());
	mysql_query("SET CHARACTER SET cp1251");
	
 ?>