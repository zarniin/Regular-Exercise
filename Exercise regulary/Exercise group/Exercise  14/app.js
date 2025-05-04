// GET UI 
const getmodal = document.querySelector('.modal');
const getmodalimg = document.querySelector('.modal-img');
const getcaption = document.querySelector('.caption');
const getbtnclose = document.querySelector('.btn-close');

function showevent(e){

    // console.log(e.target);
    // console.log(e.target.src);
    // console.log(e.target.alt);

    getmodal.style.display = "block";
    getmodalimg.src = e.target.src;
    getcaption.textContent = e.target.alt;

}

getbtnclose.addEventListener('click',function(){
    getmodal.style.display = "none";
});

window.onclick = function(e){
    console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
}