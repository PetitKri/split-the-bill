//HW 1
// let number = 123456789.123456789
// console.log(number.toFixed());
// console.log(number.toFixed(4));

//HW 2
// for (i=5; i<51; i++){
//     console.log(i);
// }

//Calculator app

const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display = 'block';
}

function calculateAmount(e){
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;

    if(bill === '' || people === ''){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter your information!",
          });
    }

    let amountPerPerson = bill/people;
    let tipPerPerson = (bill*tip)/people;
    let totalSum = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#dividedBill').textContent = amountPerPerson;
    document.querySelector('#dividedTip').textContent = tipPerPerson;
    document.querySelector('#billAndTip').textContent = totalSum;
}