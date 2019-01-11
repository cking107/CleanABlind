$(document).ready(function() {

    $.getJSON("blindprices.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#bprices").append(
                    "<h3>" + value.blind_name + "</h3>" +
                    "<p>" + value.single + "</p>" +
                    "<p>" + value.double + "</p>" +
                    "<p>" + value.triple + "</p>"
                );
            });
        });
    });

    $('.slide').slick( {
        arrows: true,
        dots: true
    });

});