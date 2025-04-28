// // ======= //
// // 1-mashq //
// // ======= //
// function prise() {
//     const arr = [12000, 14000, 15000];
//     for (const prise of arr) {
//       console.log(`Pizza PRISE:${prise} som`);
//     }
  
//   }
  
//   prise()
  

// // ======= //
// // 2-mashq //
// // ======= //

// const frens = ["Ali", "Vali", "Sami"]

// function greeetFriends (a) {
//     for (const fren of a) {
//         console.log("Hello", fren)
//     }
// }

// greeetFriends(frens)

// // ======= //
// // 3-mashq //
// // ======= //

// const prices = [1000, 2500, 5000]

// function convertPricesToStrings (a) {
//     for (const price of a) {
//         console.log(price + "")
//     }
// }

// convertPricesToStrings(prices)

// // ======= //
// // 4-mashq //
// // ======= //

// const nums = [3, 6, 9, 10]

// function checkOddOrEven (a) {
//     for (const num of a) {
//         if (num % 2 === 0) {
//             console.log(num, "- Even")
//         } else{
//             console.log(num, "- Odd")
//         }
//     }
// }

// checkOddOrEven(nums)

// // ======= //
// // 5-mashq //
// // ======= //

// const student = ["Dilshod", 13]

// function printStudentInfo (a) {
//     console.log("Name:", a[0])
//     console.log("Age:", a[1])
// }

// printStudentInfo(student)

// // ======= //
// // 6-mashq //
// // ======= //

// const ball = [56, 72, 88, 45, 100]

// function printExamResults(a) {
//     for (const bal of a) {
//         if (bal >= 60) {
//             console.log(bal, "Passed")
//         } else{
//             console.log(bal, "Failed")
//         }
//     }
// }

// printExamResults(ball)

// // ======= //
// // 7-mashq //
// // ======= //

// const ages = ["12", "20", "15", "19", "14"]

// function showMinorsOnly (a) {
//     for (const age of a) {

//         if (age <= 18) {
//             console.log(parseInt(age))
//         }
//     }
// }

// showMinorsOnly(ages)

// // ======= //
// // 8-mashq //
// // ======= //

// const harflar = ['M', 'A', 'R', 'S', 'U', 'L', 'E', 'K']

// function showVowelsOnly (a) {
//     for (const harf of a) {
//         if (harf == 'A'  harf == 'I'  harf == 'U'  harf == 'E'  harf == 'O') {
//             console.log(harf)
//         }
//     }
// }

// showVowelsOnly(harflar)

// ==============================================
// 9-masala:Maxfiy kodlar
// ==============================================


// function printIndex() {
//     const letter = ["S", "A", "L", "O", "M"];

//     for (const key in letter) {
//         console.log(letter[key])
//     }
// }

// printIndex()






// ==============================================
// 10-masala:Yoshlarni raqamga aylantiring
// ==============================================

// function convertAgestoSrt() {
//     const ages = ["11", "45", "73", "12", "20"];
    
//     for (const age of ages) {
//         const num = parseInt(age);
//         console.log(num);
//     }
// }

// convertAgestoSrt()




// ==============================================
// 11-masala:Kim onlayn
// ==============================================


// function showPlayerStatus() {
//     const status = [true, false, true, false];

// for (const arr in status) {
//     if(status[arr] === true){
//         console.log("Online");
//     }else{
//         console.log("Oflayn");
        
//     }
// }
// }

// showPlayerStatus()





// ==============================================
// 12-masala:Ichimliklar ta'rifi
// ==============================================

// function describeDrinks() {
// const drinks = [
//     ["Cola", "sweet"],
//     ["Water", "clear"],
//     ["Juice", "sweet"]
// ]

// const [[C, s], [W, c], [J, S]] = drinks;
// console.log(${C} - ${s});
// console.log(${W} - ${c});
// console.log(${J} - ${S});
// }

// describeDrinks()



// ==============================================
// 13-masala:Satrlar uzunligini o'lchaymiz
// ==============================================


// function printNamesLength() {
// const name1 = ["Anora"];
// const name2 = ["Oyjamol"];
// const name3 = ["Muhammad"];




// for (const name of name1) {
//     console.log(${name} - ${name.length});
// }


// for (const name of name2) {
//     console.log(${name} - ${name.length});
// }


// for (const name of name3) {
//     console.log(${name} - ${name.length});
// }
// }

// printNamesLength()