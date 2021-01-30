let btnPlus=document.getElementById('plus');
let btnPlusE=document.getElementById('plusE');
let btnMinus=document.getElementById('minus');
let btnMinusE=document.getElementById('minusE');
let inputFirstClass=document.getElementById('FirstClassInput');
let inputEconomyClass=document.getElementById('EconomyInput');
let subTotal=document.getElementById('subTotal');
let Total=document.getElementById('Total');
let Vat=document.getElementById('VAT');

let BookNow=document.getElementById('BookNow');


btnPlus.addEventListener('click',function (){

  increase(inputFirstClass,inputEconomyClass);


})
btnPlusE.addEventListener('click',function (){
    increase(inputEconomyClass,inputFirstClass);


});
btnMinus.addEventListener('click',function (){
    decrease(inputFirstClass,inputEconomyClass);



});
btnMinusE.addEventListener('click',function (){
    decrease(inputEconomyClass,inputFirstClass);




});

BookNow.addEventListener('click',function (){
    let total= calculate(parseInt(inputFirstClass.value),parseInt(inputEconomyClass.value));
    let con=confirm('Your Total is' +total);
   if(con){

       inputEconomyClass.value=0;
       inputFirstClass.value=0
       subTotal.innerText = "$00";
       Total.innerText='$00';
       Vat.innerText='$00';
   }

})





function increase(InputFirstId,InputEconomyId){

    let CountFirst=parseInt(InputFirstId.value);
    CountFirst=CountFirst+1;
   InputFirstId.value=CountFirst;
    let inputEconomy=parseInt(InputEconomyId.value);
    calculate()

}
function decrease(InputFirstId,InputEconomyId){

    let CountFirst=parseInt(InputFirstId.value);
    CountFirst=CountFirst-1;
    if(CountFirst<0){
        alert("you cant decrease");
    }
    else{
    InputFirstId.value=CountFirst;
    let inputEconomy=parseInt(InputEconomyId.value)
        calculate();

    }
}


function calculate(){
     const CountFirst=parseInt(inputFirstClass.value);
     const CountEconomy=parseInt(inputEconomyClass.value);

    const sub = CountFirst*150 +CountEconomy*100;
    subTotal.innerText = sub;
    const tax = Math.round(sub*0.1);
    Vat.innerText = tax;

    const total = sub+tax;
    Total.innerText = total;
    return total
}
