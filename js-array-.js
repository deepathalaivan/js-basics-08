var arr = ["Ram", "aaradiya", "Diya", "Divya", "vihaan"];

console.log(arr.reduce((a, b) => a.length <= b.length ? a : b))