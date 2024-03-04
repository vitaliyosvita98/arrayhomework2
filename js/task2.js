const arr1 = [23,1,45,87,4,55,6];
let smallestNumber = arr1[0];
for(const number of arr1) {
    if(number > smallestNumber) {
    smallestNumber = number;
    }
}
console.log(smallestNumber);