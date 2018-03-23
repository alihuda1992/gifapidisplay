var category = ["Apple", "Banana", "Pear", "Orange", "Pineapple", "Grapefruit", "Watermelon", "Strawberry", "Lemon"];
var search;
console.log(category)




$(document).ready(function () {

    for (i = 0; i < category.length; i++) {
        $("#pillcontainer").append('<li role="presentation" class="pill" value="' + category[i] + '"><a>' + category[i] + '</a></li>')
    }

   


    $(".pill").click(function () {
        var keyword = $(this).attr("value");
        //Clear out the HTML element 
        $("#container").html("");

        //AJAX call and for loop to print images from response of call
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=ZK9v6ITzVl3nm5Mz8iPUch43jDnk5b1v&limit=10");
        xhr.done(function (response) {
            console.log("success got data", response);
            for (var i = 0; i < response.data.length; i++) {

                $("#container").append('<img src =' + response.data[i].images.original.url + '>')
            }
        //close ajax 
        });



    //close onclick function
    });




//close document.ready
});