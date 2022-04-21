const Player = require('./player')
class Game{
    constructor(){
        this.board = {a1:'', a2:'', a3:'', b1:'', b2:'', b3:'', c1:'', c2:'', c3:''};
        this.turn;
        this.players = [new Player(1, '🛸'), new Player(2, '🚀')];
    }

    // Resetting the board
    resetBoard(){
        this.board = { a1: '', a2: '', a3: '', b1: '', b2: '', b3: '', c1: '', c2: '', c3: '' }
        this.turn = this.players[0];
    }
    switchPlayers(){
        if(this.turn === this.players[0]){
            this.turn = this.players[1]
        } else {
            this.turn = this.players[0]
        }
    }

    // Adding tokens to the board functions
    addTo_a1(){
        if (this.turn === this.player[0] && this.board['a1'] === ''){
            this.board['a1'] = this.players[0].token
        } else if (this.board['a1'] === ''){
            this.board['a1'] = this.players[1].token
        }
        switchPlayers();
    }
    addTo_a2() {
        if (this.turn === this.player[0] && this.board['a2'] === '') {
            this.board['a2'] = this.players[0].token
        } else {
            this.board['a2'] = this.players[1].token
        }
        switchPlayers();
    } 
    addTo_a3() {
        if (this.turn === this.player[0] && this.board['a3'] === '') {
            this.board['a3'] = this.players[0].token
        } else {
            this.board['a3'] = this.players[1].token
        }
        switchPlayers();
    } 
    addTo_b1() {
        if (this.turn === this.player[0] && this.board['b1'] != '') {
            this.board['b1'] = this.players[0].token
        } else {
            this.board['b1'] = this.players[1].token
        }
        switchPlayers();
    } 
    addTo_b2() {
        if (this.turn === this.player[0] && this.board['b2'] != '') {
            this.board['b2'] = this.players[0].token
        } else {
            this.board['b2'] = this.players[1].token
        }
        switchPlayers();
    } 
    addTo_b3() {
        if (this.turn === this.player[0] && this.board['b3'] != '') {
            this.board['b3'] = this.players[0].token
        } else {
            this.board['b3'] = this.players[1].token
        }
        switchPlayers();
    }
    addTo_c1() {
        if (this.turn === this.player[0] && this.board['c1'] != '') {
            this.board['c1'] = this.players[0].token
        } else {
            this.board['c1'] = this.players[1].token
        }
        switchPlayers();
    }
    addTo_c2() {
        if (this.turn === this.player[0] && this.board['c2'] != '') {
            this.board['c2'] = this.players[0].token
        } else {
            this.board['c2'] = this.players[1].token
        }
        switchPlayers();
    }
    addTo_c3() {
        if (this.turn === this.player[0] && this.board['c3'] != '') {
            this.board['c3'] = this.players[0].token
        } else {
            this.board['c3'] = this.players[1].token
        }
        switchPlayers();
    }

    // How will a player win?
    winConditions(){ 
        // Player 1 checks
        if (this.board['a1'] === this.players[0].token && this.board['a2'] === this.players[0].token && this.board['a3'] === this.players[0].token){
            this.players[0].increaseWins(); // Player 1 top row win
            this.players[1].increaseLosses();
            this.resetBoard() 
        } else if (this.board['b1'] === this.players[0].token && this.board['b2'] === this.players[0].token && this.board['b3'] === this.players[0].token) {
            this.players[0].increaseWins(); // Player 1 middle row win
            this.players[1].increaseLosses();
            this.resetBoard()
        } else if (this.board['c1'] === this.players[0].token && this.board['c2'] === this.players[0].token && this.board['c3'] === this.players[0].token) {
            this.players[0].increaseWins(); // Player 1 bottom row win
            this.players[1].increaseLosses();
            this.resetBoard()
        } else if (this.board['a1'] === this.players[0].token && this.board['b1'] === this.players[0].token && this.board['c1'] === this.players[0].token) {
            this.players[0].increaseWins(); // Player 1 left column win
            this.players[1].increaseLosses();
            this.resetBoard()
        } else if (this.board['a2'] === this.players[0].token && this.board['b2'] === this.players[0].token && this.board['c2'] === this.players[0].token) {
            this.players[0].increaseWins(); // Player 1 middle column win
            this.players[1].increaseLosses();
            this.resetBoard()
        } else if (this.board['a3'] === this.players[0].token && this.board['b3'] === this.players[0].token && this.board['c3'] === this.players[0].token) {
            this.players[0].increaseWins(); // Player 1 right column win
            this.players[1].increaseLosses();
            this.resetBoard()
        } else if (this.board['a1'] === this.players[0].token && this.board['b2'] === this.players[0].token && this.board['c3'] === this.players[0].token) {
            this.players[0].increaseWins(); // Player 1 back-slash win
            this.players[1].increaseLosses();
            this.resetBoard()
        } else if (this.board['a3'] === this.players[0].token && this.board['b2'] === this.players[0].token && this.board['c1'] === this.players[0].token) {
            this.players[0].increaseWins(); // Player 1 forward-slash win
            this.players[1].increaseLosses();
            this.resetBoard()
        // Player 2 checks
        if (this.board['a1'] === this.players[1].token && this.board['a2'] === this.players[1].token && this.board['a3'] === this.players[1].token) {
            this.players[1].increaseWins(); // Player 2 top row win
            this.players[0].increaseLosses();
            this.resetBoard()
        } else if (this.board['b1'] === this.players[1].token && this.board['b2'] === this.players[1].token && this.board['b3'] === this.players[1].token) {
            this.players[1].increaseWins(); // Player 2 middle row win
            this.players[0].increaseLosses();
            this.resetBoard()
        } else if (this.board['c1'] === this.players[1].token && this.board['c2'] === this.players[1].token && this.board['c3'] === this.players[1].token) {
            this.players[1].increaseWins(); // Player 2 bottom row win
            this.players[0].increaseLosses();
            this.resetBoard()
        } else if (this.board['a1'] === this.players[1].token && this.board['b1'] === this.players[1].token && this.board['c1'] === this.players[1].token) {
            this.players[1].increaseWins(); // Player 2 left column win
            this.players[0].increaseLosses();
            this.resetBoard()
        } else if (this.board['a2'] === this.players[1].token && this.board['b2'] === this.players[1].token && this.board['c2'] === this.players[1].token) {
            this.players[1].increaseWins(); // Player 2 middle column win
            this.players[0].increaseLosses();
            this.resetBoard()
        } else if (this.board['a3'] === this.players[1].token && this.board['b3'] === this.players[1].token && this.board['c3'] === this.players[1].token) {
            this.players[1].increaseWins(); // Player 2 right column win
            this.players[0].increaseLosses();
            this.resetBoard()
        } else if (this.board['a1'] === this.players[1].token && this.board['b2'] === this.players[1].token && this.board['c3'] === this.players[1].token) {
            this.players[1].increaseWins(); // Player 2 back-slash win
            this.players[0].increaseLosses();
            this.resetBoard()
        } else if (this.board['a3'] === this.players[1].token && this.board['b2'] === this.players[1].token && this.board['c1'] === this.players[1].token) {
            this.players[1].increaseWins(); // Player 2 forward-slash win
            this.players[0].increaseLosses();
            this.resetBoard()
        } else if (this.board['a1'] != '' && this.board['a2'] != '' && this.board['a3'] != '' && this.board['b1'] != '' && this.board['b2'] != '' && this.board['b3'] != '' && this.board['c1'] != '' && this.board['c2'] != '' && this.board['c3'] != ''){
            this.players[0].increaseTies();
            this.players[1].increaseTies();
            }
        }
    }
}