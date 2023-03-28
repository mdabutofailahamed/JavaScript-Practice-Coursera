function doubleIt(num) {
  return num * 2
}
function objectMaker(val) {
  return {
      prop: val
  }
}
objectMaker(20);
doubleIt(10).toString()
objectMaker( doubleIt(100) );