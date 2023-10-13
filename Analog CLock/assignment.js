//  Problem 1: Let’s play a mind game........

function mindGame(num)
{
    if((typeof(num)!=='number') || num <0)
    {
         return "please input  a positive integer value & No string";
    }
    console.log((((num*3)+10)/2)-5);
}

const num = 33;
mindGame(num);

// Problem 2: Finding even or odd.......

function evenOdd(str)
{
    if(typeof(str)!=='string')
    {
          return "please input a string";
    }
    else if(str.length&1)
    {
        return "odd"
    }
    return "even;"
}

const str = 'Batch7';
evenOdd(str);



// Problem 3: Is Less or Greater than seven.....

function isLGSeven(num)
{
    if(typeof(num)!=='number')
    {
          return "please input a integer";
    }
    else if((num-7)<7)
    {
        return num-7;
    }
    return num*2;
}

const num = 6;
isLGSeven(6);


// Problem 4: Finding Bad data.......

function findingBadData(arr)
{
    let countt = 0;
    for(let i=0;i<arr.length ;i++)
    {
        if(typeof(arr[i])!=='number')
        {
            return "please input a integer";
        }
    }
    for(let i=0;i<arr.length ;i++)
    {
        if(arr[i]<0)
        {
            countt++;
        }
    }
    return countt;

}

const arr = [ -4, -9,"-5", -33, -55  ];
findingBadData(arr);


// Problem 5: Convert your gems into diamond...

function gemsToDiamond(friend1,friend2,friend3)
{

    const friend1power=21, friend2power=32,friend3power=43;
    if(typeof(friend1)!=='number')
    {
        return "friend1 is not a integer please give a integer number";
    }
    if(typeof(friend2)!=='number')
    {
          return "friend2 is not a integer please give a integer number";
    }
    if(typeof(friend3)!=='number')
    {
         return "friend3 is not a integer please give a integer number";
    }


    let totalEnergy;
    totalEnergy = (friend1*friend1power) + (friend2*friend2power) + (friend3*friend3power);
    if(totalEnergy<1000*2)
    {
        return totalEnergy;
    }
    return totalEnergy-(1000*2);
}

