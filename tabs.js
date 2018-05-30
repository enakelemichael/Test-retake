function create_tabs(container_id) 
{

  const $pageA = $('.page');
  const $headingA = $('h1').eq(0);
  const $headingB = $('h1').eq(1);
  const $headingC = $('h1').eq(2);
  
  $buttonA = $("<button id='btn-a'>" + $headingA + "</button>");
  $buttonB = $("<button id='btn-b'>" + $headingB + "</button>");
  $buttonC = $("<button id='btn-c'>" + $headingC + "</button>");

  $menu.append($buttonA);
  $menu.append($buttonB);
  $menu.append($buttonC);

}