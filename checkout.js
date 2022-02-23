
let products = document.querySelectorAll(".product");
let btnPlus = document.querySelectorAll(".fa-plus");
let btnMinus = document.querySelectorAll(".fa-minus");
let btnRemove = document.querySelectorAll(".remove-product");

let cartSubtotal = document.querySelector('#cart-subtotal p:nth-child(2)');
let cartTax = document.querySelector('#cart-tax p:nth-child(2)');
let cartShipping = document.querySelector('#cart-shipping p:nth-child(2)');
let cartTotal = document.querySelector('#cart-total p:nth-child(2)');

let main = document.querySelector('main');

// Add event listeners to all the buttons

btnPlus.forEach(btnPlus => {

    btnPlus.addEventListener("click",(e) => {  

        let quantity = e.target.parentElement.parentElement.childNodes[3];
        quantity.textContent = Number(quantity.textContent) + 1;

        let price = e.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[0];
        // console.log(price.textContent);
        let price_value = Number(price.textContent).toFixed(2);

        let product_total_price = e.target.parentElement.parentElement.parentElement.childNodes[9].childNodes[0];
        console.log(product_total_price.textContent);
        product_total_price.textContent = Number(price_value) * Number(quantity.textContent);
        product_total_price_value = Number(product_total_price.textContent).toFixed(2);

        price_All = document.getElementsByClassName('product-line-price');
        let price_All_value = 0;
        for(let i = 0; i < price_All.length; i++){
            price_All_value += Number(price_All[i].textContent);
        }
        price_All_value = Number(price_All_value).toFixed(2);

        cartSubtotal.textContent = price_All_value;
        cartTax.textContent = Number(price_All_value * 0.18).toFixed(2);

        cartShipping.textContent = 15.00.toFixed(2);
        cartTotal.textContent = Number(cartSubtotal.textContent) + Number(cartTax.textContent) + Number(cartShipping.textContent);
        cartTotal.textContent = Number(cartTotal.textContent).toFixed(2);
    });
});

// event listener for minus button 

btnMinus.forEach(btnMinus => {
    btnMinus.addEventListener("click",(e) => {  

        let quantity = e.target.parentElement.parentElement.childNodes[3];
        if(quantity.textContent > 1){
            quantity.textContent = Number(quantity.textContent) - 1;
        }

        let price = e.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[0];
        // console.log(price.textContent);
        let price_value = Number(price.textContent).toFixed(2);

        let product_total_price = e.target.parentElement.parentElement.parentElement.childNodes[9].childNodes[0];
        console.log(product_total_price.textContent);
        product_total_price.textContent = Number(price_value) * Number(quantity.textContent);
        product_total_price_value = Number(product_total_price.textContent).toFixed(2);

        price_All = document.getElementsByClassName('product-line-price');
        let price_All_value = 0;
        for(let i = 0; i < price_All.length; i++){
            price_All_value += Number(price_All[i].textContent);
        }
        price_All_value = Number(price_All_value).toFixed(2);

        cartSubtotal.textContent = price_All_value;
        cartTax.textContent = Number(price_All_value * 0.18).toFixed(2);

        cartShipping.textContent = 15.00.toFixed(2);
        cartTotal.textContent = Number(cartSubtotal.textContent) + Number(cartTax.textContent) + Number(cartShipping.textContent);
        cartTotal.textContent = Number(cartTotal.textContent).toFixed(2);
    });
});

// remove button event

btnRemove.forEach(btnRemove => {
    btnRemove.addEventListener("click",(e) => {  
        e.target.parentElement.parentElement.parentElement.remove();
        price_All = document.getElementsByClassName('product-line-price');

        let price_All_value = 0;
        for(let i = 0; i < price_All.length; i++){
            price_All_value += Number(price_All[i].textContent);
        }
        price_All_value = Number(price_All_value).toFixed(2);

        cartSubtotal.textContent = price_All_value;
        cartTax.textContent = Number(price_All_value * 0.18).toFixed(2);

        cartShipping.textContent = 15.00.toFixed(2);
        cartTotal.textContent = Number(cartSubtotal.textContent) + Number(cartTax.textContent) + Number(cartShipping.textContent);
        cartTotal.textContent = Number(cartTotal.textContent).toFixed(2);
    });
});



        

       



