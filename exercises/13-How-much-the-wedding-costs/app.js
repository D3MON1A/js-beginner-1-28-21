let guests = prompt('How many people are coming to your wedding?');
function getPrice(guests){
    let cost = 0;
    if( guests <= 50){
        let cost = 4000;
        return cost
    }
    else if( guests <= 100 && guests > 50){
        let cost = 10000;
        return cost
    }
    else if( guests <= 200 && guests > 100){
        let cost = 15000;
        return cost
    }
    else{
        let cost = 20000;
        return cost
    }
    // Your code here
}
let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');



// let guests = prompt('How many people are coming to your wedding?');

// function getPrice(guests){
//     let cost = 0;
//     // Your code here
//     if (guests <= 50) {
//     cost = 4000;
// } else if (guests <= 100) {
//     cost = 10000;
// } else if (guests <= 200) {
//     cost = 15000;
// } else {
//     cost = 20000;
// }
//     return cost;
// }

// let price = getPrice(input);
// console.log('Your wedding will cost '+price+' dollars');