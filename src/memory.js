class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else {
      return this.cards.sort(() => Math.random() - 10)
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++
if (card1 === card2) {
 this.pairsGuessed ++
return true
} else {
  return false
}


}

  checkIfFinished() {
   if (this.pairsGuessed === this.cards.length / 2) {
    return true
   } else {
    return false
   }
  }
}
