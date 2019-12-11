function range(start, end, step)
{
    let nums = [];

    if(!step > 0)
    {
        for (let i = start; i <= end; i++)
        {
            nums.push(i);
        }
    }
    else
    {
        for (let i = start; i >= end; i+= step)
        {
            nums.push(i);
        }
    }

    return nums;
}

function sum(nums)
{
    let sum = 0;
    for(let value of nums)
    {
        sum+= value;
    }

    return sum;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55




