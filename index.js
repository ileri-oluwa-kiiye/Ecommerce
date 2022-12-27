function closeParent(){
    this.parentElement.style.display='none'
}

function showFilters(){
    (document.getElementsByClassName("whenyouclick")[0]).style.display = "block"
}

function increaseCartNumbering() {
    if (!numberingCart.innerHTML == ""){
        numberingCart.innerHTML ++;
    }
    else{
        numberingCart.innerHTML = +1
    }
}


//------------------------------------------------

let cartText = (document.querySelectorAll("#cart-alert h4"))[0]
let cartImage = (document.querySelectorAll("#cart-alert .image img"))[0]
let cartPrice = (document.querySelectorAll("#cart-alert .price"))[0]
let cartAlert = document.getElementById("cart-alert");


//cartImage.setAttribute("src", "products/product3.png")

console.log(cartPrice.innerHTML)


//------------------------------------------------

let numberingCart = document.getElementById("num-cart-items")

let close = document.getElementById("closebtn")
close.addEventListener("click" , closeParent)

let close2 = document.getElementById("closebtn2")
close2.addEventListener("click" , closeParent)

let button = document.getElementsByClassName("button")[0]
button.addEventListener("click" , closeParent )


let toggle = document.getElementById("toggle")
toggle.addEventListener("click", showFilters)

 





let addToCart = document.querySelectorAll(".addtocart")
for(i=0; i< addToCart.length; i++){
    (addToCart[i]).addEventListener("click", function(){alert("Item has been added to cart")})
}


function addedHPToCart(){
    document.getElementById("cart-alert").style.display = "block";
    console.log(cartPrice.innerHTML);
    increaseCartNumbering();
}

let addHpToCart = document.getElementsByClassName("add-to-cart")[0];
let addHpToCart2 = document.getElementsByClassName("add-to-cart")[1];
addHpToCart.addEventListener("click", addedHPToCart)
addHpToCart2.addEventListener("click", addedHPToCart)



console.log(31)






let product = document.querySelectorAll(".product")
console.log(product)
for(i=0; i< product.length; i++){
    console.log(product[i])
}
