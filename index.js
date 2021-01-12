const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray) {
  let win = objArray.find(function(s) { return s["result"] === "W"});
  return win ? win["year"] : undefined
}