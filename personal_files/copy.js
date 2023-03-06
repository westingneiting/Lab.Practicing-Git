let isItSunny = false;
let isItRaining = true;

if(isItSunny) {
    // console.log("Go for a walk!")
} else if (isItRaining) {
    // console.log("Stay inside and play video games.")
} else {
    // console.log("Go to the movies!")
}
function func1() {
    // console.log("Func 1 was invoked")
} 
// console.log 10-1 in the console, variable example below.


for (let i = 0; i <= 10; i++) {
    // console.log(i)
}
// console log for strings
let str="abcdef";
for (let i = 0; i < str.length; i++){
    // console.log(str[i])
}
// while loop - keyword "while"
// "while this condition is not met, run the code block"


while (condition) {
    'do something here'
}


let idx = 1;

while (idx <= 10) {
    // console.log(idx)

    //always UPDATE the variable to eventually meet the stopping condition
    idx++;
} 


let emptyString = "";
while (!emptyString) {
    // console.log(idx);
    idx++;
    if (idx === 10){
        emptyString = "hello world"
    }
} 

// console.log(emptyString);

while (idx <= 10) {
    if (idx === 3) {
        idx++
        continue;
    }
    if (idx === 7) {
        break;
    }
    // console.log(idx);
    idx++;
}



// example of setting keys as strings - "key1", "key2"
const myObject = {
    //syntax = keyName : value
    "key1": "value 1", //keys are separated by commas
    "key2": "value 2"
}

const myOtherObject = {
    keyName: "value for keyName",
    "second keyname": 2
}
// console.log (myObject)

//accessing values
// Bracket notation (if you want a space in your key)

const myValue = myObject["key1"];
// console.log (myValue);

//Dot notation
const myValue2 = myObject.key1;
// console.log(myValue2);

const myOtherValue2 = myOtherObject.keyName;
// console.log(myOtherValue2); 

//adding values
myObject["key3"] = "value for key3"
//console.log(myObject);
myObject.key4 = "value for key4"
//console.log(myObject);

//changing values
    //we use assignment operator here too (=)
    myObject.key1 = "value for key1";
    myObject["key2"] = "value for key2";
    // console.log(myObject);

    //deleting key/values
    delete myObject.key4;
    // console.log(myObject);

//All about arrays!! 02/27

    const emptyArray = []
    emptyArray[0] = "hello";
    // console.log (emptyArray) //=> ['hello']
    // console.log (emptyArray.length) //=> 1
    emptyArray.push ("red") 
    // console.log (emptyArray) //=> ['hello', 'red']
    emptyArray.shift()
    // console.log(emptyArray) //=> ['red']
    emptyArray.unshift("goodbye")
    // console.log(emptyArray) //=> ['goodbye', 'red']
    // console.log(emptyArray.indexOf("goodbye")) //=> 0 (first element in zero index)
    // console.log(emptyArray.indexOf("adios")) //=> -1 (can't find element in array)

    // cont' 03/01 in arrays2
