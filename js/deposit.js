document.getElementById("deposit_btn").addEventListener("click", function () {
  let depositField = document.getElementById("deposit_field");
  let depositAmountStr = depositField.value;
  let depositAmount = parseFloat(depositAmountStr);

  depositField.value = "";

  if (isNaN(depositAmount)) {
    alert("Please Enter Your Amount!!");
    return;
  }
  // total deposit section
  let depositTotalElement = document.getElementById("deposit_total");
  let depositTotalStr = depositTotalElement.innerText;
  let depositTotal = parseFloat(depositTotalStr);
  // deposit total balance
  let totalBalanceElement = document.getElementById("total_balance");
  let totalBalanceStr = totalBalanceElement.innerText;
  let totalbalance = parseFloat(totalBalanceStr);
  totalBalanceElement.innerText = totalbalance + depositAmount;

  depositTotalElement.innerText = depositAmount + depositTotal;
});
