const billBoxEl = document.getElementById("billInput");
const tipBoxEl = document.getElementById("tipInput");
const doneBtn = document.getElementById("CalculateBtn");
const outputBoxEl = document.getElementById("outputBox");

let billAmount = 0;
let tipPercent = 0;
let tipAmount = 0;
let totalAmount = 0;





function tipCalculate() {
    let inNumber = document.getElementById("billInput").value;
    let tipNumber = document.getElementById("tipInput").value;


    if (inNumber === "" || tipNumber === "") {
        outputBoxEl.textContent = "Abhe Chutiye Value Kone Tera Baap Dale Ga!!";
        return;
    }


    let billAmount = Number(inNumber);
    let tipPercent = Number(tipNumber);

    tipAmount = billAmount * tipPercent / 100;

    totalAmount = billAmount + tipAmount;

    outputBoxEl.textContent = totalAmount;




}



doneBtn.addEventListener('click', tipCalculate);