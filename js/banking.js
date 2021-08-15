// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit button clicked');
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

// update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    
    depositTotal.innerText = newDepositTotal;
//update Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

// clear the deposit input field
    depositInput.value = '';
})


// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('withdraw button clicked')
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);
// set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdraTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdraTotal;
// clear withdraw input
    withdrawInput.value = '';

// update balance 
   const balanceTotal = document.getElementById('balance-total');
   const previousBalanceText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceText);
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotal.innerText = newBalanceTotal;
})