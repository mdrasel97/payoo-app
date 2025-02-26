
document.getElementById('add-money-box').style.display = 'block';
document.getElementById('cashout').style.display = 'none';
document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('okkkk')
    document.getElementById('add-money-box').style.display = 'block';
    document.getElementById('cashout').style.display = 'none';
})
document.getElementById('cash-out')
.addEventListener('click', function(){
    document.getElementById('cashout').style.display = 'block';
    document.getElementById('add-money-box').style.display = 'none';
})