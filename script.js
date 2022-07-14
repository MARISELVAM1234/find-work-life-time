//year section
var yearSelectElement = document.getElementById("select-opt");
yearSelectElement.setAttribute("onchange" , "displayYear(this.value)") ;
var optionElement;
for ( var i = 1972; i <= 2006; i++) {
    optionElement = document.createElement("option");
    yearSelectElement.append(optionElement);
    optionElement.innerHTML = i;
    var b = parseInt( optionElement.innerHTML)
    console.log(typeof(b));
}
var valu;
function displayYear(arugYear){
   valu = arugYear
   console.log(valu)
}

//Month section
var monthSelectElement = document.getElementById("month-opt");
function monthFunc() {
    var date;
    console.log(monthSelectElement.value);
    var x = monthSelectElement.value;
    if (valu % 4 == 0 && monthSelectElement.value == "Feb") {
        date = 29;
    }
    else if (valu % 4 != 0 && monthSelectElement.value == "Feb") {
        date = 28;
    }
    else if (x == "Jan" || x == 'Mar' || x == "May" || x == "July" || x == "Aug" || x == "Oct" || x == "Dec"
    ) {
        date = 31 ;
    }
    else if (
        x == "April" ||  x == "Jun" ||  x == "Sep" || x == "Nov"
    ) {
        date = 30 ;
    }
    else if (monthSelectElement.value == "Month") {
        alert("Please select valid month");
    }

    //date section
    var dateSelectElement = document.getElementById("date-opt");
    dateSelectElement.innerHTML = "" ;
    var dateSelect;
    for (var i = 1; i <= date; i++) {
        dateSelect = document.createElement("option");
        dateSelectElement.append(dateSelect);
        dateSelect.innerText = i;
        console.log(i);
    }
}
