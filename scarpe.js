// Navbar
let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0){
        navbar.classList.add("nav-scroll")
    } else {
        navbar.classList.remove("nav-scroll")
    }
})

fetch("./scarpe.json").then((response)=> response.json()).then((data)=> {
    
    let shoesWrapper= document.querySelector("#scarpeWrapper")
    
    function createCards(array){
        shoesWrapper.innerHTML = ""
        array.forEach((scarpe, i)=>{
            let col= document.createElement("div");
            col.classList.add("col-10", "col-lg-4", "my-3", "mx-1")
            
            col.innerHTML= ` <div class="card position-relative h-100">
            <div class="overflow-hidden">
            <img src="https://picsum.photos/20${i}" class="img-card2 card-img-top " alt="...">
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
            <div>
            <h4 class="card-title text-center fw-bold mb-3">${scarpe.nome}</h4>
            <p class="card-text">Categoria: <span class="fs-5">${scarpe.categoria}</span></p>
            <p class="card-text">Prezzo: <span class="fs-5">${scarpe.prezzo}</span>€</p>
            </div>
            <div class="d-flex justify-content-between my-3">
            <i class="bi bi-heart fs-4 heart"></i>
            <a href="#" class="btn btn-dark">Aggiungi al carrello</a>
            </div>
            </div>
            </div>`
            
            shoesWrapper.appendChild(col)
        });
    }
    createCards(data)
    
    // Inizio Sezione Creazione Categoria
    let radioWrapper = document.querySelector("#radioWrapper")
    
    function setCategories(){
        let categories = data.map( (el)=> el.categoria)
        let uniqueCategories = [];
        categories.forEach( (category)=> {
            if(uniqueCategories.includes(category) == false){
                uniqueCategories.push(category)
            } 
        })
        
        uniqueCategories.sort().forEach( (categoria)=> {
            let div = document.createElement("div")
            div.classList.add("form-check")
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${categoria}">
            <label class="form-check-label" for="flexRadioDefault1">
            ${categoria}
            </label>
            `
            radioWrapper.appendChild(div)
        })
    }
    setCategories()
    
    
    //     // Inizio Sezione Filtro Per Categoria

    let checksInput = document.querySelectorAll(".form-check-input")
    function filterByCategory(array){
        let radiosBtn = Array.from(checksInput)
        let checked = radiosBtn.find( (el)=>  el.checked)
        if(checked.id == "All"){
            // createCards(array)
            return array
        } else {
            let filtered = array.filter( (el)=> el.categoria == checked.id )
            return filtered
            // createCards(filtered)
        }
    }
    
    //     // Evento Click
    checksInput.forEach((input)=>{
        input.addEventListener("click", ()=>{
            // filterByCategory()
            globalFilter()
        })
    })
    
    //     // Inizio Sezione Range Price
    let inputPrice = document.querySelector("#inputPrice")
    let currentValue = document.querySelector("#currentValue")
    
    
    function findMaxAndMinPrice(){
        let prices = data.map( (articolo)=> articolo.prezzo )
        let max = Math.max(...prices)
        let min = Math.min(...prices)
        inputPrice.max = max
        inputPrice.min = min
        inputPrice.value = max
        currentValue.innerHTML = max
    }
    findMaxAndMinPrice()
    
    //      //Inizio Sezione Filtro Prezzo
    
    function filterByPrice (array){
        let filtered = array.filter( (el)=> el.prezzo <= inputPrice.value )
        // createCards (filtered)
        return filtered
    }
    
    inputPrice.addEventListener("input", ()=>{
        currentValue.innerHTML = inputPrice.value
        // filterByPrice()
        globalFilter()
    })
    
    //     // Inizio Sezione Filtro Parola
    
    let inputWord = document.querySelector("#inputWord")
    
    function filterByWord(array){
        console.log(inputWord.value)
        let filtered = array.filter ((el)=> el.nome.toLowerCase().includes(inputWord.value.toLowerCase()))
        // createCards(filtered)
        return filtered
    }
    
   inputWord.addEventListener("input", ()=>{
    // filterByWord()
    globalFilter()
   })

   // Sezione Global Filter
   
   function globalFilter(){
    let filteredByCategory = filterByCategory(data)
    let filteredByPrice = filterByPrice (filteredByCategory)
    let filteredByWord = filterByWord(filteredByPrice)
    createCards(filteredByWord)
}




   
})


