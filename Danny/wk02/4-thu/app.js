function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var saving = {
  balance: 0,
  max: 999999,
  withDrawBtn: document.querySelector("#withDrawSaving"),
  depositBtn: document.querySelector("#depositSaving"),
  amountInput: document.querySelectorAll(".amountInput")[0],
  balanceLabel: document.querySelectorAll(".balance")[0],
  container: document.querySelectorAll(".account")[0],
  deposit: function() {
    var amount = Number(saving.amountInput.value);
    if (!isNaN(amount) && amount > 0) {
      saving.balance += amount;
      saving.balanceLabel.textContent = "$" + numberWithCommas(saving.balance)
      alert("Successfully deposited " + "$" + numberWithCommas(amount) + " to saving account!" + "\n" + "Balance: " + "$" + numberWithCommas(saving.balance));
      saving.amountInput.value = "";
      checkBalance()
    } else {
      alert("Invalid or empty input, please try again!");
      saving.amountInput.value = "";
    }

  },

  withDraw: function() {
    var amount = Number(saving.amountInput.value);
    if (!isNaN(amount) && amount > 0) {
      if (saving.balance >= amount) {
        saving.balance -= amount;
        saving.balanceLabel.textContent = "$" + numberWithCommas(saving.balance);
        alert("Successfully withDrew " + "$" + numberWithCommas(amount) + " from saving account!" + "\n" + "Balance: " + "$" + numberWithCommas(saving.balance));
        saving.amountInput.value = "";
      } else {
        if ((saving.balance + checking.balance) >= amount) {
          var savingBal = saving.balance;
          amount -= saving.balance;
          saving.balance = 0;
          checking.balance -= amount;
          saving.balanceLabel.textContent = "$" + numberWithCommas(saving.balance);
          checking.balanceLabel.textContent = "$" + numberWithCommas(checking.balance);
          alert("Successfully withdrew " + "$" + numberWithCommas(savingBal) + " from saving account, $ " + numberWithCommas(amount) + " from checking account!" + "\n" + "Balance: Saving " + "$" + numberWithCommas(saving.balance) + ", Checking: " + "$" + numberWithCommas(checking.balance));
          saving.amountInput.value = "";
        } else {
          alert("Insufficient balance, please try again!");
          saving.amountInput.value = "";
        }
      }
      checkBalance()
    } else {
      alert("Invalid or empty input, please try again!");
      saving.amountInput.value = ""
    }
  }

}

var checking = {
  balance: 0,
  max: 999999,
  withDrawBtn: document.querySelector("#withDrawCheck"),
  depositBtn: document.querySelector("#depositCheck"),
  amountInput: document.querySelectorAll(".amountInput")[1],
  balanceLabel: document.querySelectorAll(".balance")[1],
  container: document.querySelectorAll(".account")[1],
  deposit: function() {
    var amount = Number(checking.amountInput.value);
    if (!isNaN(amount) && amount > 0) {
      checking.balance += amount;
      checking.balanceLabel.textContent = "$" + numberWithCommas(checking.balance);
      alert("Successfully deposited " + "$" + numberWithCommas(amount) + " to checking account!" + "\n" + "Balance: " + "$" + numberWithCommas(checking.balance));
      checking.amountInput.value = ""
      checkBalance()

    } else {
      alert("Invalid or empty input, please try again!");
      checking.amountInput.value = ""
    }
    checkBalance()
  },
  withDraw: function() {
    var amount = Number(checking.amountInput.value);
    if (!isNaN(amount) && amount > 0) {
      if (checking.balance >= amount) {
        checking.balance -= amount;
        checking.balanceLabel.textContent = "$" + numberWithCommas(checking.balance);
        alert("Successfully withDrew " + "$" + numberWithCommas(amount) + " from checking account!" + "\n" + "Balance: " + "$" + numberWithCommas(checking.balance));
        checking.amountInput.value = ""
        checkBalance()
      } else {
        if ((saving.balance + checking.balance) >= amount) {
          var checkingBal = checking.balance;
          amount -= checking.balance;
          checking.balance = 0;
          saving.balance -= amount;
          checking.balanceLabel.textContent = "$" + numberWithCommas(checking.balance);
          saving.balanceLabel.textContent = "$" + numberWithCommas(saving.balance);
          alert("Successfully withdrew " + "$" + numberWithCommas(checkingBal) + " from checking account, $ " + numberWithCommas(amount) + " from saving account!" + "\n" + "Balance: Checking " + "$" + numberWithCommas(checking.balance) + ", Saving: " + "$" + numberWithCommas(saving.balance));
          checking.amountInput.value = "";
          checkBalance()
        } else {
          alert("Insufficient balance, please try again!");
          checking.amountInput.value = ""
        }
      }
    } else {
      alert("Invalid or empty input, please try again!");
      checking.amountInput.value = ""
    }
    checkBalance()

  }
}

var checkBalance = function() {
  if (checking.balance === 0) {
    checking.container.style.backgroundColor = "#E11921"
  } else {
    checking.container.style.backgroundColor = "gray"
  }

  if (saving.balance === 0) {
    saving.container.style.backgroundColor = "#E11921"
  } else {
    saving.container.style.backgroundColor = "gray"
  }
}


saving.depositBtn.addEventListener("click", saving.deposit)
saving.withDrawBtn.addEventListener("click", saving.withDraw)


checking.depositBtn.addEventListener("click", checking.deposit)
checking.withDrawBtn.addEventListener("click", checking.withDraw)

saving.balanceLabel.textContent = "$" + numberWithCommas(saving.balance)
checking.balanceLabel.textContent = "$" + numberWithCommas(checking.balance)


checkBalance()
