var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allitems: {
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0
        }
    }
    
    return {
        addItem: function(type, desc, val){
            var newItem, Id;
            
            if(data.allitems[type].length > 0){
               Id = data.allitems[type][data.allitems[type].length - 1].id + 1;
            } else {
               Id = 0;
            }
            if('inc' === type){
                newItem = new Income(Id, desc, val);
            }else{
                newItem = new Expense(Id, desc, val);
            }
            data.allitems[type].push(newItem);
            return newItem;
        }
    }
})();


var uiController = (function(){
    
        var uiDomStrings = {
        typeClass: '.add__type',
        descClass: '.add__description',
        valueClass: '.add__value',
        btnClass: '.add__btn',
        incomeListClass: '.income__list',
        expenseListClass: '.expense__list'
        }
    
    return {
    
        getInputData: function(){
            return {
                expenseType: document.querySelector(uiDomStrings.typeClass).value,
                expDesc: document.querySelector(uiDomStrings.descClass).value,
                expAmt: document.querySelector(uiDomStrings.valueClass).value
            }
        },
        
        addListItem: function(obj, type){
            
            var html, htmlWithData, element;
            
            // create HTML string with place holder text
            if('inc' === type){
                element = uiDomStrings.incomeListClass;
               html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else {
                element = uiDomStrings.expenseListClass;
               html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">- %value%</div> <div class="item__percentage">%itemPercent%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div> </div>';
            }
            
            // replace the placeholder text with some actual data
            htmlWithData = html.replace('%id%', obj.id);
            htmlWithData = htmlWithData.replace('%value%', obj.value);
            htmlWithData = htmlWithData.replace('%description%', obj.description);
            
/*          
            if('exp' === type){
                htmlWithData = html.replace('%itemPercent%', );
            }
*/
           
            
            // insert the html in to the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', htmlWithData);
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
        var input = uiCtlr.getInputData();
       // 2. add item to the budget controller
        var newItem = budgetCtlr.addItem(input.expenseType, input.expDesc, input.expAmt);
        console.log(newItem);
       // 3. add item to UI
        uiCtlr.addListItem(newItem, input.expenseType);
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