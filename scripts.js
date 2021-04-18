$(document).ready(function(){
    if (localStorage.getItem('cookieDisplayed') != 'displayed') {
        $('#cookiebanner').delay(2000).fadeIn();
        localStorage.setItem('cookieDisplayed', 'displayed')
    };
    $('#cookiebanner .btn').click(function() {
        $('#cookiebanner').fadeOut();
    });
    $('.nav-cart .btn').click(function(){
        alert("Your Cart is empty!");
    });
    $('#hoverImage').hover(function(){
        $('#hoverImage img').attr('src', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
        $('#hoverImage').mouseleave(function(){
            $('#hoverImage img').attr('src', 'vertical_lines.jpeg');
        });
    });
    // $('.nav-link').click(function(){
    //     $get("https://fakestoreapi.com/products", function(res){
    //         $('.col p-2').html('<li>' + res[0].title + '</li>');
    //         $('.col p-2').html('<li>' + res[0].description + '</li>');
    //         $('.col p-2').html('<li>' + res[0].image + '</li>');
    //     }, "json");
    // });
});