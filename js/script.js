
const sliderImages = [
    "immagini/consegna/img/01.jpg",
    "immagini/consegna/img/02.jpg",
    "immagini/consegna/img/03.jpg",
    "immagini/consegna/img/04.jpg",
    "immagini/consegna/img/05.jpg"
];
console.log(sliderImages);
// elementi HTML
const itemsContainer = document.querySelector(".items-container")
console.log(itemsContainer);

for (let i = 0; i < sliderImages.length; i++) {

    const element = `
    <div class="item">
        <img src="${sliderImages[i]}" alt="">
    </div>`
    itemsContainer.innerHTML += element;
}
console.log(itemsContainer);


const items = document.getElementsByClassName("item");
console.log(items);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let sliderPosition = 0;
console.log(items, sliderPosition);
items[sliderPosition].classList.add("active");

//Navigazione
nextBtn.addEventListener("click", function () {
    //SE posso andare avanti
    if (sliderPosition < (items.length - 1)) {
        //Tolgo class active all'items iniziale
        items[sliderPosition].classList.remove("active");

        //Incremento sliderPosition di 1
        sliderPosition++;

        //aggiungiamo active al nuovo elemento 
        items[sliderPosition].classList.add("active");

    }
});
//se posso andare avanti




prevBtn.addEventListener("click", function () {
    //SE posso andare indietro
    if (sliderPosition > 0) {
        //Tolgo class active all'items corrente
        items[sliderPosition].classList.remove("active");

        //Decremento sliderPosition di 1
        sliderPosition--;

        //aggiungiamo active al nuovo elemento corrente
        items[sliderPosition].classList.add("active");
    }
});