const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("for");
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT)
        console.log(studentReport[i])
}

console.log("While");
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT)
        console.log(studentReport[i]);
    i++;
}

console.log("Foreach")

studentReport.forEach(
    (element) => element<LIMIT ? console.log(element) : undefined
)

console.log("for ... in");

for (let index in studentReport) {
    if (studentReport[index] < LIMIT){
        console.log(studentReport[index]);
    }
}