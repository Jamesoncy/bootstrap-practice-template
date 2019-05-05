$(document).ready(function(){

    var sidebar = $("#sidebar"),
            menu = $(".menu")
    
    function hideSidebar() {
        sidebar.removeClass("d-block").addClass("d-none")
        menu.removeClass("d-block d-none").addClass("d-none")
        $("#menu").addClass("d-block")
    }

    function showSidebar() {
        sidebar.removeClass("d-none").addClass("d-block")
        menu.removeClass("d-block d-none").addClass("d-none")
        $("#close-menu").addClass("d-block")
    }

    $('#menu').click(function() {
        showSidebar();
    });

    $("#close-menu").click(function () {
        hideSidebar();
    });
});