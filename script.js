$(document).ready(function () {
    $("#btn-go").click(function () {
        var url = $('#environment-selector').val() + $('#lang-selector').val() + "/widget/bookingwidget" + $('#version-selector').val() + "&showUnitedLogo=" + $('#logo-option').val() + "&src=https://devashishnegi.github.io/WidgetTest/";
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
                if ($('#logo-option').val() == "true"){
                    $("#widget-iframe").height(812);}
                else{
                    $("#widget-iframe").height(760);}
                $("#widget-iframe").width(300);
                break;
            default:
                $("#widget-iframe").height(375);
                $("#widget-iframe").width(380);
        }
        $("#widget-iframe").attr("src", url);
    });
});
function logoFunction(value) {
    if (value == "?version=2" || value == "?version=3")
    {
        $("#logo-section").css("display", "block");
    }
    else {
        $("#logo-section").css("display", "none");
    }
}