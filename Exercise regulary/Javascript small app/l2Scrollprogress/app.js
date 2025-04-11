// Get UI 
const getprogressbar = document.querySelector('.progress-bar');

// console.log(document);
// console.log(document.doctype);
// console.log(document.documentElement);
// console.log(document.documentElement.scrollTop);
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);

window.onscroll = function(){
	scrollprogress();
};



function scrollprogress(){
	
	const getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);	

	const getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);

	const getclientHeight = document.documentElement.clientHeight;
	// console.log(getclientHeight);

	let getresult = getscrollheight - getclientHeight;
	// console.log(getfinal);

	let getfinal = Math.floor(((getscrolltop / getresult)*100));
	// console.log(getfinal); 

	getprogressbar.style.width = `${getfinal}%`;


}

function printme(){

	window.print();

}