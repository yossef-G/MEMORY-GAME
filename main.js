const cards = ["🍔","🍕","🍩","🍿","🌯","🎂","🍔","🍕","🍩","🍿","🌯","🎂","🌯","🎂","🍩","🎂","🍔","🍕"]


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
    cardEl.innerHtml = cards[idx];
    console.log(cardEl.innerHtml);
}


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
