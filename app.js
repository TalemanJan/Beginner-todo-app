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

var a=[12,1,3,14,2,15]

var b=a.some(my);

function my(age){

return age >=10 


}
document.write(b+"<br>")


var a=[12,1,3,14,2,15]

var b=a.every(my);

function my(age){

return age >=10 


}
document.write(b)

var b=Array.isArray(a)
document.write(b)


var b=a.lastIndexOf(15,4)
document.write(b)
