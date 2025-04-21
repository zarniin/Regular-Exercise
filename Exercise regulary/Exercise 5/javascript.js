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

// Call by ClassName 

	const lis = document.getElementsByClassName('list-group-item');
	lis[1].style.color = "red";
	lis[2].textContent = "How to read";
	lis[2].innerText = "How to cook";
	lis[2].innerHTML = `List Item 3 <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;
	// console.log(lis);

// Call by TagName

	const litags = document.getElementsByTagName('li');
	console.log(litags);

	// console.log(litags[3]);
	// litags[4].style.color = "blue";
	// litags[4].textContent = "How to cook";
	// litags[4].innerHTML = `How to go <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

// Query Selector (ID / CLASS / TAG) 

	// console.log(document.querySelector('#tasktitle'));
	// console.log(document.querySelector('.card-content'));
	// console.log(document.querySelector('h3'));
	// console.log(document.querySelector('ul li'));// only first 
	// console.log(document.querySelector('ul li.list-group-item'));
	// console.log(document.querySelector('ul li:first-child'));
	// console.log(document.querySelector('ul li:last-child'));
	// document.querySelector('ul li.list-group-item:nth-child(even)').style.backgroundColor = "silver";
	// document.querySelector('ul li.list-group-item:nth-child(odd)').style.backgroundColor = "gold";

// Query Selector All (ID / CLASS / TAG) TYPE = [NodeList]

	// console.log(document.querySelectorAll('#tasktitle'));
	// console.log(document.querySelectorAll('.card-content'));
	// console.log(document.querySelectorAll('h3'));

	const itms = document.querySelectorAll('li');

	console.log(itms);
	console.log(itms[3]);

// HTMLCOLLECTION NOT forEach Loop  Array.form() 

	const liitems = document.getElementsByTagName('li');

	let arritms = Array.from(liitems);
	console.log(arritms);


	// arritms.forEach(function(arritm,idx){
	// 	// console.log(arritm);

	// 	// arritm.textContent = "Hello";

	// 	// arritm.textContent = `${idx} Hello`;

	// 	arritm.textContent = `${++idx}. Hello`;
	// });

// NodeList forEach Loop  

	const liitms = document.querySelectorAll('li');
	// console.log(liitms);

	// liitms.forEach(function(liitm,idx){
	// 	// console.log(liitm);

	// 	// liitm.textContent = "Hello";

	// 	// liitm.textContent = `${idx} Hello`;

	// 	liitm.textContent = `${++idx}. Hello`;
	// });

	const lievens = document.querySelectorAll('li:nth-child(even)');
	// console.log(lievens);

	lievens.forEach(function(lieven){
		// console.log(lieven);

		lieven.style.backgroundColor = "silver"
	});

	const liodds = document.querySelectorAll('li:nth-child(odd)');
	// console.log(liodds);

	for(var odd = 0; odd < liodds.length;odd++){
		// console.log(liodds[odd]);

		liodds[odd].style.backgroundColor = "gold";
	}

// Parent to Children 

	let chl;

	let getli = document.querySelector('li');
		// getli = document.getElementsByTagName('li');
		// getli = document.getElementsByClassName('list-group-item');

	let getul = document.querySelector('.list-group');
		// getul = document.querySelector('ul.list-group');

	chl = getul.children;// HTMCOLLECTIN 
	console.log(chl[2]);
	chl[2].textContent = "How to go";
	chl[2].style.color = "steelblue";
	chl[2].innerHTML = 'List Item 3 <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

// Child Element Count 

	// chl = getul.children.length;
	chl = getul.children[0];
	chl = getul.children[0].childElementCount;// 1 a tags
	chl = getul.children[0].children[0].childElementCount;// 1 i tags
	console.log(chl);// 5

// Parent to Children to Children 

	chl = getul.children;
	chl = getul.children[0];// list-item1 
	chl = getul.children[0].children;// HTMLCOLLECTION
	chl = getul.children[0].children[0];// a
	chl = getul.children[0].children[0].children;// HTMLCOLLECTION
	chl = getul.children[0].children[0].children[0];// i

	console.log(chl);

// Children to Parent

	const getfirstli = document.querySelector('li.list-group-item');

						// ul 
	getul = getfirstli.parentElement;
	// getul = getfirstli.parentNode;
									// card-action
	getul = getfirstli.parentElement.parentElement;
	// getul = getfirstli.parentNode.parentNode;
													// card
	getul = getfirstli.parentElement.parentElement.parentElement;
	// getul = getfirstli.parentNode.parentNode.parentNode;
	
	console.log(getul);

// Sibling

	let getsibling = document.querySelector('li.list-group-item');

						// list-item 2
	getul = getsibling.nextElementSibling;
									     // list-item 3
	getul = getsibling.nextElementSibling.nextElementSibling;
													        // list-item 4
	getul = getsibling.nextElementSibling.nextElementSibling.nextElementSibling;
																				// list-item 5
	getul = getsibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
	
	
	console.log(getul);

// Previous Element Sibling

						// list-item 2
	getul = getsibling.nextElementSibling;
									     // list-item 1
	getul = getsibling.nextElementSibling.previousElementSibling;
													        // list-item 2
	getul = getsibling.nextElementSibling.nextElementSibling.previousElementSibling;
																				// list-item 3
	getul = getsibling.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling;
	
	console.log(getul);

// Create Element 

	const newli = document.createElement('li');

	// Add ID 
	newli.id = "new-item";

	// Add Class
	newli.className = "list-group-item";
	newli.className = "delete-me";
	newli.className = "list-group-item delete-me";

	// Add Method 
	newli.classList.add('delete-i');
	newli.classList.add('delete-you');
	newli.classList.add('delete-we','delete-our','delete-your');

	// Add Attribute 
	// setAttribue(quafiledname,value)
	newli.setAttribute('title','new-item');

	// newli.textContent = "hi";
	// newli.textContent = "hay";
	// newli.innerHTML = `List Item 6 <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

	// Add Create Text Node
	// Method 1
	// const newtext = document.createTextNode('Hello World');
	// console.log(newtext);

	// Method 2 
	newli.appendChild(document.createTextNode('List Item 6'));

	// a tag
	const newlink = document.createElement('a');

	// ADD href 
	newlink.href = "#";

	// ADD ID 
	newlink.id = "delete-item6";

	// ADD Class 
	// newlink.className = "delete-item";
	newlink.classList.add('delete-item');

	newli.appendChild(newlink);

	// i tag 
	const newitalic = document.createElement('i');

	// Add Class 
	// newitalic.className = "fas fa-trash-alt";
	newitalic.classList.add('fas','fa-trash-alt');

	newlink.appendChild(newitalic);

	// Method 1 
	// const ul = document.querySelector('ul');
	// ul.appendChild(newli);
	// console.log(ul);

	document.querySelector('ul').appendChild(newli);


// Replace Element 
	// replaceChild(old,new); 

	const newtitleh2 = document.createElement('h2');

	// Add ID 
	newtitleh2.id = "tasktitle";

	const getcaption = document.createTextNode('All my List');
	// console.log(getcaption);
	newtitleh2.appendChild(getcaption);

	console.log(newtitleh2);

	const oldtitleh4 = document.querySelector('h4');

	const getcardaction = document.querySelector('.card-action');
	
	console.log(oldtitleh4);

	getcardaction.replaceChild(newtitleh2,oldtitleh4);
	console.log(getcardaction);

// Remove (self) 

	const getlis = document.querySelectorAll('li');
	// getlis[0].remove();
	// getlis[3].remove();
	// getlis[5].remove();

	console.log(getlis);

// RemoveChild 

	const getfirstul = document.querySelector('ul');

	// getfirstul.removeChild(getlis[0]);
	// getfirstul.removeChild(getfirstul.children[0]);
	// getfirstul.removeChild(getlis[3]);
	console.log(getfirstul);

// Add Attribute 

	const firstli = document.querySelector('li');
	const getfirstchild = firstli.children[0];
	console.log(getfirstchild);
	console.log(getfirstchild.href);// route #
	console.log(getfirstchild.id);// delete-item1
	console.log(getfirstchild.className);// delete-item
	console.log(getfirstchild.getAttribute('href'));// # 
	console.log(getfirstchild.title);// new-item
	console.log(getfirstchild.getAttribute('title'));// new-item
	console.log(getfirstchild.alt);// undefined
	console.log(getfirstchild.getAttribute('alt'));// delete
	console.log(getfirstchild.hay);// undefined
	console.log(getfirstchild.getAttribute('hay'));// hello

	// getfirstchild.href = "https://google.com";
	// getfirstchild.setAttribute('href','https://telegram.me');
	// console.log(getfirstchild);

	// hasAttribute  Boolean (True / False)
	const hascar = getfirstchild.hasAttribute('href');
	console.log(hascar);// true


// ClassName Vs ClassList 

	console.log(getfirstchild.className);// delete-item

	// ClassName 
	getfirstchild.className = "delete-myself";
	getfirstchild.className = "delete-item delete-myself";
	getfirstchild.className = "delete-item delete-myself delete-ourselves";

	// ClassList 
	getfirstchild.classList.add('delete-myself');
	getfirstchild.classList.add('delete-ourselves');

	// getfirstchild.classList.add('delete-item');
	// getfirstchild.classList.add('delete-myself');
	// getfirstchild.classList.add('delete-ourselves');
	console.log(getfirstchild);


// Check value ClassName vs ClassLIst

	// ClassName 
	if(getfirstchild.className === "delete-item delete-myself delete-ourselves"){
		console.log("yes");
	}else{
		console.log("no");
	}

	// ClassList

	if(getfirstchild.classList.contains('delete-myself')){
		console.log("yes");
	}else{
		console.log("no");
	}









