


// CALCULAR O VALOR FINAL 
document.querySelector('#calculate').addEventListener('click', function (e) {

    e.preventDefault();

    const value = parseFloat(document.querySelector('#value').value);
    const fee = parseFloat(document.querySelector('#fee').value) / 100;
    const period = parseFloat(document.querySelector('#period').value);
    const monthlyValue = parseFloat(document.querySelector('#monthlyValue').value)


    const total = (value * (1 + fee) ** period) + (monthlyValue * (((1 + fee) ** period) - 1) / fee);


    document.querySelector('#total').innerHTML = ("R$" + total.toFixed(2));
})


// LIMPAR INPUTS
const clean = document.querySelector('#clean');
const inputs = document.querySelectorAll('input');

clean.addEventListener('click', function (e) {
    e.preventDefault();
    inputs.forEach((input) => {
        input.value = "";
    });
});






