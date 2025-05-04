// GET UI
const getmodalbtn = document.querySelector('.modal-btn');
const getmodal = document.querySelector('.modal');
const getbtnclose = document.querySelector('.btn-close');

// Method 1 
// getmodalbtn.addEventListener('click',function(){
//     getmodal.style.display = "block";
// });

// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = "none"
// });

// window.onclick = function(e){

//     // console.log(e.target);

//     if(e.target === getmodal){
//         getmodal.style.display = "none";
//     }

// };

// Method 2 

getmodalbtn.addEventListener('click',modal);
getbtnclose.addEventListener('click',btnclose);

function modal(){
    getmodal.style.display = "block";
}

function btnclose(){
    getmodal.style.display = "none";
}

document.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
}