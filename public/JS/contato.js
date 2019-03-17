(function(){
      
    'use strict';
    
    const $linkdin    = document.getElementById('linkdin');
    const $instagram  = document.getElementById('instagram');
    const $gmail      = document.getElementById('gmail');
    const $curriculo  = document.getElementById('curriculo');
    

    $curriculo.addEventListener('click', function(){
        alert('Na próxima página você poderá baixar o curriculo e ter acesso as informações profissionais sobre Bruno Vinicius. Existem dois tipos de currículo, na próxima página: O gráfico em PDF e o Vitae em Word.');
    });
    
    $linkdin.addEventListener('click', function(event){
         event.stopPropagation();
         window.open('https://linkedin.com/in/bruno-vinicius-459a34127/');
    });
    
    $instagram.addEventListener('click', function(event){
        event.stopPropagation();
        window.open('https://www.instagram.com/viniciustica09/');
    });

    $gmail.addEventListener('click', function(event){
        event.stopPropagation();
        window.open('https://mail.google.com/mail/u/1/#inbox/');
    });


})();