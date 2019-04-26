/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

  

var bankAccount = function (ownerName) {
    "use strict";
    var balance, owner;
    owner = ownerName;
    balance = 0;
    
    var withdrawal, deposit, getBalance, getOwnerName, setOwnerName, withdrawalAmount, depositAmount;    
      
    return {    
        withdrawal: function (withdrawalAmount) {
            if (isNaN(withdrawalAmount)) {
                window.alert("Please enter a valid number.");
            } else {
                balance = balance - Number(withdrawalAmount);
                return balance;
            }
        },
        deposit: function (depositAmount) {
            if (isNaN(depositAmount)) {
                window.alert("Please enter a valid number.");
            } else {
                balance = balance + Number(depositAmount);
                return balance;
            }
        },
        getBalance: function () {
            $("owners_balance").innerHTML = balance;
            return this;
        },
        getOwnerName: function () {
            owner = window.prompt("Enter a new name");
            $("owners_name").innerHTML = owner;
            return this;
        },
        setOwnerName: function () {
            $("owners_name").innerHTML = owner;
            return this;
        }
    };
};

window.addEventListener("load", function () {
   "use strict";    
    
    var bankObject = bankAccount(window.prompt("Please enter your name."));
    bankObject.getBalance();
    bankObject.setOwnerName();
    
    $("yourname").addEventListener("click", function () {
        bankObject.getOwnerName();
        });
    
    //create deposit prompt
    $("deposit").addEventListener("click", function () {
        bankObject.deposit(window.prompt("Please enter the amount to deposit."));
        bankObject.getBalance();
        });

    //create withdrawal prompt
    $("withdrawal").addEventListener("click", function () {
        bankObject.withdrawal(window.prompt("Please enter the amount to withdraw."));
        bankObject.getBalance();
        });
});


/*

<input type="button" id="yourname" value="Name">
<input type="button" id="deposit" value="Deposit">
<input type="button" id="withdrawal" value="Withdrawal"> 
<h2>Your balance</h2>
<div id="display"></div>

*/