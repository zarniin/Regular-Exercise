// Get UI

const getmodalbtn = document.querySelector('.modal');
const getmodalimg = document.querySelector('.modal-img');
const getcaption = document.querySelector('.caption');
const getbtnclose = document.querySelector('.btn-close');

function shownow(e){
	// console.log(e.target);
	// console.log(e.target.src);
	// console.log(e.target.alt);

	getmodalbtn.style.display = "block";
	getmodalimg.src = e.target.src;
	getcaption.textContent = e.target.alt;
}

// getbtnclose.addEventListener('click',function(){
// 	getmodalbtn.style.display = "none";
// });

getbtnclose.onclick = function(){
	getmodalbtn.style.display = "none";
};

// console.log(document);

document.addEventListener('click',function(e){

	console.log(e.target);

	if(e.target === getmodalbtn){
		getmodalbtn.style.display = "none";
	}
});