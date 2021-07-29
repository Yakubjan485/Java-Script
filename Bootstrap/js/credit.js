

function calc(){
     let creditSum = document.getElementById("kreditSum").value;
     let yearPercent = document.getElementById("yearPercent").value;
     let year = document.getElementById("year").value;
     let startPaymentPercent = document.getElementById("startPaymentPercent").value;
     let yearMuddat = document.getElementById("yearMuddat").value;
     let month = document.getElementById("month").value;
 
     let startPayment = creditSum * startPaymentPercent / 100;
     document.getElementById("startPayment").innerHTML = startPayment;
 
     let givenSum = creditSum - startPayment;
     document.getElementById("givenPayment").innerHTML = givenSum;
 
     let monthPayment = givenSum / (yearMuddat * 12);
     document.getElementById("monthPayment").innerHTML = monthPayment.toFixed(1);
 
     let rows = "";
 
 
     for (let i = 0; i < yearMuddat * 12; i++){
 
         let percentPayment = givenSum * (yearPercent / 12) /100;
 
 
        rows += "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td></td>" +
            "<td></td>" +
            "<td>"+ givenSum.toFixed(1) +"</td>" +
            "<td>"+ monthPayment.toFixed(1) +"</td>" +
            "<td>"+ percentPayment.toFixed(1) +"</td>" +
            "<td>"+ (monthPayment + percentPayment).toFixed(1) +"</td>" +
            "</tr>";
 
         givenSum = givenSum - monthPayment;
     }
 
 
 
 
     document.getElementById("result").innerHTML = rows;
 
 }