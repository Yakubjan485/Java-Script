// !==   =	not equal value or not equal type
//  || =	logical or




let input = document.getElementById("result");
let numberOne = 0;
let globalStatus = "";
let globalStatusOriginal = "";



  function left () {

   // b//irinchi variant  


    input.value = document.getElementById("result").value.slice(0, -1)

 }


//ikkinchi variant
     // document.getElementById("result").value 
     // result.push("g");
     // 

     //uchinchi variant
     //document.getElementById("result").value
     //if (left === "result") {
       //   result.splice(1, 1);
     //} else {
        //  result = "";
     //}

 //}






//   function left() {
//      let back;
//       back=input.value;
//       if (ort.length>1){
//           input.value=back.substr(0,back.length-1);
//       }else if (back.length===0){
//           input.value=0;
//       }
//   }


function addNumber (number) {
     if (input.value === "0" && number !== "." || globalStatus.length > 0) {
          input.value = number;
          globalStatus = "";
     } else {
          input.value = input.value + number;
     }
}
function amal (status) {
     numberOne = input.value;
     globalStatus = status;
     globalStatusOriginal = status;
}
function equal () {
     let numberTwo = input.value;
     let result = 0;

     if (globalStatusOriginal === "add") {
          result = parseFloat (numberOne) + parseFloat (numberTwo);
     } else if (globalStatusOriginal === "subtract") {
          result = numberOne - numberTwo;
     } else if (globalStatusOriginal === "multiply") {
          result = numberOne * numberTwo;
     } else if (globalStatusOriginal === "divide") {
          result = numberOne / numberTwo;
     } else if (globalStatusOriginal === "pow") {

          result = Math.pow(numberOne, numberTwo);
     } else if (globalStatusOriginal === "degree") {
          result = Math.pow(numberOne, numberTwo);
     } else if (globalStatusOriginal === "sin") {
          result = input.value * (-1);
     }
     //  else if (globalStatusOriginal === "status") {
     //      document.getElementById("result").value.slice(1,4);
     // }

     input.value = result;
}
function clearScreen () {
     globalStatus = "";
     globalStatusOriginal = "";
     input.value = 0;
     numberOne = 0;
}





function switchOn () {
     document.getElementById("bulb").src = "img//pic_bulbon.gif"
}


function switchOff () {
     document.getElementById("bulb").src = "img/pic_bulboff.gif"
  }


   console.log(document.getElementById("bulb").src);


 


 