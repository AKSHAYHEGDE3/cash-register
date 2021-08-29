const billAmount = document.getElementById("bill-amount");
const cashAmount = document.getElementById("cash-amount");
const cashBox = document.getElementById("cash-box");
const msg = document.getElementById("msg");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const returnCash = document.getElementById("returnCash");
const notes = [2000, 500, 100, 50, 10, 5, 1];

function calculateChange(returningAmount) {
  for (i = 0; i <= notes.length; i++) {
    const numberOfNotes = Math.trunc(returningAmount / notes[i]);
    returningAmount = returningAmount % notes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

cashBox.style.display = "none";
nextBtn.addEventListener("click", () => {
  if (isNaN(billAmount.value) || billAmount < 0) {
    msg.innerText = "Inavlid bill amount";
    cashBox.style.display = "none";
  } else {
    msg.innerText = "";
    cashBox.style.display = "block";
  }
});

submitBtn.addEventListener("click", () => {
  if (isNaN(Number(cashAmount.value)) || Number(cashAmount < 0)) {
    msg.innerText = "invalid cash amount";
    console.log('invalid')
  } else {
        if (Number(billAmount.value) <= Number(cashAmount.value)  ) {
            msg.innerText = "";
            const amountToBeReturned = Number(cashAmount.value) - Number(billAmount.value);
            returnCash.innerText = `Return cash - $${amountToBeReturned}`;
            console.log(amountToBeReturned)
            console.log(amountToBeReturned);
            calculateChange(amountToBeReturned);
        } else {
            console.log("pay")
            msg.innerText = "please pay the bill";
        }
  }
});
