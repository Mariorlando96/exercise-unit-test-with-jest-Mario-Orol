// Import all required functions from app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("10 dollars should be correctly converted to yen", function () {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(10);

    // Expected conversion: 10 USD → EUR → YEN
    const euroEquivalent = 10 / 1.07; // USA to EUR
    const expected = euroEquivalent * 156.5; // EUR to YEN

    // This is the comparison for the unit test
    expect(yen).toBeCloseTo(expected, 2); // Allow minor floating-point deviations
})

test("3.5 euros should be correctly converted to dollars", function () {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBeCloseTo(expected, 2); // Allow minor floating-point deviations
})

test("1000 yen should be correctly converted to pounds", function () {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function as intended
    const pounds = fromYenToPound(1000);

    // Expected conversion: 1000 YEN -> EUR -> GBP
    const euroEquivalent = 1000 / 156.5; // YEN to EUR
    const expected = euroEquivalent * 0.87; // EUR to GBP

    // Assert with precision 
    expect(pounds).toBeCloseTo(expected, 2); // Allow minor floating-point deviations
})