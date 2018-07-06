$( document ).ready(function() {
    $("#btn-go").click(function () { 
        var url = "https://qa7.united.com/ual/" + $('#lang-selector').val() + "/widget/bookingwidget";
        $("#widget-iframe").attr("src", url);
    });
});