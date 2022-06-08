
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


function validatePrincipal() 
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0)
    {
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
    }
}

function compute() {

    validatePrincipal();
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100
    var year = new Date().getFullYear()+parseInt(years);

    if (principal <= 0)
    {
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
    }
    else {

    document.getElementById("result").innerHTML= 
    "If you deposit <mark>" + principal  + "</mark>" +
    "<br>at an interest of <mark> " + rate + "</mark>" +
    "<br>You will receive an amount of <mark> "+ amount + "</mark>" +
    "<br> in the year <mark> " + year + "</mark>";
    }

}
