const inputFieldEl = document.getElementById("input-field")
const addToCartBtn=document.getElementById('add-button')

addToCartBtn.addEventListener("click", function(){ 
    let inputValue = inputFieldEl.value
    // console.log("Hey am clicked!!!")
    console.log(inputValue)
})