var category = ["Apple", "Banana", "Pear", "Orange", "Pineapple", "Grapefruit", "Watermelon", "Strawberry", "Lemon"];
var search;



$(document).ready(function () {

    for (i = 0; i < category.length; i++) {
        $("#pillcontainer").append('<li role="presentation" class="pill" value="' + category[i] + '"><a>' + category[i] + '</a></li>')
    }

    $("#fruitbutton").click(function() {
     $("#container").html("");
    category.push($(".form-control").val());
    $("#pillcontainer").append('<li role="presentation" class="pill" value="' + $(".form-control").val() + '"><a>' + $(".form-control").val() + '</a></li>')
    $ ("#container").append('<img src =' + $(".form-control").val()  + '>')
    

    var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + $(".form-control").val() + "&api_key=ZK9v6ITzVl3nm5Mz8iPUch43jDnk5b1v&limit=10");
    xhr.done(function (response) {
        for (var i = 0; i < response.data.length; i++) {

            $("#container").append('<img src =' + response.data[i].images.original.url + '>')
        }
           
       
    //close ajax 
    });










});

    $(".pill").click(function () {
        var keyword = $(this).attr("value");
        //Clear out the HTML element 
        $("#container").html("");

        //AJAX call and for loop to print images from response of call
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=ZK9v6ITzVl3nm5Mz8iPUch43jDnk5b1v&limit=10");
        xhr.done(function (response) {
            for (var i = 0; i < response.data.length; i++) {

                $("#container").append('<img src =' + response.data[i].images.original.url + '>')
            }
        //close ajax 
        });



    //close onclick function
    });




//close document.ready
});