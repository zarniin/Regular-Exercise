// GET UI
const getacctitles = document.getElementsByClassName('acctitle');
const getaccontents = document.getElementsByClassName('accontent');

for(var x = 0; x < getacctitles.length;x++){
    // console.log(x);// 0 to 3

    getacctitles[x].addEventListener('click',getacctitle);

    function getacctitle(e){
      // console.log(e.target);
      // console.log(this);

      this.classList.toggle('active');

      let getcontent = this.nextElementSibling;
      // console.log(getcontent);
      // console.log(getcontent.scrollHeight);

      // getcontent.style.height = "100px";
      // getcontent.style.height = getcontent.scrollHeight+"px";

      if(getcontent.style.height){
        getcontent.style.height = null;
      }else{
        getcontent.style.height = getcontent.scrollHeight+"px";
      }
    }

    if(getacctitles[x].classList.contains('active')){
      getaccontents[x].style.height = getaccontents[x].scrollHeight+"px";
    }

}
