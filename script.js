$(function(){
    $('button').bind('click', function(){
        // metodo load
        $('.div').load("teste.html");
        
        // metodo get
        // $.get("teste.html", function(t){
        //     $('.div').html(t);
        // });

        // metodo post
        // $.post("teste.html", function(t){
        //     $('.div').html(t);
        // });
    });
});