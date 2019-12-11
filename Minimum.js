// minimum function
function min(a, b)
{
    if(a < b)
    {
        return a;
    }
    else if(b < a)
    {
        return b;
    }
    else
    {
        return "They are equal"
    }
}

console.log(min(0, -10));
