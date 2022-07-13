var a = ['1','2','3','4','5','6','7','8','9','10'];
var b = [];
var c = [];

function getMem() {
    console.clear();
    a = [];
    a.push(document.getElementById('main1').value);
    a.push(document.getElementById('main2').value); 
    a.push(document.getElementById('mem1').value);
    a.push(document.getElementById('mem2').value); 
    a.push(document.getElementById('mem3').value);  
    a.push(document.getElementById('mem4').value); 
    a.push(document.getElementById('mem5').value); 
    a.push(document.getElementById('mem6').value); 
    a.push(document.getElementById('mem7').value); 
    a.push(document.getElementById('mem8').value); 
}

function randomMem(i) {
    var r = Math.floor(Math.random() * 2);
    if (r == 1) {
        b.push(a[i]);
        c.push(a[i+1]);
    }
    else {
        c.push(a[i]);
        b.push(a[i+1]);
    }
    
    
}

function calc() {
    getMem();
    b = [];
    c = [];
    b.push(a[0]);
    c.push(a[1]);
    randomMem(2);
    randomMem(4);
    randomMem(6);
    randomMem(8);
    console.log(b);
    console.log(c);
}