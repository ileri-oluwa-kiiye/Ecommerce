let close = document.getElementById("closebtn")
close.addEventListener("click" , function(){this.parentElement.style.display='none'})
console.log(2)






let numberingCart = document.getElementById("num-cart-items")

console.log(31)

function increaseCartNumbering() {
    if (!numberingCart.innerHTML == ""){
        numberingCart.innerHTML ++;
    }
    else{
        numberingCart.innerHTML = +1
    }
}
increaseCartNumbering()
increaseCartNumbering()


function addedToCart(){

}

