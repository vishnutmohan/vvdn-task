class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0)
            return "No element present in the stack";
        return this.items.pop();
    }

    print() {
        return this.items;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.print());

let ele = stack.pop();

console.log(ele);
console.log(stack.print());
console.log(stack.isEmpty());