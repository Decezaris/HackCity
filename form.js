$(document).ready(function(){
    
    $("#register").on('click', function(e) {
        const string = $("#formGroupExampleInput")[0].value
        console.log(string);
        e.preventDefault();
    });
});

