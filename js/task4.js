const arr = ["1-Pyton", "2-C++", "3-C#","4-PHP"];
const toNewArr = ["Pyton", "C++", "C#", "PHP"];
arr.splice(0,5,toNewArr);

console.log(arr);