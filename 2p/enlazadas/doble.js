function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
    let length = 0;
    let head = null;
    let tail = null;
    this.append = function (element) {

        let node = new Node(element),
            current;

        if (head === null) {
            head = node;
        } else {

            current = head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        length++;
    }
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;

                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }
    this.toString = function (element) {
        let current = head,
            string = "";

        while (current) {
            string += current.element + (current.next ? " - " : "");
            current = current.next;
        }
        return console.log(string);
    }
}
function ejemplo(){
    let list = new DoublyLinkedList();
    console.log("Element 9, 8 and 7 appended to list:")
    list.append(9);
    list.append(8);
    list.append(7);
    list.toString();
    console.log();
    
    console.log("Element 999 inserted at index 1:");
    list.insert(1, 999);
    list.toString();
    console.log();
    
    console.log("Element at index 2 deleted:");
    list.removeAt(2);
    list.toString();
}
ejemplo();