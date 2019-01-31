$(document).ready(function () {
    
    //setup listeners
    $("#survey").on("submit", function(event) {
        event.preventDefault();

        //get form info
        var post = {};
        $(this).find("input,textarea").not(".slider").each(function() {
            post[$(this).attr("name")] = $(this).val();
        });
        post.scores = "[" + $(".slider").map(function() {
            return $(this).val();
        }).get().join(",") + "]";

        //post data
        $.ajax({
            type: "POST",
            url: "/api/friends",
            data: post
        }).then(function(results) {
            
            var modal = $('#match-modal');
            var body = modal.find(".modal-body").html("");
            body.append($("<img>").attr("src", results.photo));
            body.append($("<h5>").html(results.name));
            body.append($("<p>").html(results.description));

            modal.modal();
        });
    });

    //get questions
    $.ajax({
        type: "GET",
        url: "/api/questions"
    }).then(function(results) {

        //render survey
        var template = $("#survey-item-template").html();
        results.reverse().forEach(function(element, idx) {
            $("#survey-body").prepend(template.replace(/\{idx\}/g, idx).replace("{question}", element));
        });
        $("#survey-item-template").html("");


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