// პირველი დავალება
function oddNumberOperation(num0, num1, ...arr) {
  let total = 1;
  for (const num of arr) {
    num0 = num0 + num1;
    total *= num;
  }
  return [num0 - num1, total]; 
}

console.log(oddNumberOperation(11, 11, 3, 5));
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