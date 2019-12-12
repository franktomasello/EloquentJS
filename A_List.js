//A LIST exercise
//Need to come back to this exercise

let arr = [1,2,3];

function arrayToList(arr)
{
    let list = null;
    for(let i = arr.length - 1; i >= 0; i--)
    {
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list;
}


/////////////////////////////////////////////////////////

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};


function listToArray(list)
{
    let nums = [];

    for(let node = list; node; node = node.rest)
    {
        nums.push( node.value );
    }

    return nums;
}


function prepend(value, rest)
{
    return {value: value, rest: rest};
}

function nth(list, n)
{
    //Recursive solution
    if(n == 0)
    {
        return list.value;
    }
    else
    {
        return nth(list.rest, n - 1);
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


