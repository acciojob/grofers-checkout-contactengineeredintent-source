const getSumBtn = document.createElement("button");
let tableSelector = document.getElementById("table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
getSumBtn.classList.add("ms-5");
getSumBtn.classList.add("mt-0");
getSumBtn.classList.add("submit");
getSumBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let total = 0;
    let pricesArr = [];
    let prices = document.querySelectorAll(".price");
    prices.forEach((value) => {
        pricesArr.push(Number(value.textContent));
    });
    total = getSum(pricesArr);
    const row = document.createElement("tr");
    const totalTitle = document.createElement("td");
    totalTitle.textContent = "Total";
    const totalSum = document.createElement("td");
    totalSum.textContent = total;
    row.appendChild(totalTitle);
    row.appendChild(totalSum);
    tableSelector.appendChild(row);
});

function getSum(pricesArr){
    let sum = 0;
    for(let i=0; i<pricesArr.length; i++){
        sum += pricesArr[i];
    }
    return sum;
}
