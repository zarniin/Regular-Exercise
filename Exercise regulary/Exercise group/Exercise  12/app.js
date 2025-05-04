// GET UI 
const gettablinks = document.querySelectorAll(".tablinks");
const gettabpanels = document.querySelectorAll(".tab-panels");
const getbtnclose = document.querySelectorAll('.btn-close');

function gettabs(eve,link){

    // console.log(eve);
    // console.log(eve.target);
    // console.log(eve.currentTarget);

    gettablinks.forEach(function(gettablink){

        // console.log(gettablink);

        // gettablink.classList.remove('active');
        gettablink.className = gettablink.className.replace(' active','');

        // getbtnclose.addEventListener('click',function(e){
        //     // console.log('hay');
        //     // console.log(e.target.parentElement);

        //     const btn = e.target.parentElement;
        //     // console.log(btn);
        //     btn.style.display = "none";
        // });

    });

    gettabpanels.forEach(function(gettabpanel){
        // console.log(gettabpanel);

        gettabpanel.style.display = "none";
    });

    getbtnclose.forEach(function(getbtn){
        // console.log(getbtn);

        getbtn.addEventListener('click',function(e){
            // console.log('hay');
            // console.log(e.target.parentElement);

            const btn = e.target.parentElement;
            // console.log(btn);
            btn.style.display = "none";
        });
    });




    document.getElementById(link).style.display = "block";

    // eve.target.className = "tablinks active";
    // eve.target.className = eve.target.className.replace('tablinks','tablinks active');
    eve.target.classList.add('active');


}