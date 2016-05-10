
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
var move = 'x';

var chosencells = {
  'x': [],
  'o': []
}

$('.gameBoard').on('click', ".cell:not('.cell-x, .cell-o')", function(event) {
  var $cell = $(event.currentTarget);


  console.log($cell);


  $cell.addClass('cell-' + move);

  var indexOfcell = $('.gameBoard .cell').index($cell);
  var currentPlayercells = chosencells[move]
  currentPlayercells.push(indexOfcell);


  $.each(winner, function(index, combination) {

    var hasAllcells = true;

    $.each(combination, function(index, cell) {
      console.log('nnnnnn '+chosencells[1]);

      if ($.inArray(cell, currentPlayercells) === -1) {
        hasAllcells = false;
          }
    });

    if (hasAllcells) {
      //disable the click event on cells as the game is over
      $('.gameBoard').unbind();
      $('h1').text(move+'  wins !!!')
      .css({
        'text-align':'center',
        'float': 'left',
        'width': '50%',
        'color':'red'
      });
      $('button')
          .text('New game')
          .css({
            'background-color': 'rgb(187, 204, 186)',
            'color': 'green',
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

  if (move === 'x') {
    move = 'o';
  } else {
    move = 'x';
  }
});
$('#reset').on('click',function(event){
  location.reload();
});
