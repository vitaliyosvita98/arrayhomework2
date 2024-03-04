const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const totalArray = array1.concat(array2);
console.log(totalArray);

let result = 0;
for(const number of totalArray) {
    result += number;
}
console.log(result);