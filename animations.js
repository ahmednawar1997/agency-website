$(document).ready(function () {

    //window and animation items
    var animation_elements = $.find('.animation-element');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //iterate through elements to see if its in view
        $.each(animation_elements, function () {
            if ($(this).hasClass('in-view'))
                return;

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('in-view');
            }
        });

    }

    var prevScrollpos = window.pageYOffset;
    //on or scroll, detect elements in view
    $(window).on('scroll resize', function () {

        var currentScrollPos = window.pageYOffset;
        const navHeight = $("nav").height();
        if (prevScrollpos > currentScrollPos) {
            $("nav").css("top", "0px");
        } else {
            $("nav").css("top", "-" + navHeight + "px");
        }
        prevScrollpos = currentScrollPos;


        check_if_in_view()
    })
    //trigger our scroll event on initial load
    //$(window).trigger('scroll');

});