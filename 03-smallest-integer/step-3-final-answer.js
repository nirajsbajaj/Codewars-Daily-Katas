function findSmallestInt(arr) {

  function breakArray(arr) {
    let result = [];
    let temp = [...arr];

    for (let i = 0; i < temp.length; i++) {
      result.push([...temp]);
      temp.push(temp.shift());
    }

    return result;
  }

  function compareElements(groups) {
    for (let i = 0; i < groups.length; i++) {
      let smallest = true;

      for (let j = 1; j < groups[i].length; j++) {
        if (groups[i][j] < groups[i][0]) {
          smallest = false;
          break;
        }
      }

      if (smallest) return groups[i][0];
    }
  }

  return compareElements(breakArray(arr));
}

console.log(findSmallestInt([4, -2, 1, 100, 55]));