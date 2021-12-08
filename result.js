const devs = [
    {
        id: 1,
        name: 'habib',
        skill: 'MERN stack',
        location: 'mirpur',
        gender: 'male',
        income : 10000
    },
    {
        id: 2,
        name: 'sujon',
        skill: 'Laravel',
        location: 'uttora',
        gender: 'male',
        income : 5000
    },
    {
        id: 3,
        name: 'rakib',
        skill: 'Django',
        location: 'mirpur',
        gender: 'male',
        income : 2000
    },
    {
        id: 4,
        name: 'robin',
        skill: 'Golan',
        location: 'banani',
        gender: 'male',
        income : 1500
    },
    {
        id: 5,
        name: 'shamima',
        skill: 'java ',
        location: 'badda',
        gender: 'female',
        income : 1200 
    }
]
let total = 0;
devs.map(data => {
        console.log(`
            roll  : ${data.id}
            name  : ${data.name}
            income  : $${data.income}
            skill  : ${data.skill}
        `);
        total = total + data.income;
    
})
console.log(`total income: $${total}`);



// speacific income
// let mirtotal = 0;

// devs.map(data => {
//     if (data.location == 'mirpur') {
//         console.log(`
//             name  : ${data.name}
//             roll  : ${data.id}
//             income  : $${data.income}
//             skill  : ${data.skill}
//         `);
        
//     }
//     mirtotal += data.income;
//     console.log(`total income: $${mirtotal}`);
// })
