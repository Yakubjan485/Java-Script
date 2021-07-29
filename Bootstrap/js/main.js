


let data = [];

function showCard() {

     document.getElementById("add-card").classList.toggle("d-none");
// document.getElementById("add-card").classList.remove("d-none");
}
function addBoard() {
     let title = document.getElementById("board-title").value;

     if(title.length > 0) {
          let newBoard = {
               // title: title,
               title,
               tasks: []
          };
     
          data.push(newBoard);
     
         drawPage();
     }
      document.getElementById("board-title").value = ""; 

}


function addTask(index) {

  let taskTitle = document.getElementById("task-title" + index).value;

  if (taskTitle.length > 0) {
     data[index].tasks.push(taskTitle);
     drawPage();
  }
 
}

function drawPage() {
     let result = "";

     for (let i = 0; i < data.length; i++){

          let result2 = "";

          for(let j = 0; j < data[i].tasks.length; j++) {
               result2 += "<div class='task'><span>"+ data[i].tasks[j] +"</span> </div>"
          }
          // bunisi ohirida bodyga chiqish uchun


          result +=
              "<div class='col-lg-4 col-12 mb-3'>" +
                  "<div class='card'>" +
                  "<div class='card-header'><h5>"+ data[i].title +"</h5></div>" +
                  "<div class='card-body'>"+ result2 +"</div>" +
                  "<div class='card-footer'>" +
                      "<textarea class='form-control' id='task-title"+ i +"' placeholder='Biror nima kiriting'></textarea>" +
                      "<button type='button' class='btn btn-success mt-3 ml-auto d-block' onclick='addTask("+ i +")'>Qo'shish</button>" +
                  "</div>" +
                  "</div>" +
              "</div>"
      }

     document.getElementById("result").innerHTML = result;
}