export default class Game {
  constructor(boardSize, boardChar) {
    this.board = new Board(boardSize, boardChar);
    this.pairCandidate = null;
    this.pairs = [];
  }

  openCard(row, col) {
    const card = this.getCard(row, col);
    card.setState('opened');

    console.log('openedCard: ', this.getCards());
    if (this.pairCandidate == null) {
      // there is no pairCandidate yet,
      // open this card and start the timer (TODO)
      this.pairCandidate = card;
    } else {
      if (this.pairCandidate.char == card.char) {
        // TODO: add pairing score

        this.getCard(
          this.pairCandidate.col,
          this.pairCandidate.row
        ).setState('paired');
        //this.pairCandidate.setState('paired');
        card.setState('paired');
        return;
      }
      // reset both
      this.getCard(
        this.pairCandidate.col,
        this.pairCandidate.row
      ).setState('closed');
      this.pairCandidate = null;
      card.setState('closed');
    }
    console.log('after open:', this.getCards());
  }

  getCard(row, col) {
    return this.board.cards[row][col];
  }

  getCards() {
    return this.board.cards;
  }
};

class Board {
  constructor(boardSize, boardChar) {
    this.size = boardSize;
    this.char = boardChar;
    this.cards = []; // is a 2d array[col][row]
    this.generateCards();
  }

  generateCards() {
    let availChar = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
      .split(',');
    this.recurse_genCard(0, 0, availChar, [], 0);
  }

  recurse_genCard(col, row, inChars, usedChars, i) {
    if (col == this.size) {
      col = 0;
      row++;
    }
    if (row == this.size) {
      return;
    }

    let takeChar = ''; let charIndex;
    if (i < (this.size * this.size) / 2) {
      charIndex = Math.floor(Math.random() * inChars.length);
      takeChar = inChars[charIndex];
      inChars.splice(charIndex, 1); // remove char from inChars
      usedChars[i] = takeChar; // add to usedChars
      i++; // increment index
    } else {
      charIndex = Math.floor(Math.random() * usedChars.length);
      takeChar = usedChars[charIndex];

      usedChars.splice(charIndex, 1);
    }

    if (!Array.isArray(this.cards[row])) {
      this.cards[row] = [];
    }
    this.cards[row][col] = new BoardCard(col, row, takeChar);
    col++;
    this.recurse_genCard(col, row, inChars, usedChars, i);
  }
}

class BoardCard {
  constructor(col, row, char) {
    this.col = col;
    this.row = row;
    this.char = char;
    this.state = 'closed'; // closed|opened|paired
  }

  setState(newState) {
    if (newState != 'opened'
    && newState != 'closed'
    && newState != 'paired') {
      throw "new state is invalid. State must be any of following: (opened|closed|paired).";
    }
    this.state = newState;
  }
}
