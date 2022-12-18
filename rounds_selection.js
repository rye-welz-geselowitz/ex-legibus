const PARSED_ROUNDS = $.csv.toObjects(ROUNDS_CSV);

PARSED_ROUNDS.forEach((round)=>{
  Object.keys(round).forEach((key)=>{
    round[key] = reformat(round[key])
  })
})

function reformat(string){
  return string.replace('“', '"')
    .replace('”', '"')
    .replace("’", "'")
    .replace("‘", "'")
}


function getRandomItem(items){
  return items[Math.floor(Math.random()*items.length)];
}

function getRandomRound(){
  return getRandomItem(PARSED_ROUNDS)
}


const RoundsSelection = {
  getRandomRound: () => {
    return getRandomItem(PARSED_ROUNDS)
  }
}
