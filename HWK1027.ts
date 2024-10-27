// 1
const age: number = 25;
let Uname: string = "Alice";

console.log("Age:", age);
console.log("Name:", Uname);

console.log("---------------");

//2
for(let i=1;i<=10;i++){
    if(i%2==1){
        console.log("單數="+i);
    }else{
        console.log("偶數="+i);
    }

}
console.log("---------------");
//3
function printMultiplicationTable(): void {
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log(''); 
    }
  }
  printMultiplicationTable();
  