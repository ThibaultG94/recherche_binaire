const findElement = (array, thingtoFind) => {
  for (let element of array) {
    if (element === thingToFind) {
      return true;
    }
  }
  return false;
};
