const len = 3;
var Stack = [len];
var top = -1;


const PUSH = (x) => {
    if (top < len - 1) { // check the stack by top via len
        top = top + 1; // if ok => increase
        Stack[top] = x; // add to top
        console.log(`✔ Successfully Added : ${x}`);
    } else {
        console.log(`❌ No Space for ${x}`);
    }
}

const POP = () => {
    if (top >= 0) { // check the stack by top
        let temp = Stack[top]; // hold the last added value
        top = top - 1; // delete / decrease the last in value {Last in first out}
        return temp
    } else {
        console.log(`❌ Stack is Empty!`);
    }
}

const PEEK = () => {
    if (top >= 0) {
        return Stack[top]; // return the last added value
    } else {
        console.log(`❌ Stack is Empty!`);
    }
}

const Check_Stack = (stack) => {
    let index = 0;
    console.log(`\n====================== { Stack Values } ======================`);
    while (index <= top) {
        console.log(`stack[${index}] = ${stack[index]}`);
        index++;
    }
    console.log(`====================== { Stack Values } ======================\n`);
}


// Start From Here
PUSH(1);
PUSH(2);
PUSH(3);
PUSH(4);
Check_Stack(Stack);
console.log(`Last value of Stack : ${PEEK()}`);
console.log(`Delete the last value : ${POP()}`);
Check_Stack(Stack);
PUSH(5);
console.log(`Delete the last value : ${POP()}`);
PUSH(6);
console.log(`Last value of Stack : ${PEEK()}`);
Check_Stack(Stack);
