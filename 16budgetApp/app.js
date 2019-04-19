var budgetController = (function(){
    
    
})();


var uiController = (function(){
    
        var uiDomStrings = {
        typeClass: '.add__type',
        descClass: '.add__description',
        valueClass: '.add__value',
        btnClass: '.add__btn'
        }
    
    return {
    
        getInputData: function(){
            return {
                expenseType: document.querySelector(uiDomStrings.typeClass).value,
                expDesc: document.querySelector(uiDomStrings.descClass).value,
                expAmt: document.querySelector(uiDomStrings.valueClass).value
            }
        },
        
        getDomStrings: function(){
            return uiDomStrings;
        }
    }
    
})();


var controller = (function(budgetCtlr, uiCtlr){
    
    var setupEventListeners = function (){
        var uiDomStrings = uiCtlr.getDomStrings();
        document.querySelector(uiDomStrings.btnClass).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event){
           if(event.keyCode === 13 || event.which === 13){
              ctrlAddItem();
            }
        });
    };
    
    
    
    var ctrlAddItem = function(){
        
       // 1. get the field input data
        console.log(uiCtlr.getInputData());
       // 2. add item to the budget controller
       // 3. add item to UI
       // 4. calculate the budget
       // 5. display the budget to UI
        console.log('invoked ctrlAddItem')
    }
    
    return {
        
        init: function(){
            setupEventListeners();
        }
    }
   
})(budgetController, uiController);

controller.init();