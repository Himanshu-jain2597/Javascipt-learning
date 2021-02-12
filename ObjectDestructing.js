const person = {
    name:'andrew',
    age:26,
    location: {
    temp:26,
    city:'ratia'
    }
    
    
    };
    
    // default is empty string
    const {name='',age} = person;

    const {city,temp} = person.location;
    if(city&&temp) {
        console.log(`${city} is ${temp}`)
    }

    // same as above
    const name = person.name;
    const age = person.age;
    
    console.log(`${person.name} is {person.age}`)
