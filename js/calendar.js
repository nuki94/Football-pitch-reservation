$(document).ready(function(){
	jQuery('#datetimepicker1').datetimepicker({
	 lang:'de',
	 i18n:{
	  de:{
	   months:[
		'January','February','March','April',
		'May','June','July','August',
		'September','October','November','December',
	   ],
	   dayOfWeek:[
		"Mo", "Tu", "We", "Th", 
		"Fr", "Sa", "Su",
	   ]
	  }
	 },
	 timepicker:false,
	 format:'d.m.Y'
	});
	jQuery('.datetimepicker2').datetimepicker({
	  datepicker:false,
	  format:'H:i'
	});
});