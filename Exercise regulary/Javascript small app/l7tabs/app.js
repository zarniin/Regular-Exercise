// Get UI
const gettablinks = document.getElementsByClassName('tablinks');
const gettabpanels = document.getElementsByClassName('tab-panel');
const getbtnclose = document.querySelectorAll('.btn-close');

function gettabs(e,link){
	// console.log(e);
	// console.log(e.target);
	// console.log(e.currentTarget);

	// console.log(link);

	for(var x = 0;x < gettablinks.length;x++){

		// gettablinks[x].classList.remove('active');
		gettablinks[x].className = gettablinks[x].className.replace(' active','');

		getbtnclose[x].addEventListener('click',function(){
            this.parentElement.style.display = "none";
        });

	}


	
	for(var y = 0; y < gettabpanels.length;y++){

		gettabpanels[y].style.display = "none";
	}

	e.target.className = "tablinks active";
	// e.target.classList.add('active');

	document.getElementById(link).style.display = "block";
}

document.getElementById('autoclick').click('home');