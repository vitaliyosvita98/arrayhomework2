const arr = ["Python", "C++", "C#", "PHP"];
const valueNeed = "JavaScript";
if(arr.includes(valueNeed)) {
    console.log("Є в масиві");
}
else {
    console.log("Значення Java Script в списку немає, додаємо в масив");
    arr.push(valueNeed);
}
console.log(arr);