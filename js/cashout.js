// alert()

document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutMoney = document.getElementById('cashout-amount').value;
    const conbertedCashoutMoney = parseFloat(cashOutMoney);
    const mobileNumber = document.getElementById('mobile-number').value;
    console.log(mobileNumber)
    const convertedNumber = parseInt(mobileNumber)
    console.log(convertedNumber)
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin)

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(mobileNumber.length === 11 && mobileNumber.startsWith("01")){
        if(convertedPin === 1234){
            const sum = convertedMainBalance - conbertedCashoutMoney;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('pin thik nai')
        }
    }
    else{
        alert('nooooo')
    }
})