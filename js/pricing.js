const price=document.querySelectorAll('.price p');
const slider=document.getElementById('myslider');
const monthsPrices=[8,12,16,24,36];
const views=document.getElementById('views');

let percent=50


/*SWITCH*/ 
const mySwitch = document.querySelector('.switch');
const circle = document.querySelector('.circle');
let yearly=false;


views.textContent="100K";

slider.addEventListener('change',()=>{
    showValue(slider.value);
});

const showValue = (newVal)=>{
    if(newVal==='0'){
        percent=0;
        slider.style.background=getColor();
        views.textContent="10K";
        if(yearly===false){
            price[0].textContent=monthsPrices[0];
            price[1].textContent=monthsPrices[0];
        }else{
            price[0].textContent=getDiscount(monthsPrices[0]);
            price[1].textContent=getDiscount(monthsPrices[0]);
        }
        
    }else if(newVal==='25'){
        percent=25;
        slider.style.background=getColor();
        views.textContent="50K";
        if(yearly===false){
            price[0].textContent=monthsPrices[1];
            price[1].textContent=monthsPrices[1];
        }else{
            price[0].textContent=getDiscount(monthsPrices[1]);
            price[1].textContent=getDiscount(monthsPrices[1]);
        }  
    }else if(newVal==='50'){
        percent=50;
        slider.style.background=getColor();
        views.textContent="100K";
        if(yearly===false){
            price[0].textContent=monthsPrices[2];
            price[1].textContent=monthsPrices[2];
        }else{
            price[0].textContent=getDiscount(monthsPrices[2]);
            price[1].textContent=getDiscount(monthsPrices[2]);
        }
    }else if(newVal==='75'){
        percent=75;
        slider.style.background=getColor();
        views.textContent="150K";
        if(yearly===false){
            price[0].textContent=monthsPrices[3];
            price[1].textContent=monthsPrices[3];
        }else{
            price[0].textContent=getDiscount(monthsPrices[3]);
            price[1].textContent=getDiscount(monthsPrices[3]);
        }
    }else if(newVal==='100'){
        percent=100;
        slider.style.background=getColor();
        views.textContent="200K";
        if(yearly===false){
            price[0].textContent=monthsPrices[4];
            price[1].textContent=monthsPrices[4];
        }else{
            price[0].textContent=getDiscount(monthsPrices[4]);
            price[1].textContent=getDiscount(monthsPrices[4]);
        }
    }
}

const defaultPrice = ()=>{
    for(let i=0; i<price.length; i++){
        price[i].textContent=monthsPrices[2];
    }
}

const getDiscount = (price)=>{
    let discount1 = (price*25)/100;
    let finalDiscount = price - discount1;
    return finalDiscount;
}

mySwitch.addEventListener('click',()=>{
    circle.classList.toggle('moving');
    yearly=!yearly;
    showValue(slider.value);
});


const getColor = ()=>{
    return sliderColor=`linear-gradient(to right, var(--softCyan) 0%, var(--softCyan) ${percent}%, var(--lightGrayishBlue1) 0%, var(--lightGrayishBlue1) 100%)`;
}



defaultPrice();
