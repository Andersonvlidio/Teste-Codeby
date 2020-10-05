const columns = document.querySelectorAll(".diagram-column")


const growColumns = () => {
    console.log('test')
    columns.forEach((column, index) => {
        column.style.maxHeight= `${index * 50 + 180}px`;
    })
}

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 1100){
        growColumns()
    }
})