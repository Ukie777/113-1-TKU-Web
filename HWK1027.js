// 1
var age = 25;
var Uname = "Alice";
console.log("Age:", age);
console.log("Name:", Uname);
console.log("---------------");
//2
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log("單數=" + i);
    }
    else {
        console.log("偶數=" + i);
    }
}
console.log("---------------");
//3
function printMultiplicationTable() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
        }
        console.log('');
    }
}
printMultiplicationTable();
