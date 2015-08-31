$(document).ready(function(){
	$('.smallimage').hover(function(){
			var newsrc = $(this).attr('src');
			var lastChar = newsrc.substr(newsrc.length - 5); // => "1"
			var image1 = "gallery/Simeonovo/image";
			var image2 = lastChar[0];
			var image3 = ".jpg";
			var res = image1.concat(image2,image3);
			$('#zoom_01').attr('src', res);
			});
		   
	$('.smallimage2').hover(function(){
			var newsrc = $(this).attr('src');
			var lastChar = newsrc.substr(newsrc.length - 5); // => "1"
			var image1 = "gallery/Lozenets/image";
			var image2 = lastChar[0];
			var image3 = ".jpg";
			var res = image1.concat(image2,image3);
			$('#zoom_01').attr('src', res);
			});
	$('.smallimage3').hover(function(){
			var newsrc = $(this).attr('src');
			var lastChar = newsrc.substr(newsrc.length - 5); // => "1"
			var image1 = "gallery/Baroco/image";
			var image2 = lastChar[0];
			var image3 = ".jpg";
			var res = image1.concat(image2,image3);
			$('#zoom_01').attr('src', res);
			});
	$('.smallimage4 ').hover(function(){
			var newsrc = $(this).attr('src');
			var lastChar = newsrc.substr(newsrc.length - 5); // => "1"
			var image1 = "gallery/WinSport/image";
			var image2 = lastChar[0];
			var image3 = ".jpg";
			var res = image1.concat(image2,image3);
			$('#zoom_01').attr('src', res);
		});
});

function submitform() {
	var name = document.forms["myForm"]["name"].value;
	var date = document.forms["myForm"]["date"].value;
	var hour_from = document.forms["myForm"]["hour_from"].value;
	var hour_to = document.forms["myForm"]["hour_to"].value;
	if(name == null || name == ""){
		alert('Не сте въвели име!');
		return false;
	}
	else if(date == null || date == ""){
		alert("Не сте въвели дата!");
		return false;
	}
	else if(hour_from == null || hour_from == ""){
		alert("Не сте въвели час!");
		return false;
	}
	else if(hour_to == null || hour_to == ""){
		alert("Не сте въвели час!");
		return false;
	}
	else{
		alert('Успешна резервация!');
	}
	$.ajax({
		type: "POST",
		url: "ajax.php",
		data: {name: name, date: date, hour_from: hour_from, hour_to: hour_to}
	}).done(function (result) {
		$("#msg").html(result);
	});
	return false;
}

function contactDetails(){
	if(document.getElementById("name").value == ""){
		alert('Не сте въвели име!');
	}
	else if(document.getElementById("email").value == ""){
		alert("Не сте въвели e-mail!");
	}
	else if(document.getElementById("text").value == ""){
		alert("Не сте въвели съобщение!");
	}
	else{
		alert('Съобщението получено! ');
	}

}