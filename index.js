var btnplus = document.getElementsByClassName('fa-plus-circle');
console.log(btnplus);
var totalElement = document.getElementsByClassName('total')[0]; // Access the first element of total
var price = document.getElementsByClassName('unit-price');
console.log(price[0].textContent);
var quan = document.getElementsByClassName('quantity');
for (let i = 0; i < btnplus.length; i++) {
     btnplus[i].addEventListener('click', function add() {
        
         quan[i].textContent = parseInt(quan[i].textContent) + 1;
 
        
         let sum = 0; 
         for (let j = 0; j < btnplus.length; j++) {
             let itemTotal = parseInt(price[j].textContent) * parseInt(quan[j].textContent);
             sum += itemTotal;
         }
 
        
         totalElement.textContent = sum;
     });
 }
var sum1=0;

var btnmoins=document.getElementsByClassName('fas fa-minus-circle')
console.log(btnmoins[0]);
for (let i = 0; i < btnmoins.length; i++) {
     btnmoins[i].addEventListener('click', function sub() {
         if (parseInt(quan[i].textContent) > 0) {
            
             quan[i].textContent = parseInt(quan[i].textContent) - 1;
             
             
             let sum = 0; 
             for (let j = 0; j < price.length; j++) {
                 let itemTotal = parseInt(price[j].textContent) * parseInt(quan[j].textContent);
                 sum += itemTotal; 
             }
             
             
             totalElement.textContent = sum;
         }
     });
 }

//do the quatity 
var quan=document.getElementsByClassName('quantity')
var delet=document.getElementsByClassName(' fa-trash-alt')
for (let i = 0; i < delet.length; i++) {
     var button=delet[i];
     button.addEventListener('click',function(event){
          var buttonclicked=event.target
          buttonclicked.parentElement.parentElement.parentElement.remove()
          let sum = 0; 
          for (let j = 0; j < price.length; j++) {
              let itemTotal = parseInt(price[j].textContent) * parseInt(quan[j].textContent);
              sum += itemTotal; 
          }
          
          
          totalElement.textContent = sum;

     })
     
}

var like = document.getElementsByClassName('fa-heart');

for (let i = 0; i < like.length; i++) {
    let likeit = like[i];

    
    likeit.addEventListener('click', function() {
      
        var currentColor = window.getComputedStyle(likeit).color;

        
        if (currentColor === 'rgb(255, 0, 0)') { 
            likeit.style.color = 'grey';
        } else {
            likeit.style.color = 'red'; 
        }
    });
}
