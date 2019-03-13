$(function(){
    $('#form').bind('submit', function(e){
        e.preventDefault();

        var txt = $(this).serialize();

        $.ajax({
            type:'POST',
            url:'ajax.php',
            data:txt,
            dataType:'json',
            success:function(json){
                if(json.status == 'ok') {
                    alert("deu certo ai talkei?");
                } else {
                    alert("deu ruim meu parsero");
                }
            }
        });
    });
});