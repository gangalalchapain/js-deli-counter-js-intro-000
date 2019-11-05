
function takeANumber(katzDeliLine, name){
  var result = "";
  for (var i = 0; i < katzDeliLine.length; i++){
    result += ("Welcome, " + name[i] + "." +  "You are number " + katzDeliLine[i] +  " in line.");
  }

  return result;
}
