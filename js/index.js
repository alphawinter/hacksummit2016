/*JAVASCRIPT*/

function createDropDownDays()
{
	var minDays = 182,
    maxDays = 364,
    select = document.getElementById('selectDays');

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
    select = document.getElementById('selectMonths');

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
    select = document.getElementById('selectYears');

	for (var i = minYears; i <= maxYears; i++)
	{
   		var op = document.createElement('option');
  	  	op.value = i;
  	  	op.innerHTML = i;
   	 	select.appendChild(op);
	}
}