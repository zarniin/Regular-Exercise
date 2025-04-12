// Get UI 
const getsignupbtn = document.getElementById('signup-btn'),
	  getopenfullscreen = document.getElementById('openfullscreen-btn'),
	  getclosefullscreen = document.getElementById('closefullscreen-btn');

	  getmodalbox = document.getElementById('signupmodal');
	  getbtnclose = document.querySelector('.btn-close');
	  console.log(getbtnclose);


getsignupbtn.addEventListener('click',function(){

	getmodalbox.style.display = "block";

});

getbtnclose.addEventListener('click',function(){

	getmodalbox.style.display = "none";

});

// console.log(document); 
// console.log(document.documentElement);

var getdocele = document.documentElement;
console.log(getdocele);

getopenfullscreen.addEventListener('click',function(){

	if(getdocele.requestFullscreen()){
		getdocele.requestFullscreen();
	}

	getclosefullscreen.style.display = "inline-block";

});

getclosefullscreen.addEventListener('click',function(){

	if(document.exitFullscreen()){
		document.exitFullscreen();
	}

});


