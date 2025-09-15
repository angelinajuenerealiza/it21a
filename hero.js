class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getHealth(){
        return this.#health;
    }
}

const hero = new Hero("Thorin",100,10);
class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power Strike`);
    }
}

console.log(hero.getHealth());
const warrior = new Warrior("Thorin",100,10);
warrior.useAbility()