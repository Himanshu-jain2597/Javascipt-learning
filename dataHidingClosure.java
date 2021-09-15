// data hiding with closure
// count variable cannot be access outside the counter function
// this is not good way
function counter() {
    var count = 0;
    function incrrement() {
        count++;
        console.log(count);
    }
    return incrrement;
}

counter()(); // this will call incrrement function and increase the count variable.

// increment and decrement 
function Counter1() {
    var count = 0 ;
    this.increment = () => {
        count++;
        console.log(count);
    }
    this.decrement = () => {
        count--;
        console.log(count);
    }
}

const counter2  = new Counter1();

counter2.increment();

counter2.increment();

counter2.decrement();

/**
 * Disadvantage of closure
 * Over cosumption of memory close variable are not garabage collector. till the program expire
 * This can lead to memory leakage problem
 */
