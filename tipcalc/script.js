function calculateTip(){
    const BillAmount = parseFloat(document.getElementById("billamt").value);
    const tipPercentage = parseFloat(document.getElementById("tipper").value);

    const tipAmt = BillAmount * (tipPercentage/100);
    const totalAmt = tipAmt + BillAmount;

    document.getElementById("tipamt").textContent = tipAmt.toFixed(2);

    document.getElementById("totalamt").textContent = totalAmt.toFixed(2);

}