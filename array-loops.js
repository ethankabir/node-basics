// In this file I am experimenting with a 
// simple number array and how to loop through (iterate) the items

var myArray = [100, 200, 300]

console.log("myArray length is: " + myArray.length)

// using for()

for (i=0; i < myArray.length; i++)
{
    console.log('for loop %d = %d', i, myArray[i])
}

// using while()

var i = 0
while (i < myArray.length)
{
    console.log('while loop %d = %d', i, myArray[i])
    i++
}

// using forEach() v1
myArray.forEach(item => {

    console.log('forEach v1 %d', item)
})

// using forEach() v2
myArray.forEach((item, i) => {

    console.log('forEach v2 %d %d', i, item)

})