let x = [];
function add() {
  let input = document.getElementById("tal").value;
  x.push(input);

  let list = document.getElementById("list");
  let listItem = document.createElement("li");
  listItem.textContent = input;
  list.appendChild(listItem);

  document.getElementById("arrayLength").textContent = x.length;
}



function clearList() {
   var a= document.getElementById("list");
   a.innerHTML="";
    x= [];
   document.getElementById('arrayLength').textContent="0"


  }

