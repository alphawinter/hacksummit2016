/*JAVASCRIPT*/

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
	var type = document.getElementById('timeType');
	var choice = type.options[type.selectedIndex].value;
	var dropdown = document.getElementById('selectType');
	var num = dropdown.options[dropdown.selectedIndex].value;

	if(choice == "days")
	{

		calculateAll(totalDays);
	}
	else if(choice == "months")
	{
		totalDays = num*30.0;
		calculateAll(totalDays);
	}
	else if(choice == "years")
	{
		totalDays = num*365;
		calculateAll(totalDays);
	}
}

function calculateAll(totalDays)
{
	
}