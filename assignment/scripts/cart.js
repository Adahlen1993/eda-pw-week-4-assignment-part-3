console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
basket.push(item);
return true;
}

console.log('basket contains', basket);
console.log('Adding item to basket', addItem('olives'));
console.log('basket contains', basket);

console.log('adding new item', addItem('cheese'));
console.log('basket contains', basket);

console.log('adding new item', addItem('peppers'));
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
}

console.log(basket);












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
