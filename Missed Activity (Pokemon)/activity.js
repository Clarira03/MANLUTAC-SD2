class Pokemon {
constructor(name, level, health, mana, maxMana) {
    this.name = name;
    this.level = level;
    this.maxHealth = health * level;
    this.health = this.maxHealth;
    this.maxMana = maxMana ?? 100; 
    this.mana = this.maxMana;
}

tackle = function (target) {
    let damage = 20;
    let manaGain = 40;
    let newMana = Math.min(this.mana + manaGain, this.maxMana);

    target.health -= damage;
    console.log(
    `${this.name} used tackle attack! ${target.name} took ${damage} damage!\n${this.name} gained ${newMana - this.mana} mana!`,
    );
    this.mana = newMana;

    if (target.health <= 0) {
    console.log(`${target.name} fainted, ${this.name} wins!`);
    }
};

useSkill1 = function (target) {
    let s1Name;
    let manaCost;
    let damage;

    switch (this.name) {
    case "Pikachu":
        damage = 150;
        manaCost = 50;
        s1Name = "Thunderbolt";
        break;
    case "Charmander":
        damage = 150;
        manaCost = 50;
        s1Name = "Flamethrower";
        break;
    }

    if (manaCost <= this.mana) {
    target.health -= damage;
    console.log(
        `${this.name} used ${s1Name}! ${target.name} took ${damage} damage!`,
    );
    this.mana -= manaCost;
    console.log(`${this.name} spent ${manaCost} mana.`);
    if (target.health <= 0) {
        console.log(`${target.name} fainted, ${this.name} wins!`);
    }
    } else {
console.log(`${this.name} has insufficient mana!`);
    }
};

usePotion = function () {
    let heal = 150;
    let newHealth = Math.min(this.health + heal, this.maxHealth);

    console.log(
`${this.name} uses a Potion! ${this.name} restores ${newHealth - this.health} health!`,
    );
};
}
let pikachu = new Pokemon("Pikachu", 5, 100, 100);
console.log(pikachu);

let charmander = new Pokemon("Charmander", 5, 100, 100);
console.log(charmander);

pikachu.tackle(charmander);
charmander.usePotion();
charmander.useSkill1(pikachu);
pikachu.useSkill1(charmander);
charmander.useSkill1(pikachu);
pikachu.usePotion();
pikachu.tackle(charmander);
charmander.useSkill1(pikachu);
charmander.tackle(pikachu);
pikachu.tackle(charmander);
charmander.tackle(pikachu);
pikachu.tackle(charmander);
charmander.useSkill1(pikachu);
pikachu.tackle(charmander);
charmander.tackle(pikachu);
