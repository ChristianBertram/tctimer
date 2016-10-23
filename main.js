var allDates = [
    /*{
      name: ...,
      grade7: boolean,
      grade8: boolean,
      grade9: boolean,
      dateFrom: javascript date like "7/31/2016 10:00 AM" (always 10:00 AM),
      dateTo: javascript date like "8/5/2016 03:00 PM" (always 03:00 PM),
      textDate: Danish date like "Fra 31. jul. 2016 til 5. aug. 2016"
      }*/
    {
	name: "TalentCamp Aarhus",
	grade7: false,
	grade8: true,
	grade9: false,
	eng: true,
	dan: false,
	mat: false,
	dateFrom: "11/10/2016 10:00 AM",
	dateTo: "11/14/2016 03:00 AM",
	textDate: "Fra 10. nov. 2016 til 14. nov. 2016"
    },
    {
	name: "TalentCamp Farum",
	grade7: false,
	grade8: true,
	grade9: true,
	eng: false,
	dan: false,
	mat: true,
	dateFrom: "11/11/2016 10:00 AM",
	dateTo: "11/15/2016 03:00 AM",
	textDate: "Fra 11. nov. 2016 til 15. nov. 2016"
    },
    {
	name: "TalentCamp Helsinge",
	grade7: false,
	grade8: true,
	grade9: false,
	eng: true,
	dan: false,
	mat: false,
	dateFrom: "11/11/2016 10:00 AM",
	dateTo: "11/15/2016 03:00 AM",
	textDate: "Fra 11. nov. 2016 til 15. nov. 2016"
    },
    {
	name: "Aspirantsamling (2)",
	grade7: false,
	grade8: false,
	grade9: false,
	eng: false,
	dan: false,
	mat: false,
	dateFrom: "12/16/2016 10:00 AM",
	dateTo: "12/19/2016 03:00 AM",
	textDate: "Fra 16. dec. 2016 til 19. dec. 2016"
    },
    {
	name: "TalentCamp Skanderborg",
	grade7: true,
	grade8: false,
	grade9: false,
	eng: false,
	dan: false,
	mat: true,
	dateFrom: "12/16/2016 10:00 AM",
	dateTo: "12/20/2016 03:00 AM",
	textDate: "Fra 16. dec. 2016 til 20. dec. 2016"
    },
    {
	name: "TalentCamp Hjørring (2)",
	grade7: true,
	grade8: false,
	grade9: false,
	eng: true,
	dan: true,
	mat: false,
	dateFrom: "12/16/2016 10:00 AM",
	dateTo: "12/20/2016 03:00 AM",
	textDate: "Fra 16. dec. 2016 til 20. dec. 2016"
    },
    {
	name: "TalentCamp Kolding",
	grade7: false,
	grade8: false,
	grade9: true,
	eng: true,
	dan: false,
	mat: false,
	dateFrom: "1/6/2017 10:00 AM",
	dateTo: "1/10/2017 03:00 AM",
	textDate: "Fra 6. jan. 2017 til 10. jan. 2017"
    },
    {
	name: "TalentWeek Farum",
	grade7: true,
	grade8: true,
	grade9: true,
	eng: false,
	dan: false,
	mat: true,
	dateFrom: "7/23/2017 10:00 AM",
	dateTo: "7/28/2017 03:00 AM",
	textDate: "Fra 23. jul. 2017 til 28. jul. 2017"
    },
    {
	name: "TalentWeek Hjørring",
	grade7: true,
	grade8: true,
	grade9: true,
	eng: true,
	dan: true,
	mat: false,
	dateFrom: "7/30/2017 10:00 AM",
	dateTo: "8/4/2017 03:00 AM",
	textDate: "Fra 30. jul. 2017 til 4. aug. 2017"
    }
];

window.onload = function() {
    var grade7 = document.getElementById("grade7");
    var grade8 = document.getElementById("grade8");
    var grade9 = document.getElementById("grade9");
    var eng = document.getElementById("eng");
    var dan = document.getElementById("dan");
    var mat = document.getElementById("mat");
    var more = document.getElementById("more");
    var camp = document.getElementById("camp");
    var countdown = document.getElementById("countdown");
    var forige = document.getElementById("forige");
    var naeste = document.getElementById("naeste");

    var selected = {
	grade7: true,
	grade8: true,
	grade9: true,
	eng: true,
	dan: true,
	mat: true
    };

    var currDates = [];
    var currCamp = 0;
    updateDates();
    updateCamp();
    updateTime();

    naeste.onclick = function() {
	if (currCamp + 1 < currDates.length) {
	    currCamp++;
	    updateCamp();
	}
    };

    forige.onclick = function() {
	if (currCamp - 1 >= 0) {
	    currCamp--;
	    updateCamp();
	}
    }

    grade7.onclick = function() {
	if (selected.grade7) {
	    selected.grade7 = false;
	    grade7.innerHTML = "[ ] 7.";
	}
	else {
	    selected.grade7 = true;
	    grade7.innerHTML = "[x] 7.";	    
	}
	currCamp = 0;
	updateDates();
	updateCamp();
    }

    grade8.onclick = function() {
	if (selected.grade8) {
	    selected.grade8 = false;
	    grade8.innerHTML = "[ ] 8.";
	}
	else {
	    selected.grade8 = true;
	    grade8.innerHTML = "[x] 8.";	    
	}
	currCamp = 0;
	updateDates();
	updateCamp();
    }

    grade9.onclick = function() {
	if (selected.grade9) {
	    selected.grade9 = false;
	    grade9.innerHTML = "[ ] 9.";
	}
	else {
	    selected.grade9 = true;
	    grade9.innerHTML = "[x] 9.";	    
	}
	currCamp = 0;
	updateDates();
	updateCamp();
    }

    eng.onclick = function() {
	if (selected.eng) {
	    selected.eng = false;
	    eng.innerHTML = "[ ] eng";
	}
	else {
	    selected.eng = true;
	    eng.innerHTML = "[x] eng";
	}
	currCamp = 0;
	updateDates();
	updateCamp();
    }

    dan.onclick = function() {
	if (selected.dan) {
	    selected.dan = false;
	    dan.innerHTML = "[ ] dan";
	}
	else {
	    selected.dan = true;
	    dan.innerHTML = "[x] dan";
	}
	currCamp = 0;
	updateDates();
	updateCamp();
    }

    mat.onclick = function() {
	if (selected.mat) {
	    selected.mat = false;
	    mat.innerHTML = "[ ] mat";
	}
	else {
	    selected.mat = true;
	    mat.innerHTML = "[x] mat";
	}
	currCamp = 0;
	updateDates();
	updateCamp();
    }
    
    function updateCamp() {
	if (currDates.length == 0) {
	    camp.innerHTML = "Ingen camps opfylder dine valg";
	    grade7.style.borderBottom = "none";
	    grade8.style.borderBottom = "none";
	    grade9.style.borderBottom = "none";
	    eng.style.borderBottom = "none";
	    dan.style.borderBottom = "none";
	    mat.style.borderBottom = "none";
	    forige.style.textDecoration = "none";
	    naeste.style.textDecoration = "none";
	    return;
	}
	more.style.textDecoration = "underline";
	camp.innerHTML = currDates[currCamp].name;

	naeste.style.visibility = "visible";
	forige.style.visibility = "visible";		
	if (currCamp == currDates.length - 1)
	    naeste.style.visibility = "hidden";
	if (currCamp == 0)
	    forige.style.visibility = "hidden";

	if (currDates[currCamp].grade7)
	    grade7.style.borderBottom = "1px solid black";
	else
	    grade7.style.borderBottom = "none";
	if (currDates[currCamp].grade8)
	    grade8.style.borderBottom = "1px solid black";
	else
	    grade8.style.borderBottom = "none";
	if (currDates[currCamp].grade9)
	    grade9.style.borderBottom = "1px solid black";
	else
	    grade9.style.borderBottom = "none";
	if (currDates[currCamp].eng)
	    eng.style.borderBottom = "1px solid black";
	else
	    eng.style.borderBottom = "none";
	if (currDates[currCamp].dan)
	    dan.style.borderBottom = "1px solid black";
	else
	    dan.style.borderBottom = "none";
	if (currDates[currCamp].mat)
	    mat.style.borderBottom = "1px solid black";
	else
	    mat.style.borderBottom = "none";
    }

    function updateDates() {
	currDates = [];
	for (i = 0; i < allDates.length; i++) {
	    if (
		(selected.grade7 && allDates[i].grade7) ||
		(selected.grade8 && allDates[i].grade8) ||
		(selected.grade9 && allDates[i].grade9)
	    ) {
		if (
		    (selected.eng && allDates[i].eng) ||
		    (selected.dan && allDates[i].dan) ||
		    (selected.mat && allDates[i].mat)
		) {
		    if (new Date(allDates[i].dateTo) > new Date())
			currDates.push(allDates[i]);
		}
	    }
	}
    }

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    function updateTime() {
	if (currDates.length == 0) {
	    countdown.innerHTML = "";
	}
	else {
	    if (new Date() > new Date(currDates[currCamp].dateFrom)) {
		countdown.innerHTML = "Igang nu!";
		return;
	    }
	    timeLeft = new Date(currDates[currCamp].dateFrom) - new Date();

	    countdown.innerHTML = Math.floor(timeLeft/_day) + " dage, ";
	    countdown.innerHTML += Math.floor((timeLeft%_day)/_hour) + " timer, ";
	    countdown.innerHTML += Math.floor((timeLeft%_hour)/_minute) + " minutter, ";
	    countdown.innerHTML += Math.floor((timeLeft%_minute)/_second) + " sekunder";
	}
	setTimeout(updateTime, 100);
    }
};
