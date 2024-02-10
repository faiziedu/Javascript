// let date=new Date()
// console.log(typeof date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());

//let myDate=new Date(2024,0,20);
//let myDate=new Date(2024,0,20,5,3);
let myDate=new Date("01/14/2024");
// console.log(myDate.toLocaleString());

let timeStamp=Date.now();
// console.log(timeStamp);
// console.log(myDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate);