  var i=0,text;
    
    var text = " Autumn Phone X1 ";
    
    function typing() {
        if(i<text.length){
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing,150);
        }
    }
    typing();