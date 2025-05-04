// Get UI
const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic'),
      getpro = document.getElementById('pro'),
      getmst = document.getElementById('master');


getcheckbox.addEventListener('click',function(){
  // console.log('hay i am working');

  if(getcheckbox.checked){
    [getbasic.textContent,getpro.textContent,getmst.textContent] = [120,240,360];
  }else{
    [getbasic.textContent,getpro.textContent,getmst.textContent] = [20,40,60];
  }

});
