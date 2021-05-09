module.exports = function(chunk,n){
    return chunk.split('').map((elem)=>{
        let code = elem.charCodeAt();
        let flag = (code > 64 && code < 91) ? true : false;
        if(elem.match(/[a-z]/i)) {
            if (n > 0) {
                if (code > (flag?90:122)-n) {
                        code = n + code - 26;
                    } else {
                        code += n;
                    }
                } else {
                if (code < (flag?65:97)-n) {
                        code = code + n + 26;
                    } else {
                        code += n;
                    }
                }
            return String.fromCharCode(code);
        }
        else return elem
    }).join('')
}