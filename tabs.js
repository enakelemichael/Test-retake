$menu = $('.menu');

const $pageA = $('.page').eq(0);
const $pageB = $('.page').eq(1);
const $pageC = $('.page').eq(2);

const $headingA = $('h1').eq(0);
const $headingB = $('h1').eq(1);
const $headingC = $('h1').eq(2);

$buttonA = $("<button id='btn-a'> Content A </button>");
$buttonB = $("<button id='btn-b'> Content B </button>");
$buttonC = $("<button id='btn-c'> Content C </button>");


$menu.append($buttonA);
$menu.append($buttonB);
$menu.append($buttonC);

$pageB.hide();
$pageC.hide();

$buttonA.click(function(){
    $pageA.show();
    $pageB.hide();
    $pageC.hide();
});

$buttonB.click(function(){
    $pageA.hide();
    $pageB.show();
    $pageC.hide();
});

$buttonC.click(function(){
    $pageA.hide();
    $pageB.hide();
    $pageC.show();
});
