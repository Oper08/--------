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

/*
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
*/


/*
function bibka() {
    function isStudent() {
        const response = prompt("Сиз студентсиз бе ? (ия/жок):");
        return response.toLowerCase() === "ия" || response.toLowerCase() === "да" || response.toLowerCase() === "yes";
    }

    function Language() {
        const language = prompt("кай тилде сойлейсиз? Казакша, орысша, агылшынша (казакша/орысша/агылшынша):").toLowerCase();
        if (language === "казакша" || language === "казахский" || language === "kazakh") {
            return "kazakh";
        } else if (language === "орысша" || language === "русский" || language === "russian") {
            return "russian";
        } else if (language === "агылшынша" || language === "английский" || language === "english") {
            return "english";
        } else {
            return null;
        }
    }

    function Kazakh() {
        alert("салем калыныз калай?");
    }

    function Russian() {
        alert("Привет! Как дела?");
    }

    function English() {
        alert("Hello! How are you?");
    }

    if (isStudent()) {
        const language = Language();
        if (language === "kazakh") {
            Kazakh();
        } else if (language === "russian") {
            Russian();
        } else if (language === "english") {
            English();
        } else {
            alert("кешириниз мен сизди тусинбедим.");
        }
    } else {
        alert("жаксы кун тилеймин!");
    }
}

bibka();
*/
/* 21.11.24
function convert() { 
    let euro = 0; 
 
     
 
    while (true) { 
        
        let summa = prompt("Соманы енгізіңіз (немесе 'стоп' жазыңыз):"); 
        if (summa.toLowerCase() === "stop") 
             break; 
 
         
        let valyuta = prompt("Валютаны енгізіңіз (USD, KZT, EUR):"); 
        let valyuta1; 
 
        if (valyuta === "USD") { 
            valyuta1 = 0.85; 
        } else if (valyuta === "KZT") { 
           valyuta1 = 0.002; 
        } else if (valyuta === "EUR") { 
            valyuta1 = 1; 
        } else { 
           alert("Қате: дұрыс валютаны таңдаңыз (USD, KZT, EUR)!"); 
            continue; 
        } 
 
         
        let kobeitu = summa * valyuta1; 
        euro += kobeitu; 
 
        alert(Енгізілген сома: ${summa} ${valyuta}. Евроға аударылды: ${kobeitu} EUR.); 
    } 
alert(Барлық соманың евродағы қосындысы: ${euro} EUR.); 
} 
 
 
convert();
*/
/*
let player = ["Рони","Зидан","Неймар","Бензема"]

console.log(player);

let player1 = ["Рони","Зидан","Неймар","Бензема"]
player1 [1] = 'Месси'
console.log(player1);

let player2 = ["Рони","Зидан","Неймар","Бензема"]
player2 [4] = 'Месси'
player2 [5] = 'Пеле'
console.log(player2);


let fplayer =+prompt("фудболистер саны")
if (fplayer > 5){
    alert("коп")
}
else if(fplayer < 5 ){
alert("аз")
}
*/
/*
let sandar = [];
while (true) {
    let san = prompt("Сан енгизиниз (0 тоқтату ушин):");
    if (san == 0) {
        break;
    }
    san = Number(san);

    if (san % 2 === 0) {
        sandar.unshift(san); 
    } else {
        sandar.push(san); 
    }
}
console.log("Массив:", sandar);
console.log("Длина массива:", sandar.length);
*/

/*
let player = {
    name: "Азамат", 
    surname: "Кайратов", 
    age: 28, 
    goals: 45, 
    teams: ["Жастар", "Ордабасы", "Қайрат"] 
};

player.goals * 2;

function name1() {
    return `${player.name} ${player.surname}`;
}

function name2() {
    return player.teams[player.teams.length ]; 
}

console.log("Футболщынын аты жони:", name1 ());
console.log("Казирги клубы:", name2 ());
console.log("Жалпы гол саны:", player.goals);
*/
/*
const artist = [
    {name: "Michael Jackson", songs: ["Smooth Criminal", "Billie Jean", "Beat It", "Earth Song"]},
    {name: "Billie Eilish", songs: ["Bad Guy", "Lovely", "Lunch", "Chihiro"]},
    {name: "Kairat Nurtas", songs: ["Auymaydy Zhurek", "Ol sen emes"]}
  ];
  
  artist[2].songs[1] = "Baika";
  
  console.log("Michael Jackson-нын сонгы ани:", artist[0].songs[artist[0].songs.length - 1]);
  
  const shortSongs = artist[1].songs.filter(song => song.length <= 6);
  console.log("Billie Eilish-тин сонгы ани:", shortSongs);
  */


// const students = [
//     { 
//         name: "Айлуна", 
//         baga: 85, 
//         city: "Алматы", 
//         otany: "Казакстан" 
//     },
//     { 
//         name: "Данияр", 
//         baga: 90, 
//         city: "Астана" 
//     }
// ];

// const [birStudent, ekyStudent] = students;

// const { name: studentName, baga: mathscore, city, otany = "Қазақстан" } = birStudent;

// console.log("Аты:", studentName);
// console.log("Математика багасы:", mathscore);
// console.log("Кала:", city);
// console.log("Ел:", otany);



// const class1 = ["Назерке", "Ернар", "Динара"];
// const class2 = ["Кундыз", "Анель", "Джони","Бекарыс"];

// const Class = ["Директор", ...class1, ...class2, "Мугалим"];

// console.log(Class);

// ,


const data = [
    {title: '"Абай жолы" - Мұхтар Әуезов',
    description: 'Абайдың өмірі мен қазақ қоғамының тарихи шежіресі.'},
    {title: '"Қан мен тер" - Әбдіжәміл Нұрпейісов',
    description: 'Қазақ халқының қиын кезеңдерінің эпикалық баяны.'},
    {title: '"Көшпенділер" - Ілияс Есенберлин',
    description: 'Қазақ хандығының қалыптасу тарихы.'},
    {title: '"За нами Москва" - Александр Бек',
    description: 'Панфиловшылардың ержүректігі туралы тарихи деректі роман.'}
  ];
  



const cardsContainer = document.getElementById("cards");

function createCard(item) {
  // Создаём карточку
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const button = document.createElement("button");
  button.textContent = "Удалить";

  button.addEventListener("click", () => {
    cardsContainer.removeChild(card);
  });

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(button);

  return card;
}

data.forEach(item => {
  const card = createCard(item);
  cardsContainer.appendChild(card);
});
  
