// დავალება პირველი


function replaceString(string, valueToReplace, valueToReplaceWith) {
  const updatedString = string.map((str) => {
    if (str === valueToReplace) {
      return valueToReplaceWith;
    } else {
      return str;
    }
  });

  return updatedString;
}

console.log(replaceString(["gio", "giga"], "gio", "giga"));




// დავალება მეორე

function capitalizeWords(sentence) {
  const words = sentence.split(" ");

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const capitalizedSentence = capitalizedWords.join(" ");

  return capitalizedSentence;
}

console.log(
  capitalizeWords(
    "A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging."
  )
);



//   დავალება მესამე


function sortUsersByAge(users) {
  users.sort((a, b) => a.age - b.age);
  return users;
}

console.log(
  sortUsersByAge([
    { name: "Lasha", age: 30 },
    { name: "Saba", age: 20 },
    { name: "Demetre", age: 19 },
    { name: "Giga", age: 83 },
  ])
);
