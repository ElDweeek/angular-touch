// Given the data, define the interface for product and use it accordingly.
export const products = [
    {
        name: 'Toshiba',
        price: 25
    },
    {
        name: 'Samsung',
        price: 23,
    }
];
function logProduct(product) {
    console.log(` - ${product.name}, ${product.price}`);
}
console.log('products:');
products.forEach(logProduct);
export const persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
export function logPerson(person) {
    let additionalInformation;
    if ("role" in person) {
        additionalInformation = person.role;
    }
    else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
persons.forEach(logPerson);
