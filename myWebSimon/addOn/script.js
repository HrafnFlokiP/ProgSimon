
const totalPages = 5;
let currentPage = 1;

function goToPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        if (i == pageNumber) {
            document.getElementById('page'+i).classList.add('show');
        } else {
            document.getElementById('page'+i).classList.remove('show');
        }
    }
    currentPage = pageNumber;
    console.log("Current Page", currentPage);
    return currentPage
}