let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

// Type = HTMLCollection (Array) 
val = document.links; // HTMLCollection
val = document.links[0]; // HTMLCollection
val = document.links[0].id; // delete-item1
val = document.links[1].id; // delete-item2

// Type = DOMTokenList
// val = document.links[0].class;// undefined
val = document.links[0].className;// delete-item (string)
val = document.links[1].classList;// DOMTokenList (array)
val = document.links[1].classList[0];// delete-item

val = document.forms;// HTMLCollection
val = document.forms[0].id;// form
val = document.forms[0].className;// form
val = document.forms[0].classList;// DOMTokenList (array)
val = document.forms[0].classList[0];// form 
val = document.forms[0].action;
val = document.forms[0].method;// get 

val = document.images;// HTMLCollection
val = document.images[0].id;// loading
val = document.images[0].className;// loading
val = document.images[0].classList;// DOMTokenList (array)

val = document.scripts;// HTMLCollection
val = document.scripts[0].src;// file:///C:/Users/Acer/Documents/Custom%20Office%20Templates/Exercise%20regulary/Exercise%205/javascript.js
val = document.scripts[0].type;// text/javascript

// => Change Style (js change css) 

document.getElementById("tasktitle").style.color = "#fff";
document.getElementById("tasktitle").style.backgroundColor = "blue";
document.getElementById("tasktitle").style.padding = "10px";
document.getElementById("tasktitle").style.borderRadius = "10px";

// Change Content 

document.getElementById('tasktitle').textContent = "All my List";
document.getElementById('tasktitle').innerText = "All My God";
document.getElementById('tasktitle').innerHTML = "All My Time";

// Call by Class 

const lis = document.getElementsByClassName('list-group-item');
lis[1].style.color = "red";
lis[2].textContent = "How to read";
lis[2].innerText = "How to cook";
lis[2].innerHTML = `List Item 3 <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;
console.log(lis);


// console.log(val);