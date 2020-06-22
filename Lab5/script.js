$(document).ready(function() {
	//tooltip tiré de https://www.w3schools.com/bootstrap/bootstrap_tooltip.asp
	$('[data-toggle="tooltip"]').tooltip();	
	
	$("#datetimepicker").focusout(verifyDateTime);
	
	//fonction du datepicker tirée de https://xdsoft.net/jqplugins/datetimepicker/
	$("#datetimepicker").datetimepicker({
		allowTimes:["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
		"13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
		disabledWeekDays:[0, 6]
	});
	
	$("#inName").focusout(function()
	{
		var input = $("#inName");
		var errorOut = $("#errName");
		if (input.val() == "")
		{
			input.css("border-color", "red");
			errorOut.css("display", "inline");
		}
		else
		{
			input.css("border-color", "black");
			errorOut.css("display", "none");
		}
	});
	
	//fonction pour tester des RegEx tiré de https://www.w3schools.com/jsref/jsref_regexp_test.asp
	
	$("#inEmail").focusout( function() {
		var input = $("#inEmail");
		var errorOut = $("#errEmail");
		if ((new RegExp("^[A-Za-z0-9.]+@[A-Za-z0-9]+[.][A-Za-z]+")).test(input.val()))
		{
			input.css("border-color", "black");
			errorOut.css("display", "none");
		}
		else
		{
			input.css("border-color", "red");
			errorOut.css("display", "inline");
		}
	});
	
	$("#inTel").focusout( function() {
		var input = $("#inTel");
		var errorOut = $("#errTel");
		if ((new RegExp("^\d{3}-\d{3}-\d{4}$")).test(input.val()))
		{
			input.css("border-color", "black");
			errorOut.css("display", "none");
		}
		else
		{
			input.css("border-color", "red");
			errorOut.css("display", "inline");
		}
	});
	
	$("#inCard").focusout( function() {
		var input = $("#inCard");
		var errorOut = $("#errCard");
		if ((new RegExp("^\d{4} \d{4} \d{4} \d{4}$")).test(input.val()))
		{
			input.css("border-color", "black");
			errorOut.css("display", "none");
		}
		else
		{
			input.css("border-color", "red");
			errorOut.css("display", "inline");
		}
	});
	
	$("#selectExpert").change(function(){
		var result = $("#selectExpert").val();
		var dtp = $("#datetimepicker");
		
		if (result == "expBob")
		{
			dtp.datetimepicker('setOptions', {disabledWeekDays:[0, 1, 3, 4, 6]});
		}
		else if (result == "expJean")
		{
			dtp.datetimepicker('setOptions', {disabledWeekDays:[0, 2, 4, 6]});
		}
		else if (result == "expCharles")
		{
			dtp.datetimepicker('setOptions', {disabledWeekDays:[0, 2, 3, 6]});
		}
		else
		{
			dtp.datetimepicker('setOptions', {disabledWeekDays:[0, 6]});
		}
		
		verifyDateTime();
	});
});

function verifyDateTime()
{
	var dtp = $("#datetimepicker");
	var errorOut = $("#errTime");
	
	if (dtp.val() == "")
	{
		dtp.css("border-color", "red");
		errorOut.css("display", "inline");
		errorOut.html("Veuillez entrer un temps de rendez-vous.");
		return;
	}
	
	var choice = dtp.datetimepicker("getValue");
	var year = choice.getFullYear();
	if (year < 2020)
	{
		dtp.css("border-color", "red");
		errorOut.css("display", "inline");
		errorOut.html("Les rendez-vous ne peuvent pas être pris avant 2020.");
		return;
	}
	
	var weekDay = choice.getDay();
	if (weekDay == 0 || weekDay == 6)
	{
		dtp.css("border-color", "red");
		errorOut.css("display", "inline");
		errorOut.html("La boutique est fermée la fin de semaine.");
		return;
	}
	
	var hour = choice.getHours()
	if (hour < 8 || hour > 18)
	{
		dtp.css("border-color", "red");
		errorOut.css("display", "inline");
		errorOut.html("La boutique n'est ouverte que de 8:00 à 18:00.");
		return;
	}
	
	var minute = choice.getMinutes()
	if (minute != 0 && minute != 30)
	{
		dtp.css("border-color", "red");
		errorOut.css("display", "inline");
		errorOut.html("Les rendez-vous ne peuvent être pris qu'au trente minutes.");
		return;
	}
	
	var exp = $("#selectExpert").val();
	if (exp == "expBob" && (weekDay == 1 || weekDay == 3 || weekDay == 4))
	{
		dtp.css("border-color", "red");
		errorOut.css("display", "inline");
		errorOut.html("Bob ne travaille pas cette journée.");
		return;
	}
	if (exp == "expJean" && (weekDay == 2 || weekDay == 4))
	{
		dtp.css("border-color", "red");
		errorOut.css("display", "inline");
		errorOut.html("Jean ne travaille pas cette journée.");
		return;
	}
	if (exp == "expCharles" && (weekDay == 2|| weekDay == 3))
	{
		dtp.css("border-color", "red");
		errorOut.css("display", "inline");
		errorOut.html("Charles ne travaille pas cette journée.");
		return;
	}
	
	dtp.css("border-color", "black");
	errorOut.css("display", "none");
}