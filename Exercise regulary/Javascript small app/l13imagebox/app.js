// GET UI 
const getimagesboxs = document.querySelectorAll('.imgbox');

getimagesboxs.forEach(function(getimagesbox,idx){
    // console.log(getimagesboxs);
    // console.log(idx);

    getimagesbox.addEventListener('click',function(e){
        // console.log(this);
        // console.log(idx);

        showidx(idx);
    });
});

function showidx(idx){

    getimagesboxs.forEach(function(imagesbox,curridx){

        // console.log(imagesbox);
        // console.log(idx);

        if(idx === curridx){
            imagesbox.classList.add('show');

            imagesbox.addEventListener('click',function(e){
                // console.log(e.target);

                if(e.target.className === "btn-close"){
                    imagesbox.classList.remove('show');
                }

                if(e.target.classList.contains('btn')){
                   console.log('hay');
                   const getsubbtn = imagesbox.querySelector('.btn');
                   getsubbtn.innerText = "Subscribed";
                }


            });



        }else{
            imagesbox.classList.remove('show');
        }


    });



}