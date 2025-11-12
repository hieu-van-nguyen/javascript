var dog = {
    name: 'Benji',
    talk: function(){
        console.log('Woof, woof!');
    }
};

dog.talk();

var book = {
    name: 'Catch-22',
    published: 1961,
    author: {
        firstname: 'Joseph',
        lastname: 'Heller'
    }
};

const key = 'firstname';
console.log(book.author[key]);