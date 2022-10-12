
const sliderImages = [
    "immagini/consegna/img/01.jpg",
    "immagini/consegna/img/02.jpg",
    "immagini/consegna/img/03.jpg",
    "immagini/consegna/img/04.jpg",
    "immagini/consegna/img/05.jpg"
];
console.log(sliderImages);
// elementi HTML
const itemsContainer = document.querySelector("items-container")
// console.log(itemsContainer);

for (let i = 0; i < sliderImages.lenght; i++) {
    const thisImg = sliderImages[i];
    const element = `
    <div class="items">
        <img src="${thisImg}" alt="">
    </div>`;
    console.log(element, thisImg);
    itemsContainer.innerHTML += element;
}



const items = document.getElementsByClassName("items");
console.log(items);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let sliderPosition = 0;
items[2].classList.add("active");
console.log(items);

//Navigazione
nextBtn.addEventListener("click", function () {

    if (sliderPosition < (items.lenght - 1)) {
        console.log(sliderPosition, items[sliderPosition]);

        items[sliderPosition].classList.remove("active");

        sliderPosition++;

        items[sliderPosition].classList.add("active");
    }

});
//se posso andare avanti




prevBtn.addEventListener("click", function () {
    if (sliderPosition > 0) {

        items[sliderPosition].classList.remove("active");

        sliderPosition--;

        items[sliderPosition].classList.add("active");
    }
});