const cards = ["🍔","🍕","🍩","🍿","🎂","🎂","🍔","🍕","🍩","🍿","🍨","🍨","🥞","🥞","🍰","🍰","🍪","🍪"]


//////////////////////////////////////////////////

function creatcards (i) {
    const cardEl = document.createElement("div");
    cardEl.id = i;
    cardEl.class = "cards";
    cardEl.onclick = cardClicked ;
    // cardEl.innerHTML =  ;
    return cardEl;
}

/////////////////////////////////////////////////

const cardClicked = (evn) => {
    cardEl = evn.target;
    let idx = cardEl.id;
    cardEl.innerHTML = cards[idx];
    compareF(cardEl)
}
////////////////////////////////////////////////

let ind = 0
let compare = []
let com = []
let x = "" ;
let y = "" ;

let compareF = (cardEl) => {  
    debugger
    compare[ind] = cardEl.innerHTML;
    console.log(compare[ind].id);
    if(ind == 0){
        x =cardEl;
        let x1 = compare[ind].split("");
        com[0] = x1[1];
    }
    if(ind == 1){
        y = cardEl;
        let y1 = compare[1].split("");
        com[1] = y1[1];

        if ( com[0] == com[1] && x.id != y.id){
            console.log("succes"); 
            ind = 0; 

        }
        else{
            setTimeout(() => { 
                x.innerHTML = "";
                y.innerHTML = "";
                ind = 0 ;
            }
                , 1500);
            }
    }
    ind++
    setTimeout(() => {compare = []; ind = 0 ;}, 1880);

}
/////////////////////////////////////////////////

//////////////////////////////////////////////////
window.onload = () => { 
  let newCards = shuffle(cards);
  for (i in newCards) {
      const element = creatcards(i);
      board.appendChild(element)
  }  
}
//////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////

function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

//////////////////////////////////////////////////////////////////////
