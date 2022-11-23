const price = document.getElementById("input1");
const quant = document.getElementById("input2");
const currprice = document.getElementById("input3"); 
const btn = document.getElementById("btn");
const opt = document.getElementById("output");
const color = document.getElementById("content");

function myfn(){
    var input1 = Number(price.value);
    var input2 = Number(quant.value);
    var input3 = Number(currprice.value);
    calculateProfitAndLoss(input1,input3,input2);
};


function calculateProfitAndLoss(price, currprice,quant){
    if(price>currprice){
        color.classList.add("bg-red-400");
        var loss= (price-currprice)*100;
        var lossPer = (loss/price)*100;
        opt.innerHTML=`Hey, your loss is ${loss} and your loss Percentage is ${lossPer}%`;
    }
    else if(currprice>price){
        var profit = (currprice - price)*quant;
        var profPer = (profit/currprice)*100;
        opt.innerHTML=`Hey, your loss is ${profit} and your loss Percentage is ${profPer}%`;
    }
    else{
        opt.innerHTML=`No pain no gain and no gain no pain`;
    }
}