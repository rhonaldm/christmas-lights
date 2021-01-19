//variables
const bombillos = document.querySelectorAll(".bombillo");
const btnOn = document.querySelector("#prender");
const btnOff = document.querySelector("#apagar");
const intensidad = document.querySelector("#intensidad");
const extension = document.querySelector(".contenedor-extension");
const primerColor = document.querySelector("#primer-color");
const segundoColor = document.querySelector("#segundo-color");
const tercerColor = document.querySelector("#tercer-color");

const resultadoPrimerColor = [...bombillos].filter(bombillo=>bombillo.classList.contains("primer-color")==true);
const resultadoSegundoColor = [...bombillos].filter(bombillo=>bombillo.classList.contains("segundo-color")==true);
const resultadoTercerColor = [...bombillos].filter(bombillo=>bombillo.classList.contains("tercer-color")==true);


let contador = 0;
let idInterval;



//Eventos
btnOn.addEventListener("click",encenderBobillos);
btnOff.addEventListener("click",apagarBombillos);
intensidad.addEventListener("change",cambioFrecuencia);

primerColor.addEventListener("change",setearColores);
segundoColor.addEventListener("change",setearColores);
tercerColor.addEventListener("change",setearColores);


//Funciones

//funcion que toma el intervalo para usarlo como frecuencia de enciendo y apagado de los bombillos
function encenderBobillos() {
  let intervalo = parseFloat(intensidad.value)*1000;
    if(extension.classList.contains("off")){ 
        extension.classList.remove("off");      
    }  
  idInterval = setInterval(cicladoLuces,intervalo);     
}

//funcion que enciende los bombillos pares e impares segun el caso
function cicladoLuces() {
  bombillos.forEach((bombillo,i)=>{
    if(i%2==0 && contador%2==0){ 
      bombillo.classList.remove("apagado");
      setearColores();
    }else if(i%2>0 && contador%2>0){
      bombillo.classList.remove("apagado");
      setearColores();
    }else{
      bombillo.classList.add("apagado")
      bombillo.style.boxShadow = "none";
      bombillo.style.backgroundColor = "#554848";  
    }
  }); 
  contador++;
}

//funcion que detiene el ciclado de las luces
function detenerCilcado(){
  clearInterval(idInterval);
}

//funcion que cambia el ciclado de las luces
function cambioFrecuencia(){
  if(!extension.classList.contains("off")){
      detenerCilcado();
      encenderBobillos();  
  }
}  

//funcion que apaga los bombillos
function apagarBombillos() {
    detenerCilcado();
    extension.classList.add("off");
    bombillos.forEach(bombillo=>{
      bombillo.classList.add("apagado");
    });
}

//funcion que agrega los colores de fondo y las sombras para simular el encendido
function setearColores() {
    resultadoPrimerColor.forEach(bombillo=>{
      bombillo.style.backgroundColor=primerColor.value;
      bombillo.style.boxShadow = `2px 2px 10px 10px ${primerColor.value}, inset  2px 2px 10px 10px ${primerColor.value}`;
    });
    resultadoSegundoColor.forEach(bombillo=>{
      bombillo.style.backgroundColor=segundoColor.value;
      bombillo.style.boxShadow = `2px 2px 10px 10px ${segundoColor.value}, inset  2px 2px 10px 10px ${segundoColor.value}`;
    });
    resultadoTercerColor.forEach(bombillo=>{
      bombillo.style.backgroundColor=tercerColor.value;
      bombillo.style.boxShadow = `2px 2px 10px 10px ${tercerColor.value}, inset  2px 2px 10px 10px ${tercerColor.value}`;
    });
}



