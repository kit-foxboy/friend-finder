$(document).ready(function () {
    $("#quitter").tooltip();

    
    
    $(".slider").on("input", function() {
        $(this).trigger("change");
    });
    $(".slider").on("change", function(){
        
        var answerId = "#answer" + $(this).attr("id").substr(-1, 1);
        switch(parseInt($(this).val())) {
            
            case 1:
                $(answerId).attr("src", "assets/img/frown-open-light.svg");
                break;
            case 2:
                $(answerId).attr("src", "assets/img/frown-light.svg");
                break;
            case 3:
                $(answerId).attr("src", "assets/img/meh-light.svg");
                break;
            case 4:
                $(answerId).attr("src", "assets/img/smile-light.svg");
                break;
            case 5:
                $(answerId).attr("src", "assets/img/grin-light.svg");
        }

    });
});