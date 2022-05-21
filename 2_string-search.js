const products = [
    'dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenono commercial yoga laptop',
    'LG supernoba laptop',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];

const searching = 'Dell';

// indexOf()  (first matching index)

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

// includes() _kono index number nai. indexOf() er moto !=-1 dile kaj korbe na.
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}

// console.log(output);

// starts with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);