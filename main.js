// let obj= {
//     id: 783190,
//     pasword:78195
// }

// Object.freeze(obj)

// obj.id=41
// obj.pasword=74

// console.log(obj);


// let obj = {
//     id: 1,
//     isStudent: true,
//     userName: 'me',
//     password: 9990

// }


// for (let key in obj) {

//     if (obj.hasownProperty(key)) {
//         let newvalue = key + 'A';
//         obj[newvalue] = obj[key];
//         delete obj[key]
//     }

// }

// console.log(obj);

let obj = {
    name: 'Dora',
    age: 17,
    city: 'Germany'

}

for (let value in obj) {
    console.log(obj[value]);
}