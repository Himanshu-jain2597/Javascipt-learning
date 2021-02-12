const address = [
    'himanshu',
    'jain',
    'hello'
]


const  [firstName,lastName,msg] = address;

// destruct only msg
const [,,msg='hi'] = address;
