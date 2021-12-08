const student = [
    {
        roll: 1,
        name: 'Habib',
        income: 1200,
        location: 'uttara',
    },
    {
        roll: 2,
        name: 'shamim',
        income: 4000,
        location: 'mirpur',
    },
    {
        roll: 3,
        name: 'sultan',
        income: 2000,
        location: 'banani',
    },
    {
        roll: 4,
        name: 'rasel',
        income: 1500,
        location: 'uttara',
    },
    {
        roll: 5,
        name: 'rakib',
        income: 1000,
        location: 'mirpur',
    }
]
// console.log(student[2].location);  
// for (let i = 0; i < student.length; i++) {
//     console.log(`
//         roll: ${student[i].roll}
//         name: ${student[i].name}
//         location: ${student[i].location}
//     `);
    
// }  
// student.map((data) => {
//     if (data.roll ==3) {
//         console.log(`
//     name : ${data.name}
//     roll : ${data.roll}
//     location : ${data.location}
//     `);
//     }
// })  
let total = 0;
student.map(data => {
    console.log(`
        id   : ${data.roll} -  name : ${data.name} - location : ${data.location} - income : ${data.income}
    `);
    total = total + data.income;
});
console.log(`total income = ${total}`)
       