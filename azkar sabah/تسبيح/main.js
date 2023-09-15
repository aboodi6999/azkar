let count1 = document.querySelector("h1")
let count2 = document.querySelector("h3")
let click = document.querySelector("#click")
let reaset = document.querySelector("#reaset")
let num1 = 0;

click.addEventListener("click", (eo) => {
    num1 ++
    count1.innerText = num1

    eo.target.classList.add("scale")

    setTimeout(() => {
        eo.target.classList.add("scale-res")
        click.classList.remove("scale")


    }, 100)
    click.classList.remove("scale-res")



})

reaset.addEventListener("click", (eo) => {
    
    count1.innerText = 0
   let num2 = Number(count2.innerText) + num1
    count2.innerText = num2


    num1 = 0

})