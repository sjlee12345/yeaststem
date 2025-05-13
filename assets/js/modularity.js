function overlayTemplate(img, text, height,width){
    let template = `
    <html>
    <head>
        <link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;assets/css/overlay.css&quot;>
    </head>
    <body>
        <img src=&quot;${img}&quot; height=&quot;${height}&quot; width=&quot;${width}&quot;>
        <p>${text}</p>
    </body>
</html>
    `
    var templatep = `<iframe sandbox srcdoc="${template}" style="width:${width}; height:${height};"></iframe>`
    return templatep
}

var nav = document.getElementById("navbar");
nav.innerHTML = "<iframe class=\"navbari\" src=\"nav.html\"></iframe>";
var overlays = document.getElementsByClassName("overlay")
for(var i=0; i<overlays.length; i++){
    var o = overlays[i]
    console.log(o)
    o.innerHTML = overlayTemplate(o.getAttribute("img"), o.getAttribute("text"), o.getAttribute("height"), o.getAttribute("width"))
}