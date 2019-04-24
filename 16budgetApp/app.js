var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    Expense.prototype.calcPercentage = function(totalIncome){
        
        if(totalIncome > 0){
            console.log('tptal income: '+totalIncome);
            this.percentage = Math.round((this.value / totalIncome) * 100);
            console.log('percentage: '+this.percentage);
        }
    }
    
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }
    
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
        },
        budget: 0,
        percentage: -1
    };
    
    var calculateTotal = function(type){
        
        var sum = 0;
        data.allitems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.totals[type] = sum;
    };
    
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
        },
        
        deleteItem: function(type, id){
            
            var ids, index;
            ids = data.allitems[type].map(function(current){
                return current.id;
            });
            index = ids.indexOf(id);
            
            if(index !== -1){
                data.allitems[type].splice(index, 1);   
            }
        },
        
        calculateBudget: function(){
            
            // calculate the total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // calculate the percentage of income that we spent
            if(data.totals.inc > 0){
               data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } 
        },
        
        calculatePercentages: function(){
            
            data.allitems['exp'].forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },
        
        getPercentages: function(){
            
            var allPerc = data.allitems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPerc;
        },
        
        getBudget: function(){
            
            return {
                totalinc: data.totals.inc,
                totalExp: data.totals.exp,
                percent: data.percentage,
                budget: data.budget
            }
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
            expenseListClass: '.expense__list',
            incomeDisplayClass: '.budget__income--value',
            expenseDisplayClass: '.budget__expenses--value',
            budgetPercentClass: '.budget__expenses--percentage',
            budgetValueClass: '.budget__value',
            containerClass: '.container',
            expItemsPercentClass: '.item__percentage'
        }
    
    return {
    
        getInputData: function(){
            return {
                expenseType: document.querySelector(uiDomStrings.typeClass).value,
                expDesc: document.querySelector(uiDomStrings.descClass).value,
                expAmt: parseFloat(document.querySelector(uiDomStrings.valueClass).value)
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
               html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">- %value%</div> <div class="item__percentage"> --- </div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div> </div>';
            }
            
            // replace the placeholder text with some actual data
            htmlWithData = html.replace('%id%', obj.id);
            htmlWithData = htmlWithData.replace('%value%', obj.value);
            htmlWithData = htmlWithData.replace('%description%', obj.description);
            
            // insert the html in to the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', htmlWithData);
        },
        
        deleteListItem: function(selectorId){
            
            var el;
            el = document.getElementById(selectorId);
            console.log(el.parentNode);
            el.parentNode.removeChild(el);
        },
        
        getDomStrings: function(){
            return uiDomStrings;
        },
        
        displayPercentages: function(percentages){
            
            var fields = document.querySelectorAll(uiDomStrings.expItemsPercentClass);
           
            for(var i = 0; i < fields.length; i++){
                fields[i].textContent = percentages[i] +' %';
            }
        },
        
        clearFields: function(){
            
            var fields, fieldsArr;
            fields = document.querySelectorAll(uiDomStrings.descClass +','+ uiDomStrings.valueClass);
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array){
                current.value = '';
                if(index === 0){
                   current.focus();
                }
            });
        },
        
        updateBudgetToUI: function(budget){
            
            document.querySelector(uiDomStrings.incomeDisplayClass).textContent = '+ '+budget.totalinc;
            document.querySelector(uiDomStrings.expenseDisplayClass).textContent = '- '+budget.totalExp;
            
            if(budget.percent > 0){
               document.querySelector(uiDomStrings.budgetPercentClass).textContent = budget.percent + '%';
            }else {
               document.querySelector(uiDomStrings.budgetPercentClass).textContent = '---';
            }
            
            document.querySelector(uiDomStrings.budgetValueClass).textContent = '+ '+budget.budget;
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
        
        document.querySelector(uiDomStrings.containerClass).addEventListener('click', ctrlDeleteItem);
    };
    
    var updateBudget = function(){
        
        // 4. calculate the budget
        budgetCtlr.calculateBudget();
        
        var budget = budgetCtlr.getBudget();
        
        // 5. display the budget to UI
        uiCtlr.updateBudgetToUI(budget);
    };
    
        var updatePercentages = function(){
      
        // calculate percentages
        budgetCtlr.calculatePercentages();
        
        // read from budget controller
        var percentages = budgetCtlr.getPercentages();
        
        // update UI with new percentages
        uiCtlr.displayPercentages(percentages);
    };
    
    var ctrlAddItem = function(){
        
       // 1. get the field input data
        var input = uiCtlr.getInputData();
        
        if(input.expDesc !== '' && !isNaN(input.expAmt) && input.expAmt > 0){
           
            // 2. add item to the budget controller
            var newItem = budgetCtlr.addItem(input.expenseType, input.expDesc, input.expAmt);

            // 3. add item to UI
            uiCtlr.addListItem(newItem, input.expenseType);

           // 4. clear fields after adding item
            uiCtlr.clearFields();

           // 5. update the budget
            updateBudget();
            
           // 6 calculate and update percentages
            updatePercentages();
        }
    };
    
    var ctrlDeleteItem = function(event){
      
        var itemId, splitId, type, id;
        
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemId){
            splitId = itemId.split('-')
            type = splitId[0];
            id = splitId[1];
            
            // 1. delete the item from the data structure
            budgetCtlr.deleteItem(type.substring(0, 3), parseInt(id));
            
            // 2. Delete the item from the UI
            uiCtlr.deleteListItem(itemId);
            
            // 3. Update and show the new budget
            updateBudget();
            
            // 4. calculate and update percentages
            updatePercentages();
        }
    };
    
    return {
        
        init: function(){
            setupEventListeners();
        }
    };
   
})(budgetController, uiController);

controller.init();