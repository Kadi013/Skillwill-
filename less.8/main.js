// პირველი დავლაება

// უმოკლესი ჩანაწერი რაც კი არსებობს
const power = (base, expo) => (expo === 0 ? 1 : base ** expo);
console.log(power(5, 2));

// ეს შედარებით გრძელი
function power2(base, expo) {
  return expo === 0 ? 1 : base * power(base, expo - 1);
}
console.log(power2(5, 3));

// ეს ყველაზე გრძელი
function power3(base, expo) {
  if (expo === 0) {
    return 1;
  } else {
    return base * power(base, expo - 1);
  }
}
console.log(power3(5, 4));
