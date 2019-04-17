(function(){

     'use strict';   
    
    let $img1 = document.getElementById('java1');
    let $img2 = document.getElementById('node');
    let $img3 = document.getElementById('Angular');
    let $img4 = document.getElementById('js');  
    let $curriculo = document.getElementById('curriculo');
    let $Contato = document.getElementById('contato');
    let $txtjava = document.getElementById('txtjava');
    let $txtnode = document.getElementById('txtnode');
    let $txtangular = document.getElementById('txtangular');
    let $txtjs = document.getElementById('txtjs'); 
    
        $img1.addEventListener('click', function(event){
           event.stopPropagation();
           window.open('https://github.com/brunoViniciusTiCa/Meu-Portifolio---Back-Front');
        });
    
        $txtjava.addEventListener('click', function(event){
           event.stopPropagation();
           window.open('https://github.com/brunoViniciusTiCa/Meu-Portifolio---Back-Front');
        });
    
        $img2.addEventListener('click', function(event){
           event.stopPropagation();
           window.open('https://github.com/brunoViniciusTiCa/API---CRUD-Acad-mico-');
        });

        $txtnode.addEventListener('click', function(event){
           event.stopPropagation();
           window.open('https://github.com/brunoViniciusTiCa/API---CRUD-Acad-mico-');
        });
        
        $img3.addEventListener('click', function(event){
           event.stopPropagation();
           window.open('https://github.com/brunoViniciusTiCa/Angular-Aplica-o');
        });

        $txtangular.addEventListener('click', function(event){
           event.stopPropagation();
           window.open('https://github.com/brunoViniciusTiCa/API---CRUD-Acad-mico-');
        });
        
        $img4.addEventListener('click', function(event){
           event.stopPropagation();
           window.open('https://github.com/brunoViniciusTiCa/Curso-de-JavaScript');
        });

        $txtjs.addEventListener('click', function(event){
           event.stopPropagation();
           window.open('https://github.com/brunoViniciusTiCa/API---CRUD-Acad-mico-');
        });

        $Contato.addEventListener('click', function(event){
           event.stopPropagation();
           alert('Clique nos ícones: Linkdin, Instagram e Gmail! Logo será direcionado para estás redes sociais.');
        });

        $curriculo.addEventListener('click', function(){
           alert('Na próxima página você poderá baixar o curriculo e ter acesso as informações profissionais sobre Bruno Vinicius. Existem dois tipos de currículo, na próxima página: O gráfico em PDF e o Vitae em Word.');
        });

})();