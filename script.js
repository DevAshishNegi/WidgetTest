$(document).ready(function () {
    $("#btn-go").click(function () {
        var url = $('#environment-selector').val() + $('#lang-selector').val() + "/widget/bookingwidget" + $('#version-selector').val() + "&showUnitedLogo=false";
        switch ($('#version-selector').val()) {
            case "?version=1":
                $("#widget-iframe").height(375);
                $("#widget-iframe").width(380);
                break;
            case "?version=2":
                $("#widget-iframe").height(404);
                $("#widget-iframe").width(776);
                break;
            case "?version=3":
                $("#widget-iframe").height(822);
                $("#widget-iframe").width(300);
                break;
            default:
                $("#widget-iframe").height(375);
                $("#widget-iframe").width(380);
        }
        $("#widget-iframe").attr("src", url);
    });
});