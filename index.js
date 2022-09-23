let myArray = [];
let i = 0;

function randomArray() {
  if (i < 100) {
    let randomNumber = Math.floor(Math.random() * `${i}0`);
    myArray.push(randomNumber);
    i++;
    randomArray();
  }
}

randomArray();
myArray.sort((a, b) => a - b);
console.log(myArray);

const findElement = (array, thingToFind) => {
  for (let element of array) {
    if (element === thingToFind) {
      console.log("true");
      return true;
    }
  }
  console.log("false");
  return false;
};

findElement(myArray, 20);
