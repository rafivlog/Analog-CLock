// function mindGame takes a positive number as input.Then with that number 3 is multiplied.Then 10 is added. Then by 2 that number is divided and finally 5 is deducted from that number which then returned.
function mindGame(number){
    if(number.constructor != Number || number<0){
        return "Please enter a positive number";
    }
    number= (number*3) + 10;
    number = number/2;
    number = number -5
    return number;
}

// function evenOdd returns Even if the length of the string parameter is even numbers else it returns Odd depending on the length of the string parameter 
function evenOdd(string){
    if(string.constructor != String){
        return "Please enter a string";
    }
    else{
        if(string.length %2 == 0){
            return "Even";
        }
        else{
            return "Odd";
        }
    }
}
 
// function isLGSeven takes an integer parameter. Then from that input seven is deducted. If the absolute difference found by deducting is less than 7 then it returns the difference else it returns difference multiplied by 2 
function isLGSeven(number){
    if(number.constructor != Number){
        return "Please enter a number";
    }
    else{
        let difference = number-7;
    if(difference<7){
        return difference;
    }
    else{
        return number*2;
    }
    }
}

// function findingBadData takes an integer array as input and returns how many negative numbers are in the array.
function findingBadData(numberarray){
    if(numberarray.constructor !=Array){
        return "Please give input an array";
    }
    let count = 0;
    for(let i=0;i<numberarray.length;i++){
        if(numberarray[i]<0){
            count++;
        }
    }
    return count;
}

// //function gemToDiamond takes three parameter where it multiplies first parameter with 21, second with 32, third with 43. And then total of all that is calculated. If the calculated value is greater or equal to 2000 we have to return the total value - 2000 else we return the calculated total value.
function gemsToDiamond(firstfriend,secondfriend,thirdfriend){
    if(firstfriend === undefined || secondfriend === undefined || thirdfriend === undefined){
        return "Please enter all three perameters";
    }
    if(firstfriend.constructor != Number || secondfriend.constructor != Number || thirdfriend.constructor != Number){
        return "Please enter three numbers";
    }
    firstfriend *=21;
    secondfriend *=32;
    thirdfriend *=43;
    let totalgems = firstfriend+secondfriend+thirdfriend;
    if(totalgems>=2000){
        totalgems -= 2000;
        return totalgems;
    }
    else{
        return totalgems;
    }
}

