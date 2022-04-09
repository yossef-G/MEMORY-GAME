const cards = ["🍔","🍕","🍩","🍿","🌯","🎂","🍔","🍕","🍩","🍿","🌯","🎂",]

function creatcards (i) {
    const cardEl = document.createElement("div");
    cardEl.innerHTML = cards[i];
    cardEl.id = i;
    return cardEl;
}

let newCards = shuffle(cards);
console.log(newCards);

for (i in newCards) {
    const element = creatcards(i);
    board.appendChild(element)
}

// function shufflecard(arr) {
//     arr.map(value => ({ value, sort: Math.random() }))
//     return arr.sort()
// }


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


document.getElementById("head").onmouseover = function() {mouseOver()};
document.getElementById("head").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("head").style.color = "red";
}

function mouseOut() {
  document.getElementById("head").style.color = "black";
}