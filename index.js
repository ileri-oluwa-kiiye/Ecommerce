function closeParent(){
    this.parentElement.style.display='none';
}

function closeFilters(){
    (document.querySelectorAll(".filters .mobile")[0]).style.display = "none";
}

function showFilters(){
    (document.querySelectorAll(".filters .mobile")[0]).style.display = "block"
}

function increaseCartNumbering() {
    if (!numberingCart.innerHTML == ""){
        numberingCart.innerHTML ++;
    }
    else{
        numberingCart.innerHTML = +1
    }
}



function clearedFromCart(){
    this.parentElement.style.display='none';
    if(numberingCart.innerHTML== "1"){
        numberingCart.innerHTML = ""
    }
    else{
        numberingCart.innerHTML--;
    }
}

function addedHPToCart(){
    cartImage.setAttribute("src", "img/highlighted-image.png");
    cartText.innerHTML = "Samurai King Resting";
    cartPrice.innerHTML = "$10000.00";
    
    
    document.getElementById("cart-alert").style.display = "block";
    console.log(cartPrice.innerHTML);
    increaseCartNumbering();
}



function addedToCart(){
    increaseCartNumbering();
    let productClass = this.parentElement.className;


    let imageLocation = 'products/'+productClass+'.png'
    console.log(imageLocation)
    cartImage.setAttribute("src", imageLocation)
    cartText.innerHTML = (document.querySelector("." + productClass + " .productname").innerHTML);
    cartPrice.innerHTML = (document.querySelector("." + productClass + " .productprice").innerHTML);


    document.getElementById("cart-alert").style.display = "block";
}




let numberingCart = document.getElementById("num-cart-items")

let close = document.getElementById("closebtn")
close.addEventListener("click" , closeParent)

let close2 = document.getElementById("closebtn2")
close2.addEventListener("click" , closeFilters)

let clearFromCart = document.getElementsByClassName("button")[0]
clearFromCart.addEventListener("click" , clearedFromCart )


let toggle = document.getElementById("toggle")
toggle.addEventListener("click", showFilters)

let addHpToCart = document.getElementsByClassName("add-to-cart")[0];
let addHpToCart2 = document.getElementsByClassName("add-to-cart")[1];
addHpToCart.addEventListener("click", addedHPToCart)
addHpToCart2.addEventListener("click", addedHPToCart)





//------------------------------------------------

let cartText = (document.querySelectorAll("#cart-alert h4"))[0]
let cartImage = (document.querySelectorAll("#cart-alert .image img"))[0]
let cartPrice = (document.querySelectorAll("#cart-alert .price"))[0]
let cartAlert = document.getElementById("cart-alert");


//cartImage.setAttribute("src", "products/product3.png")

console.log(cartPrice.innerHTML)


//------------------------------------------------




let addToCart = document.querySelectorAll(".addtocart")
for(i=0; i< addToCart.length; i++){
    //(addToCart[i]).addEventListener("click", function(){alert("Item has been added to cart")});
    (addToCart[i]).addEventListener("click", addedToCart);
    console.log(document.ge)
}






let product = document.querySelectorAll(".product")
console.log(product)
for(i=0; i< product.length; i++){
    console.log(product[i])
    
}



console.log(document.getElementById("product" + i))