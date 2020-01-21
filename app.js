const tabla = document.getElementById("tabla")
const cabezera = document.getElementById("cabezera")
const cuerpo = document.getElementById("cuerpo")

cuerpo.addEventListener("mouseout",(e)=>{
    /* e.target.parentNode.removeAttribute("style")
    e.target.removeAttribute("style") */
    const filas = e.target.parentNode.parentNode.children
    const indiceFilas = e.target.parentNode.rowIndex
    for(let i = 0;i < filas.length;i++){
        if(!(i == (indiceFilas - 1))){
            e.target.parentNode.parentNode.children[i].removeAttribute("style")
            const celdas = e.target.parentNode.parentNode.children[i].cells
            const celdaIndice = e.target.cellIndex
            if(celdas[celdaIndice]){
                celdas[celdaIndice].removeAttribute("style")
            }
        }
    }
    e.target.removeAttribute("style")
})
cuerpo.addEventListener("mouseover",(e)=>{
    const filas = e.target.parentNode.parentNode.children
    const indiceFilas = e.target.parentNode.rowIndex
    for(let i = 0;i < filas.length;i++){
        if(!(i == (indiceFilas - 1))){
            e.target.parentNode.parentNode.children[i].style.background = "red"
            const celdas = e.target.parentNode.parentNode.children[i].cells
            const celdaIndice = e.target.cellIndex
            if(celdas[celdaIndice]){
                celdas[celdaIndice].style.background = "blue"
            }
        }
    }
    e.target.style.background = "blue"
})
function hoverMio(e){
    
    const filas = e.target.parentNode.parentNode.rows
    const indicefila = e.target.parentNode.rowIndex
    for(let i = 0;i < filas.length;i++){
        if(!((i + 1) == indicefila) ){
            
            filas[i].style.background = "blue"
            // filas[i]=parentNode.style.background = "red"
            console.log(filas[i])
        }
    }
}
cuerpo