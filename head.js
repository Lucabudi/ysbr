fetch('head.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_head");
    let newelem = document.createElement("head");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})