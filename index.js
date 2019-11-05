function takeANumber(lineNumber,newPerson){
  lineNumber.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + lineNumber.length + " in line."
}

function nowServing(lineNumber){
  if (lineNumber.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving " +  lineNumber.shift() + ".";
  }
}

function currentLine(lineNumber){
  let result = ["The line is currently"]
  for (let i = 0; i < lineNumber.length; i++){
    result.push(lineNumber[i] + "." + newPerson[i]);
  } return result;
}
