class Stack {
    constructor() {
        this.data = [];
        this.length = 0; 
    }
    
    push(item) {
        this.length++;
        this.data.push(item);
    }
    pop() {
        if(this.length<=0) {
            return;
        }
        this.length--;
        return this.data.pop();
    }
    peek() {
        if(this.length<=0) {
            return;
        }
        return this.data[this.length-1]
    }
    isEmpty() {
        return this.length===0;
    }
}

const reverseString = (str) => {
    const stack =  new Stack();
    const strArr = [...str];
    strArr.forEach((element)=> {
        stack.push(element);
    })
    
    let res = "";
    while(!stack.isEmpty()) {
        res+=stack.pop();
    }
    return res;
    
}


let str = "jain";
console.log(reverseString(str));
