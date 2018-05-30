$(document).ready(function(){

    //creates a new entry in the database with the user's burger idea
    $("#submit-burger").on("click", function(){
        event.preventDefault();
        console.log("heard the click")
        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: false
        };

        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("created a new burger");
            location.reload();
        })
    });
    //updates the database entry's devour value to true
    $(".devourbtn").on("click", function(){
        var id = $(this).attr("value");
        console.log("value of button" + id);
        var nowDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevoured
        }).then(function(){
            console.log("ate dat burger!");
            location.reload();
        });

        


    });

});