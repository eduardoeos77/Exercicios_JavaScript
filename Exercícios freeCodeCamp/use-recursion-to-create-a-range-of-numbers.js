function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  else if (startNum === endNum) {
    return [startNum];
  }
  else {
    const rangeArray = rangeOfNumbers(startNum + 1, endNum - 1);
    rangeArray.unshift(startNum);
    rangeArray.push(endNum);
    return rangeArray;
  }
  
};