/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */

const moeda = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
    }
    
    
    function checkCashRegister(price, cash, cid) {
    
      let troco = cash * 100 - price * 100;
      let trocoCheck = troco;
      let change = [];
      let status = '';
    
      let cidSoma = 0;
      let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
    
      filteredCid.forEach(elem => {
        let moedaAtual = elem[0];
        let somaAtual = elem[1] * 100;
        cidSoma += somaAtual;
        let quantidade = 0;
        while (troco >= moeda[moedaAtual] && somaAtual > 0) {
          quantidade += moeda[moedaAtual];
          troco -= moeda[moedaAtual];
          somaAtual -= moeda[moedaAtual];
        }
        if (quantidade !== 0) {
          change.push([moedaAtual, quantidade / 100]);
        }
      });
    
      if (troco > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
      } else if (troco == 0 && trocoCheck == cidSoma) {
        status = 'CLOSED';
        change = cid;
      } else {
        status = 'OPEN';
      }
      return { 'status': status, 'change': change };
    }
    
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));