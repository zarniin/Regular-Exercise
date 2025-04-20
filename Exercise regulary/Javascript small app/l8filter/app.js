// Get UI
var getinputbtn = document.getElementById('search');

var getsortazm1 = document.getElementById('sortazm1'),
	getsortzam1 = document.getElementById('sortzam1'),
	getsortazm2 = document.getElementById('sortazm2'),
	getsortzam2 = document.getElementById('sortzam2');

var getul = document.getElementById('members');

var getlis = getul.getElementsByTagName('li');
// console.log(getlis[0].textContent);
// console.log(getlis[1].textContent);

// if(getlis[0].textContent > getlis[1].textContent){
// 	console.log(true);
// }else if(getlis[0].textContent === getlis[1].textContent){
// 	console.log('equal');
// }else{
// 	console.log(false);
// }

getsortazm1.addEventListener('click',sortazm1);
getsortzam1.addEventListener('click',sortzam1);
getsortazm2.addEventListener('click',sortazm2);
getsortzam2.addEventListener('click',sortzam2);


getinputbtn.addEventListener('keyup',filter);

function filter(){

	let getlink;

	let filter = this.value.toLowerCase();
	// console.log(filter);

	for(var x = 0; x < getlis.length;x++){
		// console.log(x);// 0 to 27 

		getlink = getlis[x].querySelector('a');
		// console.log(getlink);

		getatxt = getlink.textContent || getlink.innerText;
		// console.log(getatxt);
		// console.log(getatxt.toLowerCase());

		if(getatxt.toLowerCase().indexOf(filter) > -1){
			getlis[x].style.display = "";
		}else{
			getlis[x].style.display = "none";
		}
	}

}


function sortazm1(){
	// console.log("Method 1 A~Z");

	var lis = [];

	for(var i = 0; i < getlis.length;i++){
		// console.log(getlis[i]);
		// console.log(getlis[i].textContent);
		// console.log(getlis[i].innerText.toLowerCase());

		lis.push(getlis[i].innerText);
	}

	// console.log(lis.sort());

	var azsorts = lis.sort();

	getul.innerHTML = "";

	azsorts.forEach(function(azsort){
		// console.log(azsort);

		const newli = document.createElement('li');
		// console.log(newli);

		const newlink = document.createElement('a');
		newlink.href = "javascript:void(0);";

		const newlinktxt = document.createTextNode(azsort);
		// console.log(newlinktxt);
		newlink.append(newlinktxt);
		// console.log(newlink);

		newli.append(newlink);
		console.log(newli);

		getul.append(newli);

	});

}

function sortzam1(){
	// console.log("Method 1 Z~A");

	var lis = [];

	for(var i = 0; i < getlis.length;i++){
		// console.log(getlis[i]);
		// console.log(getlis[i].textContent);
		// console.log(getlis[i].innerText.toLowerCase());

		lis.push(getlis[i].innerText);
	}

	// console.log(lis.sort());

	var azsorts = lis.sort().reverse();

	getul.innerHTML = "";

	azsorts.forEach(function(azsort){
		// console.log(azsort);

		const newli = document.createElement('li');
		// console.log(newli);

		const newlink = document.createElement('a');
		newlink.href = "javascript:void(0);";

		const newlinktxt = document.createTextNode(azsort);
		// console.log(newlinktxt);
		newlink.append(newlinktxt);
		// console.log(newlink);

		newli.append(newlink);
		console.log(newli);

		getul.append(newli);

	});
}

function sortazm2(){
	// console.log("Method 2 A~Z");

	var shouldswitch = true;
	var switching = true;

	while(switching){

		switching = false;

		var i = 0;

		for(i; i < getlis.length-1;i++){
			// console.log(i);// 0 to 27

			shouldswitch = false;

			if(getlis[i].textContent.toLowerCase() > getlis[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		// console.log(i);// 28

		if(shouldswitch){
			// insertBefore(new,exist) 
			getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
			switching = true;
		}

	}

}

function sortzam2(){
	// console.log("Method 2 Z~A");

	var shouldswitch = true;
	var switching = true;

	while(switching){

		switching = false;

		var i = 0;

		for(i; i < getlis.length-1;i++){
			// console.log(i);// 0 to 27

			shouldswitch = false;

			if(getlis[i].textContent.toLowerCase() < getlis[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		// console.log(i);// 28

		if(shouldswitch){
			// insertBefore(new,exist) 
			getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
			switching = true;
		}

	}
}
