const firstValue = document.querySelector("#first-value");
const secondValue = document.querySelector("#second-value");
const thirdValue = document.querySelector("#third-value");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box")

calculateBtn.addEventListener("click", profitlosscalc);

function profitlosscalc(){
    outputBox.style.display = "none";
    var InitialPrice = Number(firstValue.value);
    var Quantity = Number(secondValue.value);
    var CurrentPrice = Number(thirdValue.value);
    var stockDiff = CurrentPrice - InitialPrice;
    if(InitialPrice.value > 0 && Quantity.value > 0 && CurrentPrice.value){//if (intialprice.value >0 && stockqty.value>0 && currenprice.value >0)
        outputBox.style.display = "block";
        var stockDiff = (InitialPrice - CurrentPrice)*Quantity;
        var finalValue = (stockDiff/InitialPrice)*100;
        outputBox.innerText = `Hey, the profit is ${stockDiff} stock and the percent is ${finalValue}%`;
    }else if(CurrentPrice > InitialPrice){
        outputBox.style.display = "block";
        var stockDiff = (CurrentPrice - InitialPrice)*Quantity;
        console.log(stockDiff, InitialPrice, CurrentPrice);
        var finalValue = (stockDiff/InitialPrice)*100;
        console.log(typeof finalValue);
        outputBox.innerText = `Hey, the profit is ${stockDiff} stock and the percent is ${finalValue}%`;//templete litreals
    }else{
        console.log(CurrentPrice);
        outputBox.style.display = "block";
        outputBox.innerText = `NO PAIN NO GAIN (Kindly Enter Interger Greater Than "0")`;
    }

   
}
