$("document").ready(function () {
    $(".prn").mouseenter(function () {
        $(this).css("background-color", "#30241A");
    });
    $(".prn").mouseleave(function () {
        $(this).css("background-color", "#402F1F");
    });
    $(".dropdown-item").mouseenter(function () {
        $(this).css({ "background-color": "#30241A", "color": "#FFFFFF8C" });
    });
    $(".dropdown-item").mouseleave(function () {
        $(this).css({ "background-color": "#402F1F", "color": "#FFFFFF8C" });
    });
});