document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addAmount = document.getElementById("add-amount").value;
    const convertedAmount = parseFloat(addAmount);

    const addMoneyPin = document.getElementById("add-money-pin").value;
    const convertedMoneyPin = parseInt(addMoneyPin);
    //   console.log(addMoneyPin)
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // console.log(typeof mainBalance)

    
    if (convertedMoneyPin === 1234) {
    //   console.log("yesss");
      const sum = convertedAmount + convertedMainBalance;
      document.getElementById("main-balance").innerText = sum;
    } else {
      alert("noooooo");
    }
  });
