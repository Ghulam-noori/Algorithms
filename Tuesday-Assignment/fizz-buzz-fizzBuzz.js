//3. FizzBuzz
// Question:
//Create an algorithm that inserts the numbers from 1 to 135 into an array, 
//while replacing the values that are divisible by 3 with the word "Fizz", 
//the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". 
//Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

//B : Pseudocode:
    // 1. create an empty array arr.
    //2. loop the numbers from 1 to 135 through variable i.
    //3. write if condition to see if the numbers are divided by 3 or 5 or the numbers are divided by 3 and 5.
    //3. if the number is divisible by 3 and 5, push the text (fizzBuzz) into the empty array.
    //3. if the number is divisible by only 3, push the text (Fizz) into the empty array.
    //3. if the number is divisible by only 5, push the text (Fizz) into the empty array.
    // 4.print the array in console.log.


//C: Code:

var arr=[]

for(var i=1; i<=135; i++){
if(i % 3 ===0 && i % 5 ===0 ){
arr.push("FizzBuzz");

    }
else if(i%3 ===0){
arr.push("Fizz");
}
else if(i%5 ===0){
arr.push("Buzz")
}

else{
    arr.push(i);
}
}
console.log(arr);

//D: Diagram:
//1. First the program finds the number divisible by 3 and 5 and push the number in the empty array while looping through the number from 1 to 135.
//2. Second the program finds the number divisible by only 3 and push the number in the empty array while looping through the number from 1 to 135.
//3. third the program finds the number divisible by only 5 and push the number in the empty array while looping through the number from 1 to 135.
//4. at the end, program prints the array in console.log.
// 5. output should look like [1,2,'Fizz',4,'Buzz',...]

