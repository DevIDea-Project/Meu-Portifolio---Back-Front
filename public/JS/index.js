(function(){

     'use strict';   

    let $img1     = document.getElementById('java1');
    let $img2     = document.getElementById('node');
    let $img3     = document.getElementById('Angular');
    let $img4     = document.getElementById('html');  
    let $curriculo = document.getElementById('curriculo');
    let $linkdin   = document.getElementById('linkdin');
    let $txtJava   = document.getElementById('txtjava');

        $img1.addEventListener('click', function(event){
                event.stopPropagation();
                window.open('https://github.com/brunoViniciusTiCa/JAVA-Biblioteca-Projeto-POO');
        });
        
        $img2.addEventListener('click', function(event){
                event.stopPropagation();
                window.open('https://github.com/brunoViniciusTiCa/Projeto-Node');
        });
        
        $img3.addEventListener('click', function(event){
                event.stopPropagation();
                window.open('https://github.com/brunoViniciusTiCa/Angular-Aplica-o');
        });
        
        $img4.addEventListener('click', function(event){
                event.stopPropagation();
                window.open('https://github.com/brunoViniciusTiCa/Curso-de-JavaScript');
        });

        $curriculo.addEventListener('click', function(){
            alert('Na proxima pagina você poderá baixar o curriculo e ter acesso a informações profissionais sobre Bruno Vinicius.');
        });

        $linkdin.addEventListener('click', function(event){
            event.stopPropagation();
            window.open('https://www.linkedin.com/in/bruno-vinicius-459a34127/');
        });

        $txtJava.addEventListener('click', function(){
            event.stopPropagation();
            window.open('https://github.com/brunoViniciusTiCa/JAVA-Biblioteca-Projeto-POO');
        });

})();