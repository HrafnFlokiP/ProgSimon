const pagesC = 4;
let CurrentP = 1;

function goToPage(pageN){
    for (let i = 1; i <= pagesC; i++ ){
        if (i == pageN){
            document.getElementById('page'+i).classList.add('show');
        }  else {
            document.getElementById('page'+i).classList.remove('show');
        }
    }
    CurrentP = pageN
    console.log('current page;',currentPage)
    return CurrentP
}