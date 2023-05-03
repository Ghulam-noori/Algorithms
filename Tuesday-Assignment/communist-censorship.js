//A: Question 
//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of 
//the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
//Then make your algorithm work for any word of your choice.

//Pseudocode:
//1. Create an empty array to hold the result.
//2. Write  a function that has arr and target a Word as an argument
//3. Create an empty arr to hold the result.
//4. Create an empty string that will be the "*".
//5. Loop through the array of strings to fid the target word.
//6. Use if statement to find the target word in the array.
//7. If the target word is found in the array, replace it with the "*" character.
//8. After that push each word to the new array.

//C: Code:
function communist(arr, targetWord) {
    let result = [];
    let stars = "";
    for (let i = 0; i < arr.length; i++) {
        if (targetWord === arr[i]) {
            for(let j =0; h<targetWord.length; j++) {
                stars += "*";
            }
            result.push(stars);}
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
    let x = ['Man', 'I','Love','The','Matrix','Program'];
    console.log(communist(X,'Program'));

//D: Diagram:
//1.An empty array will be created  (result).
//2. An empty variable i will be created (Stars).
//3. variable i loops through the array of strings X.
//4. If function find the target word in the array, replace it with the "*" character.
//5. After that push each word to the new array.
//at the end the result will be returned and will be printed to the console.