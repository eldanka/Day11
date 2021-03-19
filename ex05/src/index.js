var myNestedArray = [["Dogs", 1], ["Cats", 2]];

function myNestedFunction(arr) {
    myNestedArray.pop();
    myNestedArray.shift();
    return myNestedArray = arr;
}

console.log(myNestedFunction([["Toblerone", 5], ["Milka", 3]]));

