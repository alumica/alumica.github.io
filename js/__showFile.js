var all_File = ["index.html","style.css", "main.js", "index2.html", "index3.html"];
var link_File = ["#","#", "#"];
var all_length = all_File.length;

function __insertCell() {
    var table = document.getElementById("myTable");
    //var cell1 = row.insertCell(0);
    for (let i = 0; i < all_File.length; i++) {
        var row = table.insertRow(2+i);
        row.insertCell(0);
    }
}


function insertIcon()
{   
    for (let i = 0; i < all_File.length; i++) {
        var icon = document.createElement("i");
        document.querySelector("div.table>table>tbody>tr:nth-child(" + (3+i) +")>td").appendChild(icon);
        var selIcoin = document.querySelector("div.table>table>tbody>tr:nth-child("+ (3+i) +")>td>i");
        selIcoin.className = getFileExtension(all_File[i]);
        switch (selIcoin.className) {
            case "fab fa-html5":
                selIcoin.style = "color: #f16529;";
                break;
            case "fab fa-css3-alt":
                selIcoin.style = "color: #2965f1;";
                break;
            case "fab fa-js":
                selIcoin.style = "color: #f0cf16;";
                break; 
        }
    }    
    
}    

function getFileExtension(filename) {
    
    let getF = filename.split('.').pop();
    let x = "";
    switch(getF) {
        case "html":
            x = "fab fa-html5";
            break;
        case "css":
            x = "fab fa-css3-alt";
            break;
        case "js":
            x = "fab fa-js";
            break;
        default:
            x = "far fa-file";
      }
    return x;
}

function insertNameFile()
{
    for (let i = 0; i < all_File.length; i++) {
        var name = document.createElement("a");
        document.querySelector("div.table>table>tbody>tr:nth-child(" + (3+i) +")>td").appendChild(name);
        var selName = document.querySelector("div.table>table>tbody>tr:nth-child("+ (3+i) +")>td>a");
        selName.textContent = all_File[i];
        selName.href = link_File[i];
    }
}


function insertNewRow()
{
    __insertCell();
    insertIcon();
    insertNameFile();
}

insertNewRow();