function generateDiv(){
    var color = ["red","blue","orange","yellow","green"]
    var container = document.querySelector(".container")
    var mainDiv = document.createElement("div");
    mainDiv.classList.add("main_div")
    for(var i=0;i<24;i++){
        var div = document.createElement("div");
        div.classList.add("square")
        div.style.backgroundColor = color[i%5]
        mainDiv.appendChild(div);

    }
    container.append(mainDiv);
}


function handleChange() {
    var xx = document.querySelector(".container").scrollHeight
    var yy = document.querySelector(".container").scrollTop
    var zz = document.querySelector(".container").clientHeight
    
    if ((xx-zz-yy)<20) {
        generateDiv()
    }
    
    console.log(xx,yy,zz)
}


function debounce(func,delay){
    let id;
    return () => {
        let context = this
        let args = arguments
        clearTimeout(id)
        id = setTimeout(() => func.apply(context,args),delay)
    }
}
document.querySelector(".container").addEventListener("scroll",debounce(handleChange,300))