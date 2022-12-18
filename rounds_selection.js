
const PARSED_ROUNDS = $.csv.toObjects(ROUNDS_CSV);

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
