const boton = document.querySelector(".boton");
const texto = document.querySelector(".texto");


boton.addEventListener("click", () => {
    const clases = [...texto.classList];
    if (clases.includes("purple")) {
        texto.classList.remove("purple");
        texto.classList.add("orange");
    }else{
        texto.classList.remove("orange");
        texto.classList.add("purple");
    }
   
});

