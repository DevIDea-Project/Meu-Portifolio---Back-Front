(function(){
    
    'use strict';

    const $linkdin = document.getElementById('linkdin');
    const $curriculo  = document.getElementById('curriculo');

    $linkdin.addEventListener('click', function(event){
         event.stopPropagation();
         window.open('https://linkedin.com/in/bruno-vinicius-459a34127/');
    });
    
    $curriculo.addEventListener('click', function(event){
        alert('Na proxima pagina você poderá baixar o curriculo e ter acesso a informações profissionais sobre Bruno Vinicius.');
    });


})();