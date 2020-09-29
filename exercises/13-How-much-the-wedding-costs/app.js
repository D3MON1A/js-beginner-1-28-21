let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if (guests <= 50) {
    price = 4000;
} else if (guests <= 100) {
    price = 10000;
} else if (guests <= 200) {
    price = 15000;
} else {
    price = 20000;
}
    return cost;
}

let price = getPrice(input);
console.log('Your wedding will cost '+price+' dollars');