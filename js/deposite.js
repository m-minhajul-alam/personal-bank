// step 1
document.getElementById('btn-deposite').addEventListener('click', function () {
    // step 2
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // step 3
    depositeField.value = '';

    // step 4
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previouDepositeTotal = parseFloat(previousDepositeTotalString);

    // step 5
    const newDepositeTotal = previouDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = newDepositeTotal;

    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previouBalanceTotalString = balanceTotalElement.innerText;
    const previouBalanceTotal = parseFloat(previouBalanceTotalString);

    // step 7
    const newBalanceTotal = previouBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})