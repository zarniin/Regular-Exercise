// GET UI
const getprogressbar = document.querySelector('.progress-bar');

// console.log(document);
// console.log(document.documentElement);
// console.log(document.documentElement.scrollTop);
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);

window.onscroll = function(e){

  scrollprogram();
}

function scrollprogram(){

  const getscrollTop = document.documentElement.scrollTop;
  // console.log(getscrollTop);

  const getscrollHeight = document.documentElement.scrollHeight;
  // console.log(getscrollHeight);

  const getclientHeight = document.documentElement.clientHeight;
  // console.log(getclientHeight);

  let getresult = getscrollHeight - getclientHeight;
  // console.log(getresult);

  let getfinal = Math.floor((getscrollTop / getresult) * 100);
  // console.log(getfinal);

  getprogressbar.style.width = `${getfinal}%`;

  // console.log(getprogressbar);

}
