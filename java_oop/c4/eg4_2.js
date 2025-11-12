const hero = {};
hero.breed = 'turtle';
hero.name = 'ninja';
hero.sayName = function() {
    return hero.name;
}

console.log(hero.sayName());
delete hero.name;
console.log(hero.sayName());