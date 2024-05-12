function calcMatAmtSI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);

    const matureSI = principal + (principal * interestRate * tenure) / 100;

    document.getElementById('result').innerText = `Maturity Amount: ₹${matureSI.toFixed(2)}`;
}

function calcMatAmtCI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseFloat(document.getElementById("tenure").value);
    const fcomp = parseFloat(document.getElementById("fcomp").value);

    const matureCI = principal * Math.pow((1 + interestRate / (100 * fcomp)), fcomp * tenure);

    document.getElementById('result').innerText = `Maturity Amount: ₹${matureCI.toFixed(2)}`;
}

document.getElementById("calculateBtn").addEventListener("click", function() {
    const opt = document.getElementById("interestType").value;

    if (opt === "1") {
        calcMatAmtSI();
    } else if (opt === "2") {
        calcMatAmtCI();
    }
});
