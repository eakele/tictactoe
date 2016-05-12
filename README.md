Tic Tac Toe

I used HTML, CSS, JavaScript and jQuery for building tic tac toe application.

HTML

I use HTML for the design of tic tac toe game.

| *h1 : used to display the name of the game, which is 'tic tac toe' on the left corner of the browser.*
| *button : used to reset the html elements after a game is either finished by a winner or a game finishes as a stalmate.*
| *div: I have a div which contains the whole game with the class name of 'gameBoard' inside it I have three other divs as a row with a class* name of 'row'. Inside each row I have three divs which represents individual cells with a class name of 'cell'.
I have a link to my css file and javascript file as well as link to jQuery version that I used.

CSS

I used CSS for styling

| *body : I use CSS here to be able to use the whole window.*
| *gameBoard: make my game board 300px by 300px using css and its position on window as well as coloring.*
| *row: adjust the postions and size of the rows as I have three of them inside my gameBoard. The flex property let the items to be the same* length regardless of its content.
| *cell : adjust the size and the position of each cell as I have three of them in each row.*
| *:hover: I use the hover selector to change the color of cells as mouse hovers over them.*
| *cell-x::before: used to inset content before the cell-x class and style the inserted content.*
| *display: is an id for html h1 element. I use some styles to decorate it.*
| *reset: is an id for the button, I used it to hide the button until the game if finished as a win or as a draw, where the button will be used* to reset all cells for a new game.

jQuery part of the code

Within any element with class .gameBoard, listen for clicks on any element with a class .cell. and trigger jQuery event handler. Use event.currentTarget to find the DOM element that was clicked and store it in a variable 'square'.

```
$('.board').on('click', '.square', function(event) {
 Select the square
  var square = $(event.currentTarget);
});
```
Updating the Board

I used the jQuery .addClass to fill the square with either 'X' or 'O' when a user clicks on a square.
the example below uses a class which adds 'X'.
```
$('.gameBoard').on('click', '.cell', function(event) {
  Select the square//
  var square = $(event.currentTarget);
  square.addClass('cell-x');
});
```
Swapping between players

A variable move is used to store the current player's move as either 'X' or 'O'. Whenever a square is clicked on,
if it was 'X' swap it with 'O'.

Initialize current player move as 'x'
var move = 'x';
```
$('.gameBoard').on('click', '.cell', function(event) {
  Select the square//
  var square = $(event.currentTarget);
  square.addClass('cell-' + move);

  Swap current player's move//
  if (move === 'x') {
    move = 'o';
  } else {
    move = 'x';
  }
});
```
I used the CSS :not class to prevent a square from being chosen again

Initialize current player move as 'x'
```
var move = 'x';

$('.gameBoard').on('click', ".cell:not('.cell-x, .cell-o')", function(event) {
   Select the square//
  var square = $(event.currentTarget);
  square.addClass('cell-' + move);

  Swap current player's move//
  if (move === 'x') {
    move = 'o';
  } else {
    move = 'x';
  }
});
```
Finding the Winner

All the Winning Combinations are hard coded for comparison using two dimensional array each item in the array will be another array containing
three indices that represent a single winning combination.

In the next step the index of each square that is chosen by each player  is recorded. Then compare the player's choices to the winning combinations to determine if it is a winner move.

Here is the program up to this point:
```
var winningCombinations = [
  Horizontals//
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  Verticals//
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  Diagonals//
  [0, 4, 8],
  [2, 4, 6]
];

Initialize current player move as 'x'//
var move = 'x';

$('.gameBoard').on('click', ".cell:not('.cell-x, .cell-o')", function(event) {
  Select the square//
  var square = $(event.currentTarget);
  square.addClass('cell-' + move);

  Swap current player's move//
  if (move === 'x') {
    move = 'o';
  } else {
    move = 'x';
  }
});
```
Storing Each Player's Choices

Record the index of a move by a player in an array for later comparison for a winner

Initialize a hash to store all of the chosen squares for each player//
```
var chosenCells = {
  'x': [],
  'o': []
}

$('.gameBoard').on('click', ".cell:not('.cell-x, .cell-o')", function(event) {
  Select the square//
  var square = $(event.currentTarget);
  square.addClass('cell-' + move);

  Record player's choice//
  var indexOfSquare = $('.gameBoard .cell').index(square);
  var currentPlayercells = chosenCells[move]
  currentPlayercells.push(indexOfSquare);


  Swap current player's move//   
  if (move === 'x') {
    move = 'o';
  } else {
    move = 'x';
  }
});
```

Check all of the player's choices against each of the winning combinations to determine if they have won.
look at each of the winning combinations, and then determine if the player has all of the required squares. This is done by iterating over each of the squares inside of each combination, and using $.inArray() to determine the currentPlayercells array contains the square. $.inArray() return -1 if a match is not found.

```
Check for win//
//
For each winning combination//
$.each(winningCombinations, function(index, combination) {
  Stary by assuming that the player has all of the squares//
  var hasAllSquares = true;

  For each of squares in the combination//
  $.each(combination, function(index, square) {
    If the player's chosen squares does not contain the current square//
    if ($.inArray(square, currentPlayercells) === -1) {
      hasAllSquares = false;
    }
  });

  if (hasAllSquares) {
    alert(move + ' wins!');
  }
});
```
