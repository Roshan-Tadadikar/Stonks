const price = document.getElementById("input1");
const quant = document.getElementById("input2");
const currprice = document.getElementById("input3"); 
const btn = document.getElementById("btn");
const opt = document.getElementById("output");
const color = document.getElementById("container");

function myfn(){
    var input1 = Number(price.value);
    var input2 = Number(quant.value);
    var input3 = Number(currprice.value);
    if(input1<=0 || input2<=0 || (input1<=0 && input2<=0)){
        opt.innerText="Please enter values greater than zero";
        return;
    }
    else if(input3==""){
        opt.innerText="Please enter all the inputs";
        return;
    }
   else calculateProfitAndLoss(input1,input3,input2);
};


function calculateProfitAndLoss(price, currprice,quant){
    if(price>currprice){
        color.style.backgroundColor="rgb(251, 113, 133)";
        var loss= (price-currprice)*quant;
        var lossPer = (loss/price)*100;
        opt.innerHTML=`Hey, your loss is ${loss} and your loss Percentage is ${lossPer}%`;
    }
    else if(currprice>price){
        color.style.backgroundColor="";
        var profit = (currprice - price)*quant;
        var profPer = (profit/currprice)*100;
        opt.innerHTML=`Hey, your Profit is ${profit} and your Profit Percentage is ${profPer}%`;
    }
    else{
        color.style.backgroundColor="";
        opt.innerHTML=`No pain no gain and no gain no pain`;
    }
}