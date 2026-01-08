function generateTempID(){
    const randomPart = Math.random().toString(36).substring(2,8);
    return randomPart.toLocaleUpperCase()

}

const orderID = generateTempID();
console.log('Generated Order ID')