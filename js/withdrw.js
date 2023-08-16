// step 1
document.getElementById('btn-withdrw').addEventListener('click', function () {
    // step 2
    const withdrwField = document.getElementById('withdrw-field');
    const newWithdrwAmountString = withdrwField.value;
    const newWithdrwAmount = parseFloat(newWithdrwAmountString);

    // step 3
    withdrwField.value = '';

    // step 4
    const withdrwTotalElement = document.getElementById('withdrw-total');
    const previousWithdrwTotalElementTotalString = withdrwTotalElement.innerText;
    const previouWithdrwTotal = parseFloat(previousWithdrwTotalElementTotalString);

    // step 5
    const newWithdrwTotal = previouWithdrwTotal + newWithdrwAmount;
    withdrwTotalElement.innerText = newWithdrwTotal;

    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previouBalanceTotalString = balanceTotalElement.innerText;
    const previouBalanceTotal = parseFloat(previouBalanceTotalString);

    // step 7
    const newBalanceTotal = previouBalanceTotal - newWithdrwAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})