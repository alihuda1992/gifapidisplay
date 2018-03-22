var category = ["Apple", "Banana", "Pear", "Orange", "Pineapple", "Grapefruit", "Watermelon", "Strawberry", "Lemon"];
var search;
console.log(category)




$(document).ready(function () {

    for (i = 0; i < category.length; i++) {
        $("#pillcontainer").append('<li role="presentation" class="pill" value="' + category[i] + '"><a>' + category[i] + '</a></li>')
    }








    $(".pill").click(function () {
        console.log($(this).attr("value"));
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + $(this).attr("value") + "&api_key=ZK9v6ITzVl3nm5Mz8iPUch43jDnk5b1v&limit=10");
        xhr.done(function (data) { 

          //  $("#container").append($(this).attr(images.downsized_still));

            console.log($(this))

         });

        // $("#container").append ????


    })





});




