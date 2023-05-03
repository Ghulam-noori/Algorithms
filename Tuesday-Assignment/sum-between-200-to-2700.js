
//1. Addition
//A: Question:
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. 

//B: //B : Pseudocode:
    // 1. Create a variable called sum, which is equal to 0.
    //2. loop through the number from 200 to 2700 and find the numbers with are divisible by 3 or 5 .
    //3. Create if condition to check if the number is divisible by 3 or 5.
    //4. Add the numbers which are divisible by 3 or 5 in the variable sum.
    //5. Print the variable sum in console.log.

//C: Code:
var sum =0;
for(var i=200;i<=2700;i++){
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}
console.log(sum);

// D : Diagram:
//1. The variable i loops through the values in the array and finds the numbers divisible by 3 or 5.
//2. If the number is divisible by 3 or 5 the coding will add the numbers in the variable sum.
//3. At the end the result of the formula will be printed in console.log.
//4. The output of the for loop will be: 1693182.


