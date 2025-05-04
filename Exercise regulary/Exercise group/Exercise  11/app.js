// GET UI 
const getinput = document.getElementById('search');

const getsortazm1 = document.getElementById('sortazm1'),
      getsortzam1 = document.getElementById('sortzam1'),
      getsortazm2 = document.getElementById('sortazm2'),
      getsortzam2 = document.getElementById('sortzam2');

const getul = document.getElementById('memebers');
const getlis = document.getElementsByTagName('li');

getinput.addEventListener('keyup',filter);

getsortazm1.addEventListener('click',sortazm1);

getsortzam1.addEventListener('click',sortzam1);

getsortazm2.addEventListener('click',sortazm2);

getsortzam2.addEventListener('click',sortzam2);


function filter(){

    let getlink;

    const filter = this.value.toLowerCase();
    // console.log(filter);

    for(var x = 0; x < getlis.length;x++){
        // console.log(x); // 0 to 26

        getlink = getlis[x].querySelector('a');
        // console.log(getlink);

        const getatxt = getlink.textContent || getlink.innerText;
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
    // console.log("A to Z Method 1");

    let lis = [];

    for(var i = 0; i < getlis.length;i++){
        // console.log(i);// 0 to 26
        // console.log(getlis[i].textContent.toLowerCase());

        lis.push(getlis[i].textContent.toLowerCase());
    }

    // console.log(lis);
    // console.log(lis.sort());

    var azlis = lis.sort();

    getul.innerHTML = "";

    azlis.forEach(function(azli){

        const li = document.createElement('li');
        const newlink = document.createElement('a');

        const newtxt = document.createTextNode(azli);
        newlink.appendChild(newtxt);

        newlink.href = "javascript:void(0);";

        li.appendChild(newlink);

        getul.appendChild(li);

    });
}

function sortzam1(){
    // console.log("Z to A Method 1");

    let lis = [];

    for(var i = 0; i < getlis.length;i++){
        // console.log(i);// 0 to 26
        // console.log(getlis[i].textContent.toLowerCase());

        lis.push(getlis[i].textContent.toLowerCase());
    }

    // console.log(lis);
    // console.log(lis.sort().reverse());

    var zalis = lis.sort().reverse();

    getul.innerHTML = "";

    zalis.forEach(function(zali){

        const li = document.createElement('li');
        const newlink = document.createElement('a');

        const newtxt = document.createTextNode(zali);
        newlink.appendChild(newtxt);

        newlink.href = "javascript:void(0);";

        li.appendChild(newlink);

        getul.appendChild(li);

    });

}

// console.log(getlis[0].textContent.toLowerCase());
// console.log(getlis[1].textContent.toLowerCase());

// if(getlis[0].textContent.toLowerCase() > getlis[1].textContent.toLowerCase()){
//     console.log("true");
// }else if(getlis[0].textContent.toLowerCase() === getlis[1].textContent.toLowerCase()){
//     console.log("equal");
// }else{
//     console.log("false");
// }

function sortazm2(){
    // console.log("A to Z Method 2");

    var shouldswitch = true;
    var switching = true;

    // console.log(getlis.length);// 26

    while(switching){

        switching = false;

        for(i = 0; i < getlis.length-1;i++){
            // console.log(i);// 0 to 25

            shouldswitch = false;

            if(getlis[i].textContent.toLowerCase() > getlis[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }

        // console.log(i);// 0


        if(shouldswitch){
            getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
            switching = true;
        }
    }
}

function sortzam2(){
    // console.log("A to Z Method 2");

    var shouldswitch = true;
    var switching = true;

    // console.log(getlis.length);// 26

    while(switching){

        switching = false;

        for(i = 0; i < getlis.length-1;i++){
            // console.log(i);// 0 to 25

            shouldswitch = false;

            if(getlis[i].textContent.toLowerCase() < getlis[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }

        // console.log(i);// 0


        if(shouldswitch){
            getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
            switching = true;
        }
    }
}