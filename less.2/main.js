// პირველი დავალება

const data = [
  { name: "temo", age: 25 },
  { name: "lasha", age: 21 },
  { name: "ana", age: 28 },
];

let youngestAge = data[0].age;

data.forEach((person) => {
  if (person.age < youngestAge) {
    youngestAge = person.age;
  }
});

console.log(youngestAge);



// მეორე დავალება

const user = {
  name: "John",
  age: 30,
  location: "New York",
};

function modifyUser(user) {
  return {
    name: "kadi",
    age: user.age * 2,
    location: "important",
  };
}

const modifiedUser = modifyUser(user);
console.log(modifiedUser);



//  მესამე დავალება

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const playGame = () => {
  let aTries = 0;
  let bTries = 0;

  while (true) {
    const aRoll = rollDice();
    const bRoll = rollDice();

    aTries++;
    bTries++;

    console.log(`მოთამაშე A ითამშა: ${aRoll}`);
    console.log(`მოთამაშე B ითამაშა: ${bRoll}`);

    if (aRoll === 6) {
      console.log(`მოთამაშე A მოიგო ${aTries} ცდაში!`);
      break;
    }

    if (bRoll === 6) {
      console.log(`მოთამაშე B მოიგო ${bTries} ცდაში!`);
      break;
    }
  }
};

playGame();
