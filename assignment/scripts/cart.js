console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull()){
        basket.pop;
        return false;
    }
basket.push(item);
return true;
}

console.log('basket contains', basket);
console.log('Adding item to basket', addItem('olives'));
console.log('basket contains', basket);

console.log('Adding item to basket', addItem('orange'));
console.log('basket contains', basket);

console.log('Adding item to basket', addItem('apple'));
console.log('basket contains', basket);

console.log('adding new item', addItem('cheese'));
console.log('basket contains', basket);

console.log('adding new item', addItem('peppers'));
console.log('basket contains', basket);

console.log('Adding item to basket', addItem('pickles'));
console.log('basket contains', basket);

console.log('Adding item to basket test for fullness', addItem('burger'));
console.log('basket contains', basket);

function listItems() {
    for (i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
};

console.log('adding new item', addItem('rice'));
listItems();

function empty() {
    while (basket.length > 0) {
        basket.pop();
    }
    return console.log(basket);
}

function isFull() {
    if(basket.length >= maxItems) {
        return true;
    } 
    else {return false;
}
}

console.log('testing basket is full',isFull());











// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
