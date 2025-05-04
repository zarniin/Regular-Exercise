// Get UI
const getemails = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtnclose = document.querySelector('.btn');
const emcontainer = document.querySelector('.email-containers');

getemails.focus();

getemails.addEventListener('keyup',function(e){

	// console.log(e.target.value);
	// console.log(e.currentTarget.value);
	// console.log(this.value);

	createmaillist(this.value);

});

function createmaillist(inputtext){
	// console.log(inputtext);

	// const eitems = inputtext.split(',');

	// const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== " ");

	const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== " ").map(rmtxtempty=>rmtxtempty.trim());
	// console.log(eitems);

	emcontainer.innerHTML = "";

	eitems.forEach(function(eitem){

		const setnewspan = document.createElement('span');
		setnewspan.classList.add('email-item');
		setnewspan.textContent = eitem; 

		emcontainer.appendChild(setnewspan);

	});

}

getbtnclose.addEventListener('click',function(e){
	// console.log('hay');
	e.preventDefault();

	sendemail();
});

function sendemail(){

	const getaddresses = document.querySelectorAll('.email-item');
	console.log(getaddresses);

	const gettxtvalue = gettextarea.value;

	var persons = [];

	if(getaddresses.length > 0 && gettxtvalue){

		getaddresses.forEach(function(getaddress){

			persons.push({
				email: getaddress.textContent,
				message: gettxtvalue
			});

		});

		console.log(persons);

	}else{
		window.alert("Enter Message");
		gettextarea.focus();
	}

}





