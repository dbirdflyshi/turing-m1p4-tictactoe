# Space Wars!
## Table of Contents

## Introduction
`Now that you’ve got the main foundations down to build out a frontend application, it’s time to prove to yourself that you own those skills! You’re going to be building a Tic Tac Toe game from scratch!`

With this expectation in mind, they gave us just about nothing but some minor expectations. We were to build everything from scratch, no boilerplate, no repository, no iterations, epics or anything. This project is our first test in seeing if we can solve problems on our own, plan out a full app and execute to completion. 

## Project Specifications
The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html)

## Learning goals for the project
* This project is a culmination of every single lesson we've learned so far in Mod 1. 
  *  The DOM
  *  Data Models including Bracket & Dot notation
  *  DRY Object oriented thinking and coding
  *  Classes
  *  User events & listeners
  *  Bubbling, Propogation, Capturing
  *  HTML
  *  CSS with Flexbox 
  *  Proper Git ettiquite 
  *  Debugging
  *  Refactoring
* Our goal was to use everything we learned in the past and implement them here in this game. 
* Further strengthen our strongest skills
* Hone in on our areas of opportunity

## Features
* The top displays which player’s turn it is
* They can only place their token in an empty square
* Attempting to place their token on a square that’s already occupied will not work, and it remains their turn
* Once they place their token, it becomes the other player’s turn (the banner updates to communicate this)
* A player can win by connecting 3 horizontally, vertically, or diagonally. When a win occurs
  * The top banner changes to declare the winner
  * The dom updates to state how many wins the player has total
  * The game RESTARTS ITSELF after a brief pause, (long enough that the winner message can be read before resetting)
  * The player who didn’t begin the previous game now is the first player to go in the new game A draw can occur, in which case:
  * The top banner declares a draw
  * Neither player’s win count increases or decreases
  * The game restarts after a brief pause, with the opposite player beginning the game (just like when a game restarts after a player wins)

## Possible Feature Extensions
* Implement LocalStorage to save the results after refresh
* Integrate it to be single player with an AI to play the game with you
* Ability to choose your tokens

## Deployed Page
You can view the published page [Here]()

## Sources
[Keeping the table the same size regardless of content](https://stackoverflow.com/questions/4457506/set-the-table-column-width-constant-regardless-of-the-amount-of-text-in-its-cell) 

[Background size maipulation](https://www.w3schools.com/cssref/css3_pr_background-size.asp) 

[Pausing your site](https://www.w3schools.com/jsref/met_win_settimeout.asp) 

[Random image as your background](https://stackoverflow.com/questions/18288950/random-fullscreen-background-image-on-browser-refresh) 

[Space Wallpapers](https://wallpaperaccess.com/4k-space) 

[Preventing double border lines in your table](https://stackoverflow.com/questions/49746714/html-table-border-double-line) 

[Removing the outer table border](https://stackoverflow.com/questions/35571603/removing-outer-border-in-html-table) 

[Hex to RGBA](https://rgbacolorpicker.com/hex-to-rgba) 

[Space Fonts](https://www.fontspace.com/space-mission-font-f56190) 

[Making the background transparent but not the text iteself](https://stackoverflow.com/questions/15449280/making-text-background-transparent-but-not-text-itself) 

[Using fonts downloaded from the internet on your page](https://stackoverflow.com/questions/3245141/using-otf-fonts-on-web-browsers) 

[Atari font](https://www.fontspace.com/sf-atarian-system-font-f6230) 

