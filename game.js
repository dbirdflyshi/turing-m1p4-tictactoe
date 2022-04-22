class Game{
    constructor(){
        this.board = { a1: null, a2: null, a3: null, b1: null, b2: null, b3: null, c1: null, c2: null, c3: null};
        this.players = [new Player(1, '🛸'), new Player(2, '🚀')];
        this.turn = this.players[0];
        this.won;
    }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Resetting the board
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    resetBoard(){
        this.board = { a1: null, a2: null, a3: null, b1: null, b2: null, b3: null, c1: null, c2: null, c3: null };
        if(this.won.playerId === 1){
            this.turn = this.players[1];
        } else {
            this.turn = this.players[0];
        }
        moveIndicator.innerText = game.won.token + " Won!"
        window.setTimeout(reDrawSite,2000);
    }

    tieResetBoard(){
        this.board = { a1: null, a2: null, a3: null, b1: null, b2: null, b3: null, c1: null, c2: null, c3: null };
        this.turn = this.players[0];
        moveIndicator.innerText = "It's A Draw!"
        window.setTimeout(reDrawSite, 2000);
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Switching the players
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    switchPlayers(){
        if(this.turn === this.players[0]){
            this.turn = this.players[1]
        } else {
            this.turn = this.players[0]
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Adding tokens to the board
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    addTo_a1(){
        if (this.turn === this.players[0] && this.board['a1'] === null){
            this.board['a1'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['a1'] === null){
            this.board['a1'] = this.players[1].token
            this.switchPlayers();
        }
        console.log(this.board)
    }
    addTo_a2() {
        if (this.turn === this.players[0] && this.board['a2'] === null) {
            this.board['a2'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['a2'] === null) {
            this.board['a2'] = this.players[1].token
            this.switchPlayers();
        }
    } 
    addTo_a3() {
        if (this.turn === this.players[0] && this.board['a3'] === null) {
            this.board['a3'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['a3'] === null) {
            this.board['a3'] = this.players[1].token
            this.switchPlayers();
        }
    } 
    addTo_b1() {
        if (this.turn === this.players[0] && this.board['b1'] === null) {
            this.board['b1'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['b1'] === null) {
            this.board['b1'] = this.players[1].token
            this.switchPlayers();
        }
    } 
    addTo_b2() {
        if (this.turn === this.players[0] && this.board['b2'] === null) {
            this.board['b2'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['b2'] === null) {
            this.board['b2'] = this.players[1].token
            this.switchPlayers();
        }
    } 
    addTo_b3() {
        if (this.turn === this.players[0] && this.board['b3'] === null) {
            this.board['b3'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['b3'] === null) {
            this.board['b3'] = this.players[1].token
            this.switchPlayers();
        }
    }
    addTo_c1() {
        if (this.turn === this.players[0] && this.board['c1'] === null) {
            this.board['c1'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['c1'] === null) {
            this.board['c1'] = this.players[1].token
            this.switchPlayers();
        }
    }
    addTo_c2() {
        if (this.turn === this.players[0] && this.board['c2'] === null) {
            this.board['c2'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['c2'] === null) {
            this.board['c2'] = this.players[1].token
            this.switchPlayers();
        }
    }
    addTo_c3() {
        if (this.turn === this.players[0] && this.board['c3'] === null) {
            this.board['c3'] = this.players[0].token
            this.switchPlayers();
        } else if (this.board['c3'] === null) {
            this.board['c3'] = this.players[1].token
            this.switchPlayers();
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Checking Win Draw or Loss Conditions
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    checkDraw(){
        if (this.board['a1'] !== null && this.board['a2'] !== null && this.board['a3'] !== null && this.board['b1'] !== null && this.board['b2'] !== null && this.board['b3'] !== null && this.board['c1'] !== null && this.board['c2'] !== null && this.board['c3'] !== null){
            game.tieResetBoard();
        }
    }
    playerOneWon(){
        this.players[0].increaseWins();
        this.players[1].increaseLosses();
        this.won = this.players[0];
    }

    playerTwoWon() {
        this.players[1].increaseWins();
        this.players[0].increaseLosses();
        this.won = this.players[1];
    }    

    // How will a player win?
    winConditions(){ 
        // Player 1 checks
        if (this.board['a1'] === this.players[0].token && this.board['a2'] === this.players[0].token && this.board['a3'] === this.players[0].token){
            this.playerOneWon() // Player 1 top row win
            this.resetBoard() 
        } else if (this.board['b1'] === this.players[0].token && this.board['b2'] === this.players[0].token && this.board['b3'] === this.players[0].token) {
            this.playerOneWon()  // Player 1 middle row win
            this.resetBoard()
        } else if (this.board['c1'] === this.players[0].token && this.board['c2'] === this.players[0].token && this.board['c3'] === this.players[0].token) {
            this.playerOneWon()  // Player 1 bottom row win
            this.resetBoard()
        } else if (this.board['a1'] === this.players[0].token && this.board['b1'] === this.players[0].token && this.board['c1'] === this.players[0].token) {
            this.playerOneWon()  // Player 1 left column win
            this.resetBoard()
        } else if (this.board['a2'] === this.players[0].token && this.board['b2'] === this.players[0].token && this.board['c2'] === this.players[0].token) {
            this.playerOneWon()  // Player 1 middle column win
            this.resetBoard()
        } else if (this.board['a3'] === this.players[0].token && this.board['b3'] === this.players[0].token && this.board['c3'] === this.players[0].token) {
            playerOneWon()  // Player 1 right column win
            this.resetBoard()
        } else if (this.board['a1'] === this.players[0].token && this.board['b2'] === this.players[0].token && this.board['c3'] === this.players[0].token) {
            this.playerOneWon()  // Player 1 back-slash win
            this.resetBoard()
        } else if (this.board['a3'] === this.players[0].token && this.board['b2'] === this.players[0].token && this.board['c1'] === this.players[0].token) {
            this.playerOneWon()  // Player 1 forward-slash win
            this.resetBoard()
        // Player 2 checks
        } else if (this.board['a1'] === this.players[1].token && this.board['a2'] === this.players[1].token && this.board['a3'] === this.players[1].token) {
            this.playerTwoWon()  // Player 2 top row win
            this.resetBoard()
        } else if (this.board['b1'] === this.players[1].token && this.board['b2'] === this.players[1].token && this.board['b3'] === this.players[1].token) {
            this.playerTwoWon()  // Player 2 middle row win
            this.resetBoard()
        } else if (this.board['c1'] === this.players[1].token && this.board['c2'] === this.players[1].token && this.board['c3'] === this.players[1].token) {
            this.playerTwoWon()  // Player 2 bottom row win
            this.resetBoard()
        } else if (this.board['a1'] === this.players[1].token && this.board['b1'] === this.players[1].token && this.board['c1'] === this.players[1].token) {
            this.playerTwoWon()  // Player 2 left column win
            this.resetBoard()
        } else if (this.board['a2'] === this.players[1].token && this.board['b2'] === this.players[1].token && this.board['c2'] === this.players[1].token) {
            this.playerTwoWon()  // Player 2 middle column win
            this.resetBoard()
        } else if (this.board['a3'] === this.players[1].token && this.board['b3'] === this.players[1].token && this.board['c3'] === this.players[1].token) {
            this.playerTwoWon()  // Player 2 right column win
            this.resetBoard()
        } else if (this.board['a1'] === this.players[1].token && this.board['b2'] === this.players[1].token && this.board['c3'] === this.players[1].token) {
            this.playerTwoWon()  // Player 2 back-slash win
            this.resetBoard()
        } else if (this.board['a3'] === this.players[1].token && this.board['b2'] === this.players[1].token && this.board['c1'] === this.players[1].token) {
            this.playerTwoWon()  // Player 2 forward-slash win
            this.resetBoard()
        }
    }
}