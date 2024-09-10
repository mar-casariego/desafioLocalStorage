document.getElementById("buttonText").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    
//Guarda el valor en localStorage
        localStorage.setItem("information", inputText);

//Limpia el campo de entrada
    document.getElementById("inputText").value = '';
});
