var bookmarkList = [];
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

if (localStorage.getItem("bookmark") != null){
bookmarkList = JSON.parse(localStorage.getItem("bookmark"));
displayData(bookmarkList)
}else bookmarkList = [];


function addNew() {


        if (siteName.value == null || siteName.value == "") {
            alert("please fill the required fields")
        }
        if (siteUrl.value == null || siteUrl.value == "") {
            alert("please fill the required fields")
        }
    
    else {
    var bookmak = {
        name: siteName.value,
        url: addHttp(siteUrl.value) 
    }

    bookmarkList.push(bookmak);
    localStorage.setItem("bookmark",JSON.stringify(bookmarkList))
    displayData(bookmarkList) ;
    resetInputs();}
    
}

function resetInputs() {
    siteName.value = "";
    siteUrl.value = "";

}
function displayData(bookmak) {

    var table = "";

    for (var i = 0; i < bookmak.length; i++) {


    table += `<div class="webwell row    mb-3" id="${bookmak[i].name}">
    <h2>${bookmak[i].name}</h2>
    <a class="btn btn-primary" href="${bookmak[i].url}" target="_blank">visit</a>
    <button onclick=" deleteItem(${i})" class="btn btn-danger btndelete">Delete</button>
    </div>`}
document.getElementById("bookmarkList").innerHTML = table;
    
}

function deleteItem(myIndex) {

    bookmarkList.splice(myIndex, 1) // index 
    localStorage.setItem("bookmark",JSON.stringify(bookmarkList))

    displayData(bookmarkList)
}


function addHttp(url) {
    if (url.search("http://") == -1 && url.search("https://") == -1)
        return "http://" + url;
    return url;
}