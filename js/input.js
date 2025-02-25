// alert('Hello, world?');

document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const pin = document.getElementById('pin').value;
    console.log(mobileNumber, pin);
})