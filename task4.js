//
// const character = "#";
// const count = 8;
// const rows = [];
//
// for (let i = 0; i < count; i = i + 1) {
//   rows.push(i);
// }
// console.log(rows)


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""
// console.log(result)

for(let row of rows){
  result = result + row + "\n"
  console.log(result)
}
