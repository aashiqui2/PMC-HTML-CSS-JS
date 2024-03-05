// sort method
//it is used to sort the array alphabatically.
//To correctly sort an array of numbers, you should provide a compare function to the sort() method. This function takes two parameters (usually denoted as a and b) and returns a negative, zero, or positive value, indicating the order of the elements.
 //working of compare function
 //a negative number-if A is smaller than B,so A will be sorted to the left of B
 //A positive number- if A is bigger than B,so A will be sorted to the right of B
 //zero-If it is equal, so it doesn't matter which comes first

 //Points to be noticed:
//  Yes, that's correct. The sort() method in JavaScript sorts the elements of an array in place, which means it directly modifies the original array. It doesn't create a new array with sorted elements; instead, it rearranges the elements within the existing array.


let compare = (a, b)=>{
    //   return b - a //(descending)
    return a-b //(ascending)
    }
    let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
    // num1.sort()//sort alphabatically by unicode
    num1.sort(compare)
    num1.reverse()
    console.log(num1)


    let a=[1,2,3,4,5]
    let min=Math.min.apply(null,a)
    let max=Math.max.apply(null,a)
    console.log(min);
    console.log(max);