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
    $('#userForm .btn-primary').click(function(){
        $('#userForm').css("display", "block");
        $('#userId').attr('style', 'display: block');
        // to be figured out later...only shows for a second
    });
    $('#allProducts .btn').click(function(){
            $.get("https://fakestoreapi.com/products", function(res){
                var newTab = window.open('', 'List of Products', '');
                
                for (var i=0; i<res.length; i++){
                    var output="";
                    output += `<div class="allProductsHere">`;
                    output += `<p> Title: ${res[i].title}</p>`;
                    output += `<p> Description: ${res[i].description}</p>`;
                    output += `<p> Price: ${res[i].price}</p>`;
                    output += `<p> Image: <img src="${res[i].image}" $('img').width('50px')
                    .height('50px');></p>`;
                    output += `<hr/>`;
                    output += `</div>`;
                    // $('.contentOn').append(output);
                    newTab.document.write(output);
                };   
            }, "json");
            
        });  
        
    $('#slimelectro .btn-secondary, a[href="Electronics"]').click(function(){
        $.get("https://fakestoreapi.com/products", function(res){
            // if ($(this).attr("href") == Electronics){
                for (var i=8; i<14; i++){
                    var electronics="";
                    electronics += `<table class="electronics">`;
                    electronics += `<thead>Electronics</thead>`;
                    electronics += `<tr>`;
                    electronics += `<td> Title: ${res[i].title}</td>`;
                    electronics += `<td> Description: ${res[i].description}</p>`;
                    electronics += `<td> Price: ${res[i].price}</p>`;
                    electronics += `<td> Image: <img src="${res[i].image}" $('img').width('50')
                    .height('50');></p>`;
                    electronics += `</tr`;
                    electronics += `</table>`;
                    $(electronics).appendTo('#Electronics');
                    // $('.succulenticon').hide();

                    $('#Electronics').show().siblings().hide();

                    // $('a. nav-link').attr('href', 'electronics');
                };
                // e.preventDefault();
            // };
            
        }, "json");
        // showContent(res.currentTarget.hash);
        // res.preventDefault();
    }); 
});