/* 
John's team scored - 89, 120 and 103 points
Mike's team scored - 116, 94 and 123 points

1. calculate the avg score of the teams and decide the winner by average
2. print winner to the console 
*/

var jhonsScores = [89, 120, 103];
var mikesScores = [116, 94, 123];
var mariesScores = [97, 134, 105];

var jhonsAvg = calculateAverage(...jhonsScores);
var mikesAvg = calculateAverage(...mikesScores);
var mariesAvg = calculateAverage(...mariesScores);

calculateWinner(jhonsAvg, mikesAvg, mariesAvg);

function calculateAverage(x, y, z){
    return avg = (x + y + z) / 3;
}

function calculateWinner(jhonsAvg, mikesAvg, mariesAvg){
    
    var firstGreater = getGreater(jhonsAvg, mikesAvg);
    var secondGreater = getGreater(firstGreater, mariesAvg);
    
    switch (true){
        case secondGreater == jhonsAvg:
            console.log('Jhon is the winner with avg: '+jhonsAvg);
            break;
        case secondGreater == mikesAvg:
            console.log('Mike is the winner with avg: '+mikesAvg);
            break;
        case secondGreater == mariesAvg:
            console.log('Marie is the winner with avg: '+mariesAvg);
            break;
        default:
            console.log('Invalid result');
    }
}
       
function getGreater(value1, value2) {
    
    if(value1 > value2){
        return value1;
    }else{
        return value2;
    }
}