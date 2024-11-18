// for ( let  i= 1; i <= 10; i++) {
//     if (i % 2 === 0 ) {
//         console.log(i + " - жуп");   
//     } else {
//         console.log(i + " - так");
        
//     }
// }

/*
let Ailuna =prompt("1 den 10 san engiz")
for (let i =1; i <= 10; i--){
    if(i === 3){
        alert("дурыс санды таптын");
        
        break;
    }
    console.log(i);

    if(i === 6){
        alert("дурыс санды таптын");
        break;
    }
    console.log(i);

    if(i === 9){
        alert("дурыс санды таптын");
        break;
    }
    console.log(i);
}
    */
/*
let count = 0;
 while(count < 5 ){
    console.log(count);
    count++;
    
 }
*/
/*
 let i=0;
 while (i<10) {
    if(i==5 + i ){
        console.log("цикл токтатылды сан табылды" + i);
        
break;
    }
    console.log(i);
    
    i++;
 }
*/
/*
let san = +prompt("san engiz")
let sum=0
for(let i=1;i<=san; i++){
    sum=sum+i
    console.log("sum бизде"+ sum);
    
}
 alert(san+"дейинги сандар;"+sum)

*/
/*
let san =+prompt("san engiz")
let qosyndy=0;
let i=0;
while(i<=san){
    qosyndy=qosyndy + i;
    i++;
}
alert(san +"deiingi sandar qosyndysy" + qosyndy)
*/
/*
let i = 10;

while (i <= 40) {
    if (i >= 20 && i <= 30 && i % 2 == 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
*/
/*
let surak1 = prompt("Казак хандыгы кашан курылды");
let upai = 0;
if(surak1 == 1465){
    upai++; 
}
    */
/*
let soz =prompt("Qazaq handigy qashan kurildy")
let san = 3
for(let i=san;i>0;i--){
    if(num="1465");
    alert("duris")
    break;
}
*/
/*
let cr = 1465;  
let Ailuna = 0;        

let anuar = prompt("казак хандыгы кашан курылды?");


if (anuar == cr) {
    Ailuna = Ailuna + 1;  
} else {
    Ailuna = Ailuna - 1;  
}

alert(" жауап дурыс 1 балл: " + Ailuna);
*/
/*
let sty = prompt("студентер санын енгизиниз" )
 let sty1 = +prompt("биринши студентин багасын енгизиниз" )
 let sty2 = +prompt("екинши студентин багасын енгизиниз" )
 let sty3 = +prompt("ушинши студентин багасын енгизиниз")
 let bal1 = 85
 let bal2 = 90
 let bal3 = 87

 while(a){
if (bal1 + bal2 + bal3 % 3 ) {
    alert(a)
}
alert("студентердин орташа мани" + a)
 }
*/


function compareWords() {

    let word1 = prompt("Биринши соз:");
    let word2 = prompt("екинши соз:");

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if (word1 === word2) {
        alert("соз бирдей");
    } else {
        alert("создер артурли");
    }
}

compareWords();
