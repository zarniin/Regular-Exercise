// Get UI
const getform = document.querySelector('form');
const gettextbox = document.querySelector('#textbox');
const getul = document.querySelector('.list-group');

getform.addEventListener('submit',(e) =>{

	// console.log('hello');

	addnew();

	e.preventDefault();

});


function addnew(){
	// console.log('hi');

	let textbox = gettextbox.value;

	const newli = document.createElement('li');
	const newtxt = document.createTextNode(textbox);
	newli.append(newtxt);
	console.log(newli);
	getul.append(newli);

	newli.addEventListener('click',function(e){
		newli.classList.toggle('completed');
	});

	newli.addEventListener('contextmenu',function(e){
		newli.remove();

		e.preventDefault();
	});
}
