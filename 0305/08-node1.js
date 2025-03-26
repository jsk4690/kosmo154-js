console.log("안녕하세요 반갑습니다.");

const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");
// 데이터가 위에서 아래로: split("\r\n") > 백준 알고리즘에 제출할 때는 split("\n")으로 해야 함
// 데이터가 스페이스로 한 번 띄어져 있음: split(" ")

var result = parseInt(input[0])+parseInt(input[1]);
console.log(result);
// console.log(input[0]);
// console.log(input[1]);
// console.log(input);
// console.log(typeof input);