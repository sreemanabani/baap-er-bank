//1.Deposite button clicking
document.getElementById('deposite-button').addEventListener('click', function () {
    //Deposite total
    const depositeInput = document.getElementById('deposite-input');
    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;

    depositeTotal.innerText = newDepositeTotal;
    depositeInput.value = "";

    // Balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;
})

//Handle with withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw click');\
    const withDrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withDrawInput.value;

    const newWithDrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithDrawAmount);

    //set withdraw total
    const withDrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withDrawTotal.innerText;
    const previousWithdrawtotal = parseFloat(previousWithdrawText);
    const newWithDrawTotal = previousWithdrawtotal + newWithDrawAmount;
    withDrawTotal.innerText = newWithDrawTotal;


    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input
    withDrawInput.value = "";

})