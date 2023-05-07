let index=0;
function changecolor(){
    
    let colors=["red","yellow","blue","green","orange","violet","purple","black","indigo","grey"];

    document.getElementsByTagName("body")[0].
    style.background=colors[index++];

    if(index>colors.length-1)
    index=0
}
