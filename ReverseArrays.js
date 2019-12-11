//Reverse Arrays Exercise
function reverseArray(nums)
{
    let rev = [];
    for(let i = nums.length - 1; i >= 0; i--)
    {
        rev.push(nums[i]);
    }
    return rev;
}

//ReverseArrayInPlace
function reverseArrayInPlace(nums)
{
    var front = 0;
    var back = nums.length - 1;
    while(front < back)
    {
        swap(nums, front, back);
        front++;
        back--;
    }
    return nums;
}

function swap(nums, front, back)
{
    var temp = nums[front];
    nums[front] = nums[back];
    nums[back] = temp;
}


let nums = [1,2,3,4,5];
console.log(reverseArrayInPlace(nums));

//Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one runs faster?

//Answer: The reverseInPlace method will run faster and be more useful in situations since the method is more space efficient.
//The space complexity of a reverseInPlace vs the standard way of creating another array and looping is O(1). This saves us from using extra memory space.
//The time complexity is N/2 but since O(N) is the general approximation of the complexity O(N/2) in our case because the 1/2 is regarded as a constant (especially considering high values for N).
//Therefore the final time complexity is said to be linear O(N) (depending only on the value of N: the final execution time grows linearly with N).

