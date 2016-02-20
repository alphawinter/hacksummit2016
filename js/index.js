/*JAVASCRIPT*/
window.onload=createDropDownDays;
function callCreateDropDown()
{
	var type = document.getElementById('timeType');
	var choice = type.options[type.selectedIndex].value;

	if(choice == "days")
	{
		createDropDownDays();
	}
	else if(choice == "months")
	{
		createDropDownMonths();
	}
	else if(choice =="years")
	{
		createDropDownYears();
	}
}


function createDropDownDays()
{
	var minDays = 182,
    maxDays = 364,
    select = document.getElementById('selectType');

	for (var i = minDays; i<=maxDays; i++)
	{
    	var op = document.createElement('option');
    	op.value = i;
    	op.innerHTML = i;
    	select.appendChild(op);
	}
}

function createDropDownMonths()
{
	var minMonths = 6,
    maxMonths = 11,
    select = document.getElementById('selectType');

	for (var i = minMonths; i <= maxMonths; i++)
	{
   		var op = document.createElement('option');
  	  	op.value = i;
  	  	op.innerHTML = i;
   	 	select.appendChild(op);
	}
}

function createDropDownYears()
{
	var minYears = 1,
    maxYears = 99,
    select = document.getElementById('selectType');

	for (var i = minYears; i <= maxYears; i++)
	{
   		var op = document.createElement('option');
  	  	op.value = i;
  	  	op.innerHTML = i;
   	 	select.appendChild(op);
	}
}

function clearAllOptions()
{
	document.getElementById('selectType').options.length = 0;
}

function calculate()
{
	var choice = document.getElementById('ownChoice');
	var own = choice.options[choice.selectedIndex].value;
	var totalDays = calculateTotalDays();
	var ipChamps = 499500,
		ipRunes = 67240,
		pages = 50400,
		ip;

	if(own == "own-champs")
	{
		ip = ipChamps;
	}
	else if(own == "own-runes")
	{
		ip = ipRunes;
	}
	else if(own == "own-runepages")
	{
		ip = ipRunes+pages;
	}
	else if(own == "own-all")
	{
		ip = ipChamps+ipRunes+pages;
	}
	calculateAll(totalDays, ip);
}

function calculateTotalDays()
{
	var type = document.getElementById('timeType');
	var choice = type.options[type.selectedIndex].value;
	var dropdown = document.getElementById('selectType');
	var num = dropdown.options[dropdown.selectedIndex].value;
	var totalDays;

	if(choice == "days")
	{
		totalDays = num;
	}
	else if(choice == "months")
	{
		totalDays = num*30.0;
	}
	else if(choice == "years")
	{
		totalDays = num*365.0;
	}

	return totalDays;
}

function calculateAll(totalDays, ip)
{
	/*calculate losses only*/
	var losses = (ip/65.175)/totalDays;
	/*calculate wins only*/
	var wins = (ip/98.92)/totalDays;
	/*calculate average*/
	var average = (ip/82.0475)/totalDays;

	printToScreen(losses, wins, average);
}

function printToScreen(losses, wins, average)
{
	document.getElementById('losses1').innerHTML = "If you lose all games (65.175 IP per 35 minute game), it would take ";
	document.getElementById('losses2').innerHTML = losses.toFixed(0);
	document.getElementById('losses3').innerHTML = " games per day.";

	document.getElementById('wins1').innerHTML = "If you win all games (98.92 IP per 35 minute game), it would take ";
	document.getElementById('wins2').innerHTML = wins.toFixed(0);
	document.getElementById('wins3').innerHTML = " games per day.";

	document.getElementById('avg1').innerHTML = "On average, with wins/losses equal (82.0475 IP per 35 minute game), it would take ";
	document.getElementById('avg2').innerHTML = average.toFixed(0);
	document.getElementById('avg3').innerHTML = " games per day.";
}