// A. Question
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
//titleCase("I'm a little tea pot")should return a string.
//titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
//titleCase("sHoRt AnD sToUt") should return "Short And Stout".

//Pseudocode:
//1. We create a function titleCase(str) that takes a string as an argument.
//2. We use toLowerCase and split methods to split the sentence and convert the call calling string value converted to lowercase
//3. The split() method splits a String object into an array of strings by separating the string into substrings.
//4. We use the charAt() method to return the specified character from a string.
//5. We use the slice() method extracts a section of a string and returns a new string.
//6. We use join() method to join all elements of an array into a string.
// 7. We use the loop function to loop through the array and capitalize the first string of a word.


//C:Code.
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ')
};
console.log(titleCase("I'm a little tea pot"));

//Diagram: The diagram is uploaded as an image.