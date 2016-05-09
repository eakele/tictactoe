var move = 'x';

$('.gameBoard').on('click', '.cell', function(event) {
  var $clickedCell = $(event.currentTarget) ;
  $clickedCell.addClass('cell-' + move);
  if (move === 'x'){
    move = 'o';
  }else{
    move = 'x';
  }
});
$('.gameBoard').on('click', '.cell', function() {
  console.log($('cell-x').val());
})
