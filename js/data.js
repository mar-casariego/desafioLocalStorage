//Obtiene el dato almacenado en localStorage
const storedData = localStorage.getItem("information");

//Muestra el dato en el span con id 'data'
if (storedData) {
    document.getElementById("data").innerHTML = storedData;
} else {
    document.getElementById("data").innerHTML = "No hay datos almacenados.";
}