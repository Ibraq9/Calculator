

let res = document.getElementById("resualt");

let resultexp = ""; 

function getele(te) {
    if (resultexp.length === 0 && (te === '+' || te === '-' || te === '*' || te === '/')) {
        res.innerHTML = "Error";
    } else {
        res.innerHTML += te;
        resultexp += te;
    }
}


function equal() {
    try {
       
        if (resultexp.endsWith('+') || resultexp.endsWith('-') || resultexp.endsWith('*') || resultexp.endsWith('/')) {
            res.innerHTML = "Error";
            resultexp = "";
        } else {
            let result = eval(resultexp);
            res.innerHTML = result;
            resultexp = result.toString(); 
        }
    } catch (e) {
        res.innerHTML = "Error"; 
        resultexp = "";
    }
};




let clear1 = document.getElementById("un5");
clear1.onclick = function () {
    res.innerHTML = ""; 
    resultexp = ""; 
};




function backspaceButton() {
    if (resultexp.length > 0) {
        
        resultexp = resultexp.slice(0, -1);
        res.innerHTML = resultexp; 
    }
};












