const person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const greetFn = person.greet;
const boundFn = greetFn.bind(person);
boundFn(); // Hello, John