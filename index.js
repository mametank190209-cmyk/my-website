const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const indicators =
document.querySelectorAll(".indicator");

let currentIndex = 0;

function updateCarousel(){

    carousel.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    indicators.forEach(dot=>{
        dot.classList.remove("active");
    });

    indicators[currentIndex]
        .classList.add("active");
}

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= cards.length){
        currentIndex = 0;
    }

    updateCarousel();
});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = cards.length - 1;
    }

    updateCarousel();
});

indicators.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentIndex = index;

        updateCarousel();
    });
});

setInterval(()=>{

    currentIndex++;

    if(currentIndex >= cards.length){
        currentIndex = 0;
    }

    updateCarousel();

},5000);