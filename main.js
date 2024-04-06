// Navbar
let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0){
        navbar.classList.add("nav-scroll")
    } else {
        navbar.classList.remove("nav-scroll")
    }
})


let numRecensioni =document.querySelector("#numRecensioni")
// console.log(numRecensioni)
let numAcquisti =document.querySelector("#numAcquisti")
let numUtenti =document.querySelector("#numUtenti")

function createInterval(elementId, finalNumber, frequency){
    let counter = 0
    
    let intervallo = setInterval(()=>{
        if (counter < finalNumber){
            counter++
            elementId.innerHTML = counter;
        }else{
            clearInterval(intervallo)
        }
    }, frequency);
}

// createInterval(numRecensioni, 500, 10)
// createInterval(numAcquisti, 1000, 10)
// createInterval(numUtenti, 800, 10)

let isIntersected = false;

const intersectionObserver = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=> {
        if (entry.isIntersecting && isIntersected == false){
            createInterval(numRecensioni, 500, 10)
            createInterval(numAcquisti, 1000, 10)
            createInterval(numUtenti, 800, 10)
            isIntersected = true;
            // setTimeout(()=>{
            //     isIntersected = false;
            // }, 10000);
        }
    })
})
intersectionObserver.observe(numRecensioni)


let announcements = [
    {name: "prodotto 1", categoria: "abbigliamneto", prezzo: "€€€", img: "https://picsum.photos/200", date: "apr|8"},
    {name: "prodotto 2", categoria: "abbigliamneto", prezzo: "€€€", img: "https://picsum.photos/201", date: "APR|12"},
    {name: "prodotto 3", categoria: "abbigliamento", prezzo: "€€€", img: "https://picsum.photos/202", date: "APR|28"},
    {name: "prodotto 4", categoria: "scarpe", prezzo: "€€€", img: "https://picsum.photos/203", date: "MAG|10"},
    {name: "prodotto 5", categoria: "scarpe", prezzo: "€€€", img: "https://picsum.photos/204", date: "MAG|17"},
];
console.log(announcements.length)

let cardsWrapper= document.querySelector("#cardsWrapper")

announcements.forEach((annuncio, i)=>{
    if(i >= announcements.length - 4){
        let col= document.createElement("div");
        col.classList.add("col-12", "col-lg-3", "my-3")
        col.innerHTML= `<div class="card position-relative h-100">
        <div class="overflow-hidden">
        <img src="${annuncio.img}" class="img-card card-img-top" alt="...">
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
        <div>
        <h4 class="card-title text-center fw-bold mb-3 text-truncate">${annuncio.name}</h4>
        <p class="card-text">Categoria: <span class="fs-5">${annuncio.categoria}</span></p>
        </div>
        <div class="d-flex justify-content-between mt-3">
        <i class="bi bi-heart heart fs-4"></i>
        <spa class="fs-4">${annuncio.date}</spa>
        </div>
        </div>
        </div>`
        cardsWrapper.appendChild(col)
    }
})



let announcements2 = [
    {name: "prodotto 1", categoria: "abbigliamneto", prezzo: "€€€", img: "https://picsum.photos/205"},
    {name: "prodotto 2", categoria: "abbigliamneto", prezzo: "€€€", img: "https://picsum.photos/206"},
    {name: "prodotto 3", categoria: "abbigliamento", prezzo: "€€€", img: "https://picsum.photos/207"},
    {name: "prodotto 4", categoria: "scarpe", prezzo: "€€€", img: "https://picsum.photos/208"},
    {name: "prodotto 5", categoria: "scarpe", prezzo: "€€€", img: "https://picsum.photos/209"},
];
console.log(announcements2.length)

let cardsWrapper2= document.querySelector("#cardsWrapper2")

announcements2.forEach((annuncio2, i)=>{
    if(i >= announcements2.length - 4){
        let col= document.createElement("div");
        col.classList.add("col-12", "col-lg-3", "my-3")
        col.innerHTML=`
        <div class="card position-relative h-100">
        <div class="overflow-hidden">
        <img src="${annuncio2.img}" class="img-card2 card-img-top " alt="...">
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
        <div>
        <h4 class="card-title text-center fw-bold mb-3">${annuncio2.name}</h4>
        <p class="card-text">Categoria: <span class="fs-5">${annuncio2.categoria}</span></p>
        <p class="card-text">Prezzo: <span class="fs-5">${annuncio2.prezzo}</span>€</p>
        </div>
        <div class="d-flex justify-content-between my-3">
        <i class="bi bi-heart fs-4 heart"></i>
        <a href="#" class="btn btn-dark">Aggiungi al carrello</a>
        </div>
        </div>
        </div>`
        cardsWrapper2.appendChild(col)
    }
})

let announcements3 = [
    {name: "prodotto 1", categoria: "abbigliamneto", prezzo: "€€€", img: "https://picsum.photos/200"},
    {name: "prodotto 2", categoria: "abbigliamneto", prezzo: "€€€", img: "https://picsum.photos/201"},
    {name: "prodotto 3", categoria: "accessorio", prezzo: "€€€", img: "https://picsum.photos/202"},
    {name: "prodotto 4", categoria: "scarpe", prezzo: "€€€", img: "https://picsum.photos/203"},
    {name: "prodotto 5", categoria: "scarpe", prezzo: "€€€", img: "https://picsum.photos/204"},
];
console.log(announcements3.length)

let cardsWrapper3= document.querySelector("#cardsWrapper3")

announcements3.forEach((annuncio3, i)=>{
    if(i >= announcements3.length - 4){
        let col= document.createElement("div");
        col.classList.add("col-12", "col-lg-3", "my-3")
        col.innerHTML=`
        <div class="card position-relative h-100">
        <div class="overflow-hidden">
        <img src="${annuncio3.img}" class="img-card2 card-img-top " alt="...">
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
        <div>
        <h4 class="card-title text-center fw-bold mb-3">${annuncio3.name}</h4>
        <p class="card-text">Categoria: <span class="fs-5">${annuncio3.categoria}</span></p>
        <p class="card-text">Prezzo: <span class="fs-5">${annuncio3.prezzo}</span>€</p>
        </div>
        <div class="d-flex justify-content-between my-3">
        <i class="bi bi-heart fs-4 heart"></i>
        <a href="#" class="btn btn-dark">Aggiungi al carrello</a>
        </div>
        </div>
        </div>`
        cardsWrapper3.appendChild(col)
    }
})