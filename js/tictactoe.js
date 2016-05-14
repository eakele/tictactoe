//list of possible winner index in tic tac toe
var winner = [
    // Horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
];
//first move is assummed to be x
var move = 'x';
//counter which stores the number of moves of 'x' and 'o' which later
//used to determine if the game is stalmate
var xCounter = 0;
var oCounter = 0;
//I used flag to avoid confusion from a win and drawn game in a case
//where the game goes on till the final move which is 9th move.
var flag = false;
//used to store the chosen squares by the players
var chosencells = {
    'x': [],
    'o': []
}


//creat a click event when a user clickes on a square and by using
//CSS (:not) selector prevent a square from being selected again in a game
$('.gameBoard').on('click', ".cell:not('.cell-x, .cell-o')", function(event) {
    //select a square
    var square = $(event.currentTarget);
    //Create a css class
    square.addClass('cell-' + move);

    var indexOfcell = $('.gameBoard .cell').index(square);
    //a variable which stores the index of each players move
    var currentPlayercells = chosencells[move]

    currentPlayercells.push(indexOfcell);
    console.log(chosencells);
    console.log(currentPlayercells);
    // Check for win
    //
    // For each winning combination
    $.each(winner, function(index, combination) {

        //assume the player has all the square
        var hasAllcells = true;

        // For each of squares in the combination
        $.each(combination, function(index, cell) {
            // If the player's chosen squares does not contain the current square
            if ($.inArray(cell, currentPlayercells) === -1) {
                hasAllcells = false;
            }
        });
        //these block of code will be executed when there is a winner in a game.

        if (hasAllcells) {
            flag = hasAllcells;
            //select a class with the winner move either 'x' or 'o' using css and
            //change the appearance of the selected squares
            $('.cell-' + move).css({
                'border-color': 'rgba(14, 9, 250, 0.86)',
                'border-style': 'solid'
            });
            //change the background-color of the body using css
            $('body')
                .css('background-color', 'rgba(187, 136, 58, 0.68)');
            //disable the click event on squares as the game is over
            $('.gameBoard').unbind();
            //diplay a text on h1 which indicates a winner
            $('h1').text(move + ' is a winner !!!')
                .css({
                    'text-align': 'center',
                    'float': 'left',
                    'width': '50%',
                    'color': 'rgb(237, 12, 66)',
                    'font-size': '35px',
                    'font-family': 'sans-serif',
                    'font-weight': 'bold'
                })
                .animate({
                    'font-size': '50px',
                    'opacity': '1'
                }, 3000)

            //diplay a button with specific appearance to enable start of a new game
            $('button')
                .text('New game')
                .css({
                    'background-color': 'rgb(187, 204, 186)',
                    'color': 'rgb(237, 12, 66)',
                    'visibility': 'visible',
                    'padding': '10px 25px',
                    'position': 'absolute',
                    'top': '3%',
                    'left': '50%',
                    'text-align': 'center',
                    'display': 'block',
                    'font-size': '16px'
                })
        }
    });
    //these condition is used to swap move in every click. If the first
    //move is 'x' the second move will be 'o' and viseversa
    if (move === 'x') {
        move = 'o';
        oCounter++;
    } else {
        move = 'x';
        xCounter++;
    }
    //in case where the game is drawn, this block of code will update the
    //text on h1 to indicate drawn game.
    if ((xCounter + oCounter == 9) && (flag == false)) {
        $('h1').text('Draw game...')
            .css({
                'text-align': 'center',
                'float': 'left',
                'width': '50%',
                'color': 'blue'
            })
            //
            .fadeIn("slow").animate({
                fontSize: '50px'
            });
        //diplay a button with specific appearance to enable start of a new
        // game as a game is drawn
        $('button')
            .text('Play again')
            .css({
                'background-color': 'rgb(187, 204, 186)',
                'color': 'blue',
                'visibility': 'visible',
                'padding': '10px 25px',
                'position': 'absolute',
                'top': '3%',
                'left': '50%',
                'text-align': 'center',
                'display': 'block',
                'font-size': '16px'
            })
    }
});
//reload the page when New game button is clicked(when there is a winner) or
//Play again button is clicked(when the game drawn)
$('#reset').on('click', function(event) {
    location.reload();
});
