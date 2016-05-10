Tic Tac Toe

I used HTML, CSS, JavaScript and jQuery for building tic tac toe application.

HTML

I use HTML for the design of tic tac toe game board and to display messages on the browser.
elements detail :
  h1 : used to display the name of the game, which is 'tic tac toe' on the left corner of the browser.
  button : used to reset the html elements after a game is either finished by a winner or a game finishes as a stalmate.
  div: I have a div which contains the whole game with the class name of 'gameBoard' inside it I have three other divs as a row with a class name of 'row'. Inside each row I have three divs which represents individual cells with a class name of 'cell'.
  I have a link to my css file and javascript file as well as link to jQuery version that I used.

  CSS

  I used CSS to give beautify my design by giving it a bit of color and style. I used CSS for:

  body : I use CSS here to be able to use the whole window.

  gameBoard: make my game board 300px by 300px using css and its position on window as well as coloring.

  row: adjust the postions and size of the rows as I have three of them inside my gameBoard. The flex property let the items to be the same length regardless of its content.

  cell : adjust the size and the position of each cell as I have three of them in each row.

  :hover: I use the hover selector to change the color of cells as mouse hovers over them.

  cell-x::before: used to inset content before the cell-x class and style the inserted content.

  display: is an id for html <h1> element. I use some styles to decorate it.

  reset: is an id for the button, I used it to hide the button until the game if finished as a win or as a draw, where the button will be used to reset all cells for a new game.
