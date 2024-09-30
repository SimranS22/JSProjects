const addExpBtn = document.querySelector(".add-expense-btn");
const expList = document.querySelector(".expense-list");
const totExp = document.querySelector(".total-expenses h4");

let expenses = [];
let total = 0;

function renderExp(){

    let html = "";
    expenses.forEach(expenses => {
        html += `
        <div class="expense-item">
            <div class="expense-item-desc">
                ${expenses.description}
            </div>
            <div class="expense-item-amt">
                $${expenses.amount}
            </div>
            <button class="del-exp-btn">
                &times;
            </button>
        </div>
        
        `;
    });

    expList.innerHTML = html;
    totExp.innerText = `Total Expense: $${total}`;
}

function addExp(){
    const desc = prompt("Enter Expense Description: ");
    const amt = parseFloat(prompt("Enter Expense Amount: "));

    if(desc && amt){
        const expense = {
            description:desc,
            amount:amt
        };
        expenses.push(expense);
        total += amt;
        renderExp();
    }
}

addExpBtn.addEventListener("click", addExp);

function delExp(index){
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    renderExp();
}

expList.addEventListener("click", function(event){
    if(event.target.classList.contains("del-exp-btn")){
        const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
        delExp(index);
    }
});