// GET UI
const getsignupbtn = document.getElementById('signup-btn');
const getopenfullscreen = document.getElementById('openfullscreen-btn');
const getclosefullscreen = document.getElementById('clsfullscreen-btn');

const getmodal = document.querySelector('.modal');
const getbtnclose = document.querySelector('.btn-close');

getsignupbtn.addEventListener('click',function(){
  getmodal.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
  getmodal.style.display = "none";
});

window.onclick = function(e){
  // console.log(e.target);

  if(e.target === getmodal){
      getmodal.style.display = "none";
  }
}

// console.log(document);
// console.log(document.documentElement);

let getdocele = document.documentElement;
getopenfullscreen.addEventListener('click',function(){

  if(getdocele.requestFullscreen()){
    getdocele.requestFullscreen();
  }

  getclosefullscreen.style.display = "inline-block";

});

getclosefullscreen.addEventListener('click',function(){

  if(document.exitFullscreen()){
    document.exitFullscreen();
  }

  getclosefullscreen.style.display = "none";

});
