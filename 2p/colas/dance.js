//Simple Queue
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

//Dancer exercise
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}
function dance(males, females) {
    print("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        print("Female dancer is: " + person.name);
        person = males.dequeue();
        print("Male dancer is: " + person.name + "\n");
    }
}
function print(element){
    return console.log(element);
}

function ejemplo(){
    var maleDancers = new Queue();
    maleDancers.enqueue(new Dancer("Daniel", "M"));
    maleDancers.enqueue(new Dancer("José", "M"));
    
    var femaleDancers = new Queue();
    femaleDancers.enqueue(new Dancer("Sol", "F"));
    
    dance(maleDancers, femaleDancers);
    if (!femaleDancers.empty()) {
        print(femaleDancers.front().name + " is waiting to dance.");
    }
    if (!maleDancers.empty()) {
        print(maleDancers.front().name + " is waiting to dance.");
    }
}
ejemplo();