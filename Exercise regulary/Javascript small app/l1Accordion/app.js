// Get UI 
const getacctitles = document.querySelectorAll('.acctitle');
const getacccontents = document.querySelectorAll('.acccontent');

getacctitles.forEach(function(getacctitle,idx){
	
	getacctitle.addEventListener('click',getacctitles);


	function getacctitles(e){
		// console.log(e);

		// console.log(e.target);

		e.target.classList.toggle('arrow');

		let getcontent = e.target.nextElementSibling;
		// console.log(getcontent);
		// console.log(getcontent.scrollHeight);

		// getcontent.style.height = getcontent.scrollHeight+"px";
		// getcontent.style.height = "100px";

		if(getcontent.style.height){
			getcontent.style.height = null;
		}else{
			getcontent.style.height = getcontent.scrollHeight+"px";
			// getcontent.style.height = getcontent.style.height = "100px";
		}
	}

	if(getacctitle.classList.contains('arrow')){
		getacccontents[0].style.height = getacccontents[0].scrollHeight+"px";
	}


});



