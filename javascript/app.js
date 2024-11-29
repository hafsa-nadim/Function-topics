// for(let i =1 ; i <=2 ; i++){
//     console.log(i);
// }

// //Local Variable
// function variable(){
//     let local = "I'm Local";
//     document.write(local);
// }
// variable();
// //Global Varible
// let global = "I'm Global";
// function variables(){
//     document.write(global);
// }
// variables();
// document.write(global);

// switch (new Date().getDay()) { //5 switch()
//         case 0:
//         document.write("Sunday");
//         break;
//         case 1:
//             document.write("Monday");
//         break;
//         case 2:
//             document.write("Tuesday");
//         break;
//         case 3:
//             document.write("Wednesday");
//         break;

//         case 4:
//             document.write("Thursday");
//         break;
//        case 5:
//         document.write("Friday");
//         break;
//         case 6:
//             document.write("Saturday");
//         break;
//     default:
//         document.write("Inavlid day");
//         break;
// }
// let favfood = prompt("Enter your Choice \n FastFood \n Fruits \n Veggies");

// switch (favfood) {
//         case "fastfood":
//         document.write("Aur  Khai'n Janab");
//         break;
//         case "fruits":
//             document.write("Acha Khai'n Janab");
//         break;
//         case "veggies":
//             document.write("Acha(fast food)  Khai'n Janab");
//         break;
//     default:
//         document.write("eshi chizai nhi khatai h")
//         break;
// }

// let name = "sheikh hafsa nadeem Javeria nadeem";
// // console.log(name.lastIndexOf("nadeem"));
// // console.log(name.charAt(0));
// console.log(name.replace(/nadeem/g , ""));

// let num1 = parseInt(12) ;
// let num2 = Number("5");
// console.log("the sum is " , num1+num2);

// function myFunction(){
//     console.log("SMIT");
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();


function myFunction(num) {
  for(let i=1; i<=10; i++){
    document.write(num , "X" , i , "=" , num*i , "<br>");
  }
}
myFunction(5);
document.write("<BR>");
myFunction(67);
