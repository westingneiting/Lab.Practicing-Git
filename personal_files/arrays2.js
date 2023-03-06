const arrayA = ['a','b','c','d','e']

// console.log('original array', arrayA)
arrayA.splice(1,2)
// console.log('updated array without indexes 1 & 2', arrayA)
arrayA.splice(1,2,'me; im the replacement element')
// console.log('this array removes the updated indexes 1 & 2 and replaces it with', arrayA)

const arrayB = ["whatup", 'its', 'ya boy', 'bob']
const string = arrayB.join('th ')
const stringNoArgument = arrayB.join()
console.log(string)
// console.log(stringNoArgument)

let welcome = 'welcome to hotel hell'
const welcomeInArray = welcome.split(' ')
const welcomeNoArgument = welcome.split()
// console.log('split by our argument', welcomeInArray)
// console.log('theres no split, you see', welcomeNoArgument)

const array1 = ['yo']
const array2 = ['mistuh']
const array3 = ['whight']
const combined = array1.concat(array2, array3)
// console.log(combined)

const nestArray = [1 , [2 , 3] , [[4]] , [[[5] , 6]]]
console.log(nestArray[0])
console.log(nestArray[1][0])
console.log(nestArray[1][1])
console.log(nestArray[2][0][0])
console.log(nestArray[3][0][0][0])
console.log(nestArray[3][0][1]) //each console.log gives me the right number in the terminal.
const newString = nestArray.join(', ')
console.log(newString)