// Immediately invoked function expression
(
    function (){
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();

// Immediately invoked function expression with arguments

(
    function (goodLuck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
    }
)(5);