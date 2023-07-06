let expenseValue = []
let expenseAmountValue = []
let sum = ""
let totalExpense = document.getElementById("sum-el")
let expenseInput = document.getElementById("expense-input")
let expenseAmountInput = document.getElementById("amount-input")
let whereExpenseShldBeDisplayed = document.getElementById("expense-el")
let whereExpenseAmountShldBeDisplayed = document.getElementById("amount-el")
let addButton = document.getElementById("add-btn")

addButton.addEventListener("click", function(){
  expenseValue.push(expenseInput.value) 
  expenseInput.value = ""
  expenseAmountValue.push(expenseAmountInput.value)
  expenseAmountInput.value = ""
  renderBothArray()
  totalExpense.textContent = "$ "
})
function renderExpense(expenseValue){
  let listName = ""
  for (let i = 0; i < expenseValue.length; i++){
     listName += " <li>" + expenseValue[i] + "</li>"
  }
  whereExpenseShldBeDisplayed.innerHTML = listName
}

function renderAmount(expenseAmountValue){
  let listPrice = ""
  for (let i = 0; i < expenseAmountValue.length; i++){
     listPrice +=  " <li>" + expenseAmountValue[i] + "</li>"
  }
  whereExpenseAmountShldBeDisplayed.innerHTML = listPrice
}

function renderBothArray(){
  renderExpense(expenseValue);
  renderAmount(expenseAmountValue);
}
