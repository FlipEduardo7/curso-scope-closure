/*function moneybox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log("Tienes "+saveCoins + " coins");
}

moneybox(5);
moneybox(5);*/

function moneybox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log(`Tienes $${saveCoins} coins`);
    }
    return countCoins;
}

const myMoneybox = moneybox();
myMoneybox(5);
myMoneybox(5);
myMoneybox(15);

const moneyboxAna = moneybox();
moneyboxAna(10);
moneyboxAna(20);
moneyboxAna(5);