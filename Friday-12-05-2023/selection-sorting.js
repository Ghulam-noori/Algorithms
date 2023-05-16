//A: Question
//Find the lowest number in the array through the selection sorting.

//B:Pseudocode
    //1. Create an outer loop to go over each element once, and store the first element as the smallest value.
    //2. Create an inner for-loop to go over each element in the array, starting from i + 1.
    //3. Create if condition in inner loop to check if the current value is less than the  current lowest. If so, update the lowest to the index of that value.
    //4. Create if condition to  check to see if the lowest ever got changed; if so, swap it with arr[i].
    //5. Swap the arrays
    //6. return the array values
    // 7. print the result in the console by giving the values of the array.





//C:Codes
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
            lowest = j
        }
        }
        if (lowest !== i) {
        // Swap
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }
    }
    return arr
}
  console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]


//Diagram is attached as an image.