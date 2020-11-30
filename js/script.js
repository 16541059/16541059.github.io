$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("section h1").toggle();
    $("section p").toggle();
    console.log("Clicked menu");

    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
