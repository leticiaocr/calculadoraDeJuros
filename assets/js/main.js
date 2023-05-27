document.querySelector('#calculate').addEventListener('click', function (e) {

    e.preventDefault();
    
    const value = document.querySelector('#value').value;
    const fee = (document.querySelector('#fee').value) / 100;
    const period = document.querySelector('#period').value;

    const total = value * (1 + fee) ** period;

    document.querySelector('#total').innerHTML = ("R$" + total.toFixed(2));
})
