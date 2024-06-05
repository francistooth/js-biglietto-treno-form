const form = document.forms[0];
const btnSend = document.getElementById("submit");
const btnReset = document.getElementById("reset");
let fullName;
let km;
let age;

btnSend.addEventListener("click", 
    function () { 
        fullName = document.getElementById("name").value;
        km = document.getElementById("km").value;
        age = document.getElementById("ageSelect").value;
        console.log(fullName + ",  "  + km + ",  " + age);

        document.getElementById('details-name').innerHTML = fullName;

        if (age == 'over65') {
            let price = km * 0.21;
            document.getElementById('details-price').innerHTML = Math.round(((price / 100) * 60) * 100) / 100 + "euro";
        } else if (age == 'minorenne') {
            let price = km * 0.21;
            document.getElementById('details-price').innerHTML = Math.round(((price / 100) * 80) * 100) / 100 + "euro";

        } else {
            let price = km * 0.21;
            document.getElementById('details-price').innerHTML = Math.round((price) * 100) / 100 + "euro";
        }
    }
);

btnReset.addEventListener("click", 
    function () { 
        form.reset();
    }
);

// class Passenger {
//     constructor (km, age) {
//         this.km = km;
//         this.age = age;
//     }

//     kmInit() {
//         this.km = parseInt(prompt("quanti chilometri vuoi percorrere?"));
//     }

//     ageInit(correct) {
//         while (!correct) {
//             this.age = parseInt(prompt("quanti anni hai?"));
        
//             if (this.age >= 0 && this.age <= 110) {
//                 correct = true;
//                 console.log("age accepted");
//                 return this.age;
//             } else {
//                 console.log("not valid number in age field");
//             }
//         }
//     }

//     priceCalc() {
//         if (this.age > 65) {
//             let price = this.km * 0.21;
//             return price = Math.round(((price / 100) * 60) * 100) / 100;
//         } else if (this.age < 20) {
//             let price = this.km * 0.21;
//             return price = Math.round(((price / 100) * 80) * 100) / 100;

//         } else {
//             let price = this.km * 0.21;
//             return price = Math.round((price) * 100) / 100;
//         }
//     }
// }

// // object creation

// let pass1 = new Passenger();

// // km prompt

// pass1.kmInit();

// // age prompt

// pass1.ageInit(false);

// // price calc

// currPrice = pass1.priceCalc();
// // console.log(`${currPrice} euro`);

// document.getElementById('mytitle').innerHTML = (`${currPrice} euro`);