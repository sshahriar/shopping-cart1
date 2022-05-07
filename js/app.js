// show cart f
(function(){
    const cartInfo = document.getElementById("cart-info")  ;
    const cart = document.getElementById("cart")  ;

    cartInfo.addEventListener("click",function(){
        cart.classList.toggle("show-cart" ) ; 
    })

})()  ; 



// add item ton  cart 
var cnt = 0 ; 
(function(){
    const cartBtn = document.querySelectorAll(".store-item-icon"  ) ;
    
    console.log( 1)  ;
    console.log( cartBtn)  ;
    console.log( cartBtn.length)  ;
    
 
    
    Array.from(cartBtn).forEach(function(btn)  {
        btn.addEventListener("click",function(event){
            cnt++ ;
            console.log(event.target )  ; 
       
    //     <div class="img-container">
        //     <img src="img/sweets-1.jpeg" class="card-img-top store-img" alt="">
        //     <span class="store-item-icon">
        //       <i class="fas fa-shopping-cart"></i>
        //     </span>
        //   </div>

            if(event.target.parentElement.classList.contains("store-item-icon")) {
            
                let  fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf("img")+ 3 ;
                let partPath  = fullPath.slice(pos) ;  
                
                const item =  {} ;  
            
                console.log( pos , partPath ) ; 

                let name  = 
                event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[0].textContent ; 
                
                let price  = 
                event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[1].textContent ; 
                
                
                console.log(name  , price ) ; 



                let finalPrice = price.slice(1).trim() ; 
                
                item.name = name ; 
                item.price = finalPrice  ; 
                console.log( item ) ; 
                
                

                



                // adding to cart 
            //     <div class="cart-item d-flex justify-content-between text-capitalize my-3">
            //     <img src="img-cart/cake-2.jpeg" class="img-fluid rounded-circle" id="item-img" alt="">
            //     <div class="item-text">
    
            //       <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
            //       <span>$</span>
            //       <span id="cart-item-price" class="cart-item-price" class="mb-0">10.99</span>
            //     </div>
            //     <a href="#" id='cart-item-remove' class="cart-item-remove">
            //       <i class="fas fa-trash"></i>
            //     </a>
            //   </div>
                const cartItem = document.createElement("div" );
                cartItem.classList.add(
                    "cart-item",
                    "d-flex",
                    "justify-content-between" , 
                    "text-capitalize",
                    "my-3" 

                );
                
                cartItem.innerHTML = 
                `<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text">

                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                <i class="fas fa-trash"></i>
                </a>
                </div>`   

                const cart = document.getElementById( "cart") ; 
                const total = document.querySelector(".cart-total-container") ; 
                cart.insertBefore(cartItem, total ) ;
                alert("item added to cart  "  ) ; 
                showTotals() ; 
            }



        }) ; 
        
    }) ;    
    function showTotals() {
        const total =  [] ;
        const items = document.querySelectorAll(".cart-item-price" ) ;

        items.forEach(function(item){
            total.push(parseFloat(item.textContent) ) ;
        }) ; 
        const totalMoney = total.reduce(function(total, item) {
            total+=  item ;
            return total ; 
        },0)  ;

        const finalMoney  = totalMoney.toFixed(2) ;
        document.getElementById('cart-total').textContent = finalMoney ;
        document.querySelector('cart-total').textContent = finalMoney ;
        document.getElementById('cart-count').textContent = total.length ;
        

    }


})();







