let count = 0,
countEl = document.getElementById("count-el"),
saveEl = document.getElementById("saved-el");

function increment() {
  count  = getCountElValue() + 1;
  countEl.value = count;
}

function decrement() {
  if (count > 0 || getCountElValue() > 0) {
    count  = getCountElValue() - 1;
    countEl.value = count;  
  }
}

function reset() {
  count = 0;
  countEl.value = count;
  saveEl.textContent = "Previous Entries: ";
}

function save() {   
  if (!containsPlusMinusSymbol() && (countEl.value > 0 || countEl.value !== '')) {
    count = getCountElValue();
    let countStr = count + " - ";

    saveEl = document.getElementById("saved-el");
  
    // use textConent instead of innerText to include spaces.
    saveEl.textContent += countStr;
  
    // reset count
    count = 0;
    countEl.value = count;
    }
}

function getCountElValue() {
  return Number(countEl.value);
}

function containsPlusMinusSymbol() {
  let value = countEl.value;
  if (value.includes('-') || value.includes('+')) {
    // If the value contains a hyphen or plus sign, remove them
    return true;
  }
}

/// THE DOM (Document Object Model) - How you use javascript to modify a website; 
//1.) The document keyword is of a datatype object. 
//2.) Model example: document.getElementById("count-el").innerText = 5;
//// The real thing: <h2 id="count-el">0</h2>


/// STRING
// Trivia: In a wrestling game between string and number in JS, string will always wins if you add them together. Example: "4" + 10 = "410"


/// innerText
// Trivia: innerText is a property of the document object. It only shows human-readable text. Won't return the the text of hidden elements which includes spaces. See mdn:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText