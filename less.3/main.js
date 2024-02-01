// პირველი დავალება
function oddNumberOperation(n) {
    let firstSister = (n * (n + 1)) / 2;
  
    let secondSister = 1;
    for (let i = 3; i <= n; i++) {
      secondSister *= i;
    }
  
    return [firstSister, secondSister];
  }
  let result = oddNumberOperation(5);
console.log(result);

// მეორე დავალება
const user = {
    banks: [
      {},
      {},
      {
        address: {
          city: 'New York City'
        }
      }
    ]
  };
  function getCityFromUserObject(user) {
    const { banks: [, , { address: { city } = {} } = {}] = [] } = user;
    console.log(city)
  }
  getCityFromUserObject(user)

//   მესამე დავალება
const obj = {
    nick: "demetre",
    location: {
      villige: "mtsekta",
      house: "17"
    }
  };
  
const obj2 = {
    ...obj,
    location: {
        ...obj
    }
}
console.log(obj2)