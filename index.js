// -------------js for toggle menu---------

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight =  "0px";
function menutoggle(){
    if(MenuItems.style.maxHeight ==  "0px")
    {
        MenuItems.style.maxHeight =  "200px";
    }
    else
    {
        MenuItems.style.maxHeight =  "0px"; 
    }
}

// ----------------js for img change into product details----------------

var productImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("small-img");
 SmallImg[0].onclick = function()
 {
     productImg.src = SmallImg[0].src;
 }
 SmallImg[1].onclick = function()
 {
     productImg.src = SmallImg[1].src;
 }
 SmallImg[2].onclick = function()
 {
     productImg.src = SmallImg[2].src;
 }
 SmallImg[3].onclick = function()
 {
     productImg.src = SmallImg[3].src;
 }

//  ---------------js for login form-------------

