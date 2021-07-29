
// let input = document.getElementById("result")
// let globalStatus = ""

// function number (item) {
//      if (input.value === "0" && item !== "." || globalStatus.length > 0) {
//           input.value = item;
//           globalStatus = "";
//      } else {
//           input.value = input.value + item;
//      }
// }




// let input = document.getElementById("result");
// let numberOne = 0;
// let globalStatus = ""
// let globalStatusOriginal = ""

// function number(item) {
//      if(input.value === "0" && item !== "." || globalStatus.length > 0) {
//           input.value = item;
//           globalStatus = ""
//      } else {
//           input.value = input.value + item
//      }
// }

// function amal(status) {
//      globalStatusOriginal = status;
//      globalStatus = status;
//      numberOne = input.value
// } 

// function equal() {
//      let numberTwo = input.value

//      let result = 0;

//      if(globalStatusOriginal === "add") {
//           result = parseFloat (numberOne) + parseFloat (numberTwo)
//      } else if (globalStatusOriginal === "minus") {
//           result = parseFloat (numberOne) - parseFloat(numberTwo)
//      } else if (globalStatusOriginal === "multiply") {
//           result = parseFloat (numberOne) * parseFloat(numberTwo)
//      } else if (globalStatusOriginal === "divide") {
//           result = parseFloat (numberOne) / parseFloat(numberTwo)
//      }

//      input.value = result
// }

// function clearScreen() {
//      numberOne = 0
//      numberTwo = 0
//      globalStatus = ""
//      globalStatusOriginal = ""
//      input.value = 0
// }




function showCard() {
     let addCard = document.getElementById("add-card")

     addCard.classList.toggle('d-none')
}
function addBoard() {
     let boardTitle = document.getElementById("board-title").value;


}