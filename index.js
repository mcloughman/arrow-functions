// arrow functions can only be used as shorthand for anonymous function expressions
// must put parentheses if there are 0 or 2+parameters
// Return statement implied if you leave out curly braces
// they don't make their own keyword "this"

// const double = arr => arr.map(val => val * 2)


const squareAndFindEvens = arr => {
    const squares = arr.map(num => num ** 2)
    const evens = squares.filter(square => square % 2 === 0)
    console.log(evens)
    return evens;
}

squareAndFindEvens([2,3,4,5,6]);

const squareAndFindOdds = arr => arr.map(num => num ** 2).filter(squaredNum => squaredNum % 2 !== 0);

console.log(squareAndFindOdds([2,3,4,5,6,7]))









