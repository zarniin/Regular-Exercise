// Get UI
const getform = document.querySelector('form');
const gettextbox = document.querySelector('#textbox');
const getul = document.querySelector('.list-group');

getform.addEventListener('submit',(e) =>{

	// console.log('hello');

	addnew();

	e.preventDefault();

});

const gettodos = JSON.parse(localStorage.getItem('todos'));
// console.log(gettodos);

if(gettodos){

	gettodos.forEach(function(gettodo){
		// console.log(gettodo);
		addnew(gettodo);
	});
}

function addnew(gettodo){
	// console.log('hi');

	let todotext = gettextbox.value;

	if(gettodo){
		todotext = gettodo.text;
	}

	if(todotext){

		const li = document.createElement('li');

		if(gettodo && gettodo.done){
			li.classList.add('completed');
		}

		li.appendChild(document.createTextNode(todotext));
		// console.log(li);
		getul.appendChild(li);
		gettextbox.value = "";
		gettextbox.focus();

		updatelocalstorage();

		li.addEventListener('click',function(){
			li.classList.toggle('completed');
			updatelocalstorage();
		});

		li.addEventListener('contextmenu',(e) =>{
			li.remove();
			updatelocalstorage();
			e.preventDefault();

		});

	}

}


function updatelocalstorage(){

	const alllis = document.querySelectorAll('li');
	// console.log(alllis);

	let todos = [];

	alllis.forEach(function(allli){
		// console.log(allli.textContent);

		todos.push({
			text:allli.textContent,
			done:allli.classList.contains('completed')
		});
	});

	localStorage.setItem('todos',JSON.stringify(todos));

}
