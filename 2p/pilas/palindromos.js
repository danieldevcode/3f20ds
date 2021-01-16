//Clase Stack
function Stack() {
    this.dataStore = [];
    this.top = 0;

    this.push = function (element) {
        this.dataStore[this.top++] = element;
    }
    this.pop = function () {
        return this.dataStore[--this.top];
    }
    this.peek = function () {
        return this.dataStore[this.top - 1];
    }
    this.length = function () {
        return this.top;
    }
    this.clear = function () {
        this.top = 0;
    }
}

function print(element) {
    return console.log(element);
}

//Verificar si es un palíndromo
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false;
    }
}

function checkWord(word) {
    if (isPalindrome(word)) {
        print(word + " is a palindrome.");
    }
    else {
        print(word + " is not a palindrome.");
    }
}
//Ejemplos
function ejemplo(){
    //Ejemplo 1
    let word = "racecar";
    checkWord(word);

    // Ejemplo 2
    word = "hello";
    checkWord(word);
}
ejemplo();