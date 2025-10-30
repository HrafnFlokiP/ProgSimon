var currentPage = '#page5'

//P5 setup() bliver kaldt EN gang før siden vises 
function setup(){
    console.log('P5 setup kaldt')
    //Sæt event listeners op på menu
    //select all pages
    var allPages = selectAll('.page');
    //loop list again one for one
    allPages.map(
        page => {
            //made a new <a> element
            var menuItem = createElement('a')

            menuItem.html(page.atribute('title'))

            menuItem.mousePressed(
                () => shiftPage('#' + page.attribute('id'))
            )

            select('.sidebar').child(menuItem)
        }
    )

}


function shiftPage(newPage){
    select(currentPage).removeClass('show')
    select(newPage).addClass('show')
    currentPage = newPage
}


