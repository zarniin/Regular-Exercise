// Get UI 
const getdownloadbtn = document.querySelector('.download-btn');
// console.log(getdownloadbtn);
const getprogressbar = document.querySelector('.progress-bar');
// console.log(getprogressbar);
const getsetul = "https://google.com";

getdownloadbtn.addEventListener('click',function(){
	// console.log('hay i am working');

	let setwidth = 0;

	let setinv = setInterval(progressbar,100);

	function progressbar(){

		if(setwidth >= 100){
			setwidth = 0;
			clearInterval(setinv);
			window.location.href = getsetul;
		}else{
			setwidth++;

			getprogressbar.style.width = `${setwidth}%`;
			getprogressbar.setAttribute('data-inc',`${setwidth}%`);
			getdownloadbtn.setAttribute('disabled',true);
		}
	}


});

