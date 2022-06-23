// here I am exploring the difference between 'var' and 'let' scopes

/*
 *  References:
 *  The main difference is scoping rules. Variables declared by var keyword are scoped to the 
 *  immediate function body (hence the function scope) while let variables are scoped to the immediate 
 *  enclosing block denoted by { } (hence the block scope).
 *  Source: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
 */

var x = 100
let y = 200 

console.log('x = %d', x )
console.log('y = %d', y)
console.log('--------------------------')

// New block
{
    // The 'let' keyword allows us to declear a local variable within the block scope
    let x = 300
    console.log('x = %d', x )
    console.log('y = %d', y)
    
}

console.log('--------------------------')
console.log('x = %d', x )
console.log('y = %d', y)
