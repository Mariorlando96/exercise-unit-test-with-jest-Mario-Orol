// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Conver the given valueInDollar to Yen
    let valueInEuro = valueInDollar / 1.07; // Convert Dollar to Euro
    let valueInYen = valueInEuro * 156.5; // Convert Euro to Yen
    // return the Yen value
    return valueInYen;
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the Dollar value
    return valueInDollar;
}

// We declare the function with the exact name "fromYenToPound" 
const fromYenToPound = function (valueInYen) {
    // Conver the given valueInYen to Pound
    let valueInEuro = valueInYen / 156.5; // Convert Yen to Euro
    let valueInPound = valueInEuro * 0.87; // Convert Euro to Pound
    // return the Pound value
    return valueInPound;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }