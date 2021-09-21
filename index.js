const firstValue = document.querySelector("#first-value");
const secondValue = document.querySelector("#second-value");
const thirdValue = document.querySelector("#third-value");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box")

calculateBtn.addEventListener("click", profitlosscalc);

function profitlosscalc(){
    var InitialPrice = Number(firstValue.value);
    var Quantity = Number(secondValue.value);
    var CurrentPrice = Number(thirdValue.value);
    var stockDiff = CurrentPrice - InitialPrice;
    if(InitialPrice > CurrentPrice){
        var stockDiff = (InitialPrice - CurrentPrice)*Quantity;
        var finalValue = (stockDiff/InitialPrice)*100;
    }else{
        var stockDiff = (CurrentPrice - InitialPrice)*Quantity;
        console.log(stockDiff, InitialPrice, CurrentPrice);
        var finalValue = (stockDiff/InitialPrice)*100;
        outputBox.innerText = `Hey, the profit is ${stockDiff} stock and the percent is ${finalValue}%`;//templete litreals
    }

   
}
