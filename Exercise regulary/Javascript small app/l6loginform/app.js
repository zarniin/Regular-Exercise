// Get UI 
const getloginbtn = document.getElementById('login-btn'),
	  getmodalbtn = document.getElementById('loginmodal'),
	  getbtnclose = document.querySelector('.btn-close');

getloginbtn.addEventListener('click',function(){
	getmodalbtn.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
	getmodalbtn.style.display = "none";
});

window.onclick = function(e){
	// console.log(e.target);

	if(e.target === getmodalbtn){
		getmodalbtn.style.display = "none";
	}
}

