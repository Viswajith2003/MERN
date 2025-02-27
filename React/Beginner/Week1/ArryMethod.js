//Map
const nums = [1, 2, 3, 4, 5];
const s = nums.map((n => n * n));
console.log(s);


//Filter
const even=nums.filter(n=>n%2==0)
console.log(even)

//Reduce
const sum=nums.reduce((a,b)=>a+b)
console.log(sum)

//ForEach
nums.forEach(n=>console.log(n))
