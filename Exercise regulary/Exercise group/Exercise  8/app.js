// GET UI
const slides = document.getElementsByClassName('carousel-item');
const dots = document.getElementsByClassName('dot');

let currslides = 1;

// slides[currslides-1].style.display = "block";

document.getElementById('prev').addEventListener('click',function(){
    // console.log("hay i am prev");
    // console.log(currslides -= 1);
    // console.log(currslides--);

    carousel(currslides -= 1);
});

document.getElementById('next').addEventListener('click',function(){
    // console.log("hay i am next");
    // console.log(currslides += 1);
    // console.log(currslides++);

    carousel(currslides += 1);
});

carousel(currslides);

function carousel(slidenum){
  // console.log(slidenum);

  if(slidenum > slides.length){
      currslides = 1;
  }else if(slidenum < 1){
    currslides = slides.length;
  }

  console.log(currslides);

  var x,y;

  for(x = 0; x < slides.length;x++){
      slides[x].style.display = "none";
  }

  for(y = 0; y < dots.length;y++){
      dots[y].classList.remove('active');
  }

  slides[currslides-1].style.display = "block";

  dots[currslides-1].classList.add('active');

}

for(var q = 0; q < dots.length;q++){

    dots[q].addEventListener('click',function(){
        // console.log(this);
        // console.log(this.getAttribute('data-bs-silde'));

        currslides = this.getAttribute('data-bs-silde');

        carousel(currslides);
    });
}
