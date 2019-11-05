function takeANumber(lineArr,newPerson){
  lineArr.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + lineArr.length + " in line."
}
