function takeANumber(lineNumber,newPerson){
  lineNumber.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + lineNumber.length + " in line."
}

function nowServing(lineNumber){
  if (lineNumber.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving" +  lineNumber [0];
  }
}
