//year section
var yearSelectElement = document.getElementById("select-opt");
yearSelectElement.setAttribute("onchange", "displayYear(this.value)");
var optionElement;
for (var i = 1972; i <= 2006; i++) {
    optionElement = document.createElement("option");
    yearSelectElement.append(optionElement);
    optionElement.innerHTML = i;
}
var yearElement;
function displayYear(arugYear) {
    yearElement = parseInt(arugYear);
    console.log("YEAR :", yearElement);
}

//Month section
var monthSelectElement = document.getElementById("month-opt");
var monthElement;
function monthFunc() {
    var date;
    monthElement = parseInt(monthSelectElement.value);
    console.log("MONTH :", monthElement);

    if (yearElement % 4 == 0 && monthElement == 1) {
        date = 29;
    }
    else if (yearElement % 4 != 0 && monthElement == 1) {
        date = 28;
    }
    else if (monthElement == 0 || monthElement == 2 || monthElement == 4 || monthElement == 6 || monthElement == 7 || monthElement == 9 || monthElement == 11
    ) {
        date = 31;
    }
    else if (
        monthElement == 3 || monthElement == 5 || monthElement == 8 || monthElement == 10
    ) {
        date = 30;
    }
    else if (monthSelectElement.value == "Month") {
        alert("Please select valid month");
    }

    //date section
    var dateSelectElement = document.getElementById("date-opt");
    dateSelectElement.setAttribute("onchange", "displayDate(this.value)");

    dateSelectElement.innerHTML = "";
    var dateSelect;
    for (var i = 0; i <= date; i++) {
        dateSelect = document.createElement("option");
        dateSelectElement.append(dateSelect);
        dateSelect.innerText = i;
        // console.log(i);
    }
}

var dateElement;
function displayDate(arugDate) {
    dateElement = parseInt(arugDate);
    console.log("DATE :", dateElement);
}


var retirementELement = document.getElementById("retrie-age");
retirementELement.setAttribute("onchange", "displayRetire (this.value)");
var retirement2;
for (var i = 45; i <= 60; i++) {
    retirement2 = document.createElement("option");
    retirementELement.append(retirement2);
    retirement2.innerHTML = i;
}
var retireAge
function displayRetire(arugRetire) {
    retireAge = parseInt(arugRetire);
    console.log("RETIREMENT AGE :", retireAge);
}


var goElement = document.getElementById("retirement-year");
var inputElement = document.getElementById("push-value");
var total;
var divElement = document.getElementById("year");
var retirementYear;
var d;
var currentDate;
var currentYear;
function goFunc() {
    total = yearElement + retireAge;
    console.log("RETIREMENT YEAR :", total);
    inputElement.value = total;
    d = new Date(yearElement, monthElement, dateElement);
    console.log(d)
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    console.log(currentYear);
    completeYear = currentYear - yearElement;
    console.log(completeYear);
    retirementYear = total - currentYear;
    console.log(retirementYear);
    divElement.innerHTML = "";
    for (i = 0; i < completeYear; i++) {
        ;
        var createHeader2 = document.createElement("h5");
        createHeader2.setAttribute("class", "year-box2");
        divElement.append(createHeader2);
    }
    for (var i = 0; i < retirementYear; i++) {
        var createHeader = document.createElement("h6");
        createHeader.setAttribute("class", "year-box");
        divElement.append(createHeader);
    }

}




