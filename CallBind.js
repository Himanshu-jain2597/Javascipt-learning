// function borrowing
// call method
const name = {
    firstName:"himanhu",
    print:function() {
        console.log(this.firstName);
    }
}

name.print();

const name2 = {
    firstName:"jain"
}

name.print.call(name2);

//bind method
const printName = name.print.bind(name2);
printName();
