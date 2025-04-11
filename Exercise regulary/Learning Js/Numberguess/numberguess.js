// UI 
const minnumber = document.getElementById('minnumber'),
	  maxnumber = document.getElementById('maxnumber'),
	  getinput = document.getElementById('numberguess'),
	  getbtn = document.querySelector('.btn'),
	  message1 = document.getElementById('message1'),
	  message2 = document.getElementById('message2'),
	  getform = document.getElementById('game');

const min = 0;
const max = 10;
let gameleft = 5;
const warningnum = randomnum(min,max);

minnumber.textContent = min;
maxnumber.innerHTML = max;

getbtn.addEventListener('click',function(e){
	// console.log("hello");

	// console.log(getinput.value);

	let guess = Number(getinput.value);
	// console.log(guess);

	if(guess < min === guess > max === isNaN(guess)){
		// console.log("Please enter between 0 to 10");
		// message2.textContent = "Please enter between "+ min +" to "+ max +" ";

		setmessage2(`Please enter between ${min} to ${max}`,"red");
	}

	if(guess === warningnum){

		gameover(true,`${warningnum} is correct. You won`);

	}else{
		gameleft -= 1;
		console.log(gameleft);

		if(gameleft === 0){

			gameover(false,`Game Over , You Lost, The correct number is ${warningnum}`);

		}else{
			// Continue Game 

			// getinput border change to red
			getinput.style.borderColor = "red";

			// message 
			message1.innerText = `${guess} is not correct!, ${gameleft} guess left.`; 
			message1.style.color = "blue"; 

			// clear value getinput 
			getinput.value = "";

			// // autofocus
			getinput.focus();

		}
	}



	e.preventDefault();
});


function setmessage1(msg,color){
	message1.textContent = msg;
	message1.style.color = color;
}

function setmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;

	setTimeout(function(){
		message2.textContent = "";
	},2000);
}

function gameover(won,msg){
	let color;

	won === true ? color = "green" : color = "red";

	getinput.disabled = true;

	getinput.style.borderColor = color;

	setmessage1(msg,color);

	getbtn.value = "Play again";

	// Add Class 

	getbtn.classList.add("playagain");
}

getform.addEventListener('mouseup',function(e){
	// console.log("hello");

	if(e.target.classList.contains('playagain')){
		// console.log('hello');

		window.location.reload();

	}
});


function randomnum(min,max){
	let random = Math.floor(Math.random()* (max-min) + min);
	return random;
}

console.log(warningnum);

