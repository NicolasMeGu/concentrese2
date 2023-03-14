var counter = 0;
function count(){
	counter++;
	document.querySelector('h3').innerHTML = counter;
}

//funcion para el tiempo
function cargaTiempo(){

    contador_s = 0;
    contador_m = 0;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");


    window.setInterval(
        function(){
                if(contador_s==60){
                    contador_s=0;
                    contador_m++;
                    m.innerHTML = contador_m;
                    if(contador_m=0){
                        contador_m=0;
                    }
                }
                    s.innerHTML = contador_s;
                    contador_s++;
                    
        }
        ,1000);

    }