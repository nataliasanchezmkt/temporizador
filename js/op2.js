/*
Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.*/



let time;
 let tempo= document.getElementById('temporizador');
 tempo.innerHTML='00:00'

 let flag =true

 let entrada;
 let count;

 function start(){
     
     if (flag==true){
         entrada = document.getElementById('entrada').value;
         count = entrada*60;
      
         time = setInterval(function(){
         countdown(count);
         count--
         if(count==0){
             clearInterval(time);
             tempo.innerHTML='Fin'
            }
            
        },1000)

    }
     else{
        time = setInterval(function(){
            countdown(count);
            count--
            if(count==0){
                clearInterval(time);
                tempo.innerHTML='Fin'
               }
               
           },1000)
           

         
     }
        
    }
    
    function countdown(count){
        let minutes= Math.floor(count/60);
        let seconds = count%60;
     if(minutes<10){
         minutes='0'+minutes
     }
     if(seconds<10){
         seconds='0'+ seconds
     }

     tempo.innerHTML=`${minutes}:${seconds}`
 }


 function pause(){
     clearInterval(time);
     flag=false
    
 }


 function reset(){
     clearInterval(time);
     minutes='00'
  seconds='00'
  flag=true
     tempo.innerHTML=`${minutes}:${seconds}`
 }

