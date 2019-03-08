/* 
    write a program to calculate tips 
    where
    we would like to tip:
    1. 20% of the bill when the bill is less than $50
    2. 15% when the bill is between $50 and $200
    3. 10% when the bill is more than $200
    
    output the final paid amounts and the tips.
*/

// function decleration
function computeTipPercentage(tip){
        
    switch (true){
            case tip < 50:
                return 20;
            case tip >= 50 && tip < 200:
                return 15;
            case tip > 200:
                return 10;
        default:
            console.log("error calculating tip %");
    }
}

function calculateTip(tipPercentage, billAmount){
    
    return (billAmount * tipPercentage) / 100;
}

// Program starts here
var billAmount = [124, 48, 268];

var amountPaid = new Array();
var tipPaid = new Array();

for(var i = 0; i < billAmount.length; i++){
    
    var tipPercentage = computeTipPercentage(billAmount[i]);
    var tip = calculateTip(tipPercentage, billAmount[i]);
    amountPaid.push(tip + billAmount[i]);
    tipPaid.push(tip);
}

console.log('bill amount : ', billAmount)
console.log('amountPaid : ', amountPaid);
console.log('tipPaid : ', tipPaid);