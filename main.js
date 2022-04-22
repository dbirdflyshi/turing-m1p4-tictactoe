//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Wallpaper Cycler 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var totalCount = 9;
var num = Math.ceil(Math.random() * totalCount);
document.body.background = './assets/images/' + num + '.jpg';
document.body.style.backgroundSize = "cover";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// query selector variables go here 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var player1WinCount = document.querySelector('#player1WinCount')
var player1LossCount = document.querySelector('#player1LossCount')
var player1DrawCount = document.querySelector('#player1DrawCount')
var player2WinCount = document.querySelector('#player2WinCount')
var player2LossCount = document.querySelector('#player2LossCount')
var player2DrawCount = document.querySelector('#player2DrawCount')
var moveIndicator = document.querySelector('#moveIndicator')
var spaces = document.querySelectorAll('td');
var gameBoard = document.querySelector('table'); // Because spaces doesn't work -shrug-

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// event listeners go here 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
gameBoard.addEventListener('click', putToken);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Global Variables Go here 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var game = new Game(); // Making the game instance 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// functions and event handlers go here 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Used when we are ready to update information
function reDrawSite() {
    player1WinCount.innerText = game.players[0].wins + ' Wins'
    player1LossCount.innerText = game.players[0].losses + ' Losses'
    player1DrawCount.innerText = game.players[0].draws + ' Draws'
    player2WinCount.innerText = game.players[1].wins + ' Wins'
    player2LossCount.innerText = game.players[1].losses + ' Losses'
    player2DrawCount.innerText = game.players[1].draws + ' Draws'
    moveIndicator.innerText = "It's " + game.turn.token + "'s Move"
    for (let i = 0; i < spaces.length; i++) {
        spaces[i].innerText = Object.values(game.board)[i] // filling in the game board
    }
}
// Initially drawing the board
reDrawSite();

function putToken(){
    if(event.target.id === 'a1'){
        game.addTo_a1();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    } else if (event.target.id === 'a2') {
        game.addTo_a2();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    } else if (event.target.id === 'a3') {
        game.addTo_a3();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    } else if (event.target.id === 'b1') {
        game.addTo_b1();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    } else if (event.target.id === 'b2') {
        game.addTo_b2();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    } else if (event.target.id === 'b3') {
        game.addTo_b3();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    } else if (event.target.id === 'c1') {
        game.addTo_c1();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    } else if (event.target.id === 'c2') {
        game.addTo_c2();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    } else if (event.target.id === 'c3') {
        game.addTo_c3();
        reDrawSite();
        game.winConditions();
        game.checkDraw();
    }
}