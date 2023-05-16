//A. Game of 3s
    //The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

    //Input Description
    //The input is a single number: the number at which the game starts.

    //gameOfThree(100);

//Pseudocode
//1. Create a function to return the result for game of three.
//2. Create an empty array.
//3. While loop through if the number is not equal to 1.
//4. Check if the number is divisible by 3 then divide the number by 3 and push the number into the empty array.
//5. If the remainder of the number divided by 3 is -1 write one, if the remainder is not one then write 1.
//6. divide the number by 3 and push into the empty array.


//C: Code => One method

function gameOfThree(num) {
    const firstStep =[];
    while (num !==1) {
        if (num % 3 == 0){
            firstStep.push(`${num} ${0}`);
            num = num / 3;
        }else{
            let nextStep = num % 3===1 ? -1 :1
            firstStep.push(`${num} ${nextStep}`)
            num = (num + nextStep)/3;
        }
    }
    firstStep.push('1');
    return firstStep.join('\n');
}
console.log(gameOfThree(100));


// second method


function gameOfThree1(num1) {
    const firstStep1 =[];
    while (num1 !==1) {
        if (num1 % 3 == 0){
            firstStep1.push(`${num1} ${0}`);
            num1 = num1 / 3;
        }else if(num1 % 3 == 1){
            firstStep1.push(`${num1} ${"-1"}`);
            num1 = (num1-1 )/ 3;
        }
        else{
            firstStep1.push(`${num1} ${"1"}`);
            num1 =(num1+1)/3;
        }
    }
    firstStep1.push('1');
    return firstStep1.join('\n');
}
console.log(gameOfThree1(100));
