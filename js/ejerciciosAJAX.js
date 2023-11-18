document.addEventListener("DOMContentLoaded", function() {
    var urlText = document.getElementById("url-text"); 
    urlText.value = window.location.href;


    var urlButton = document.getElementById("url-button");

    var estadosDePeticion = document.getElementById("estadosDePeticion");
    var cabecerasHTTP = document.getElementById("cabecerasHTTP");
    var codigoDeEstado = document.getElementById("codigoDeEstado");
    var textoDeRespuesta = document.getElementById("textoDeRespuesta");

    urlButton.addEventListener("click", function() {
        var url = urlText.value;

        
        estadosDePeticion.textContent = "";
        cabecerasHTTP.textContent = "";
        codigoDeEstado.textContent = "";
        textoDeRespuesta.textContent = "";

        
        estadosDePeticion.textContent = "Iniciando la solicitud...";

        
        setTimeout(function() {
            fetch(url)
                .then(function(response) {

                    // if (!response.ok) {
                    //     throw new Error("Respuesta no exitosa: " + response.status);
                    // }
                    
                    estadosDePeticion.textContent = "Solicitud completada";

                    
                    var cabeceras = response.headers;
                    
                    var cabecerasTexto = "";
                    cabeceras.forEach(function(valor, nombre) {
                        cabecerasTexto += nombre + ": " + valor + " || ";
                    });
                    cabecerasHTTP.textContent = cabecerasTexto;

                    
                    codigoDeEstado.textContent = "Código de Estado: " + response.status;

                    
                    return response.text();
                })
                .then(function(texto) {
                    
                    textoDeRespuesta.textContent = "Texto de Respuesta: " + texto;
                })
                .catch(function(error) {
                    
                    estadosDePeticion.textContent = "Error en la solicitud: " + error.message;
                });
        }, 3000);
    });

});