
var currentPage = '#page5';

//p5 setup gets called one time before the site shows
function setup(){
    console.log('p5 setup called')
    //select the event listners on the menu
    select('#menu-slide1')
}


function shiftPage(newPage){
    Select(currentPage).removeClass('show')
    select(newPage).addClass('show')
    currentPage = newPage
}
