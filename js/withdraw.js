document.getElementById("withdraw_btn").addEventListener("click", function () {
  let withdrawField = document.getElementById("withdraw_field");
  let withdrawAmountStr = withdrawField.value;
  let withdrawAmount = parseFloat(withdrawAmountStr);

  withdrawField.value = "";

  if (isNaN(withdrawAmount)) {
    alert("Please Enter Your Amount!!");
    return;
  }
  // total balance section
  let totalBalanceElement = document.getElementById("total_balance");
  let totalBalanceStr = totalBalanceElement.innerText;
  let totalBalance = parseFloat(totalBalanceStr);
  if (withdrawAmount > totalBalance) {
    alert("Please Deposit Balance!!");
    return;
  }
  totalBalanceElement.innerText = totalBalance - withdrawAmount;
  // total withdraw section
  let totalWithdrawElement = document.getElementById("withdraw_total");
  let totalWithdrawStr = totalWithdrawElement.innerText;
  let totalWithdraw = parseFloat(totalWithdrawStr);

  totalWithdrawElement.innerText = withdrawAmount + totalWithdraw;
});
