let close = document.getElementById("closebtn")
close.addEventListener("click" , closeParent)

let close2 = document.getElementById("closebtn2")
close2.addEventListener("click" , closeParent)

let button = document.getElementsByClassName("button")[0]
button.addEventListener("click" , closeParent )


function closeParent(){this.parentElement.style.display='none'}


let toggle = document.getElementById("toggle")
function showFilters(){
    (document.getElementsByClassName("whenyouclick")[0]).style.display = "block"
}
toggle.addEventListener("click", showFilters)

 



let addToCart = document.querySelectorAll(".addtocart")
for(i=0; i< addToCart.length; i++){
    (addToCart[i]).addEventListener("click", function(){alert("Item has been added to cart")})
}


function addedToCart(){
    document.getElementById("cart-alert").style.display = "block";
}



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



let product = document.querySelectorAll(".product")
console.log(product)
for(i=0; i< product.length; i++){
    console.log(product[i])
}
