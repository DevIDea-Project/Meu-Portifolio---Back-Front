(function(){

    'use strict'

     let $btnEnviar = document.getElementById('btnEnviar');
     let $txtMsg    = document.getElementById('textarea');
     let $resta     = document.getElementById('resta');
     let $divSpan   = document.getElementById('divSpan');
     let maxima = $txtMsg.maxLength;


     $resta.textContent = maxima;

     $divSpan.style.display = 'block';
        
     /** Passando uma função keypress para o evento do teclado */
     $txtMsg.addEventListener('input', checkLength);

     function checkLength(event){
        event.stopPropagation();
        let QtdLetras = this.value.length;
        $resta.textContent = maxima - QtdLetras;
     }

     $btnEnviar.addEventListener('submit', function(event){
        event.stopPropagation();
        
     });
})();