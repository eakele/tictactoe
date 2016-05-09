
var container = $('<div>').attr('id','container');
var body = $('body');
body.append(container);
var row1 = $('<div>').addClass('row 1');
var row2 = $('<div>').addClass('row 2');
var row3 = $('<div>').addClass('row 3');

container.append(row1,row2,row3);

var column1 = $('<div>').addClass('column1 1');
var column2 = $('<div>').addClass('column1 2');
var column3 = $('<div>').addClass('column1 3');

row1.append(column1,column2,column3);

var column1 = $('<div>').addClass('column1 1');
var column2 = $('<div>').addClass('column1 2');
var column3 = $('<div>').addClass('column1 3');

row2.append(column1,column2,column3);

var column1 = $('<div>').addClass('column1 1');
var column2 = $('<div>').addClass('column1 2');
var column3 = $('<div>').addClass('column1 3');

row3.append(column1,column2,column3);

body.css({
  'margin': '0',
  'padding': '0',
  'width': '100%',
  'height': '100%'
})
container.css({
  'height': '300px',
  'width': '300px',
  'top':'25%',
  'left': '25%',
  'margin':'0 ',
  'padding': '0',
  'position': 'absolute',
  'border-color': 'black',
  'border-style':'solid'
})
$('.row').css({
  'position':'relative',
  'display':'flex',
  'width': '300px',
  'height':'100px',
  'padding': '0',
  'border-color': 'black'
})

$('.column1').css({
  'float': 'left',
  'width': '100px',
  'height': '100px',
  'padding': '0',
  'border-style':'solid',
  'border-color': 'black'
})

.click(function() {
  $(this).text('x');
})
