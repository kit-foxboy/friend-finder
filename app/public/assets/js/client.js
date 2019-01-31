$(document).ready(function () {
    
    //get questions
    $.ajax({
        type: "GET",
        url: "/api/questions"
    }).then(function(results) {

        //render survey
        var template = $("#survey-item-template").html();
        results.forEach(function(element, idx) {
            $("#survey-body").append(template.replace(/\{idx\}/g, idx).replace("{question}", element));
        });


        //setup range sliders
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
});