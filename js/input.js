// alert('Hello, world?');

document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const convertedNumber = parseInt(mobileNumber);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    
    // console.log(typeof convertedPin, typeof convertedNumber)
    if(mobileNumber.length === 11 && mobileNumber.startsWith("01")){
        console.log('mobileNumber')
        if(convertedPin === 1234){
            window.location.href="main.html";
        }
        else{
            alert('Noooo, this pin is invalid')
        }
    }
    else{
        alert('please a valid Number input')
    }
})