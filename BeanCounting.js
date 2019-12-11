//Bean Counting
function countBs()
{
    console.log(countChar("FRRnk", "R"));
}

function countChar(x, y)
{
    let numCaps = 0;
    for(let i = 0; i < x.length - 1; i++)
    {
        if(x.charAt(i) === y.toUpperCase())
        {
            numCaps++;
        }
    }
    return numCaps;
}

countBs();
