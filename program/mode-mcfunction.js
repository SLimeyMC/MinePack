function functionDefine() {
    const str1 = document.getElementById("functionCommand");
    if (str1.startsWith !== this.#) {
        functionScript();
    } else {
        functionComment();
    }
}

function functionScript() {
    var str = document.getElementById("functionCommand")
    var res = str.split("o");
    document.getElementById("demo").innerHTML = res;
}

function functionComment() {
    
}