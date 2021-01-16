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

//Conversiones de base múltiple (bases 2 a 9)
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

function print(element){
    return console.log(element);
}

//Ejemplos
function ejemplo(){
    //Ejemplo 1
    let num = 32;
    let base = 2;
    let newNum = mulBase(num, base);
    print(num + " converted to base " + base + " is " + newNum);
    
    //Ejemplo 2
    num = 125;
    base = 8;
    newNum = mulBase(num, base);
    print(num + " converted to base " + base + " is " + newNum);
}
ejemplo();