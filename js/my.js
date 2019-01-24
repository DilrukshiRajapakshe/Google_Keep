
$("#take_A_note").click(function () {
    $("#take_A_tital").css("display", "block");//
    $("#note").attr("placeholder", "+     List Item");
    $("#post").css("display", "block");//
    $(".k").css("display", "none");//
    
    $("#but2").css("display", "block");//
    // $("#tit").focus();
    $("#a1").click(function () {
        console.log("xzcc");
        $(".b").css("background-color", "white");
    });
    $("#a2").click(function () {
        $(".b").css("background-color", "blue");
    });
    $("#a3").click(function () {
        $(".b").css("background-color", "blueviolet");
    });
    $("#a4").click(function () {
        $(".b").css("background-color", "yellow");
    });
    $("#a5").click(function () {
        $(".b").css("background-color", "yellowgreen");
    });
    $("#a6").click(function () {
        $(".b").css("background-color", "orange");
    });
    $("#a7").click(function () {
        $(".b").css("background-color", "orangered");
    });
    $("#a8").click(function () {
        $(".b").css("background-color", "pink");
    });
    $("#a9").click(function () {
        $(".b").css("background-color", "palegreen");
    });

});

$("#note").on("keydown", function (event) {
    var s = event.key;
    var exe = /[A-Za-z0-9_.-]*/;
    var f = $("#note").val();
    console.log(f);
    var result = exe.test($("#note").val());
    if (result) {
        
        
        // $("#list").val(f);
        // $("#note").val("");
        $("#tbody1").css("display", "block");//
        $("hr").css("display", "block");//
        
        

    } else {
        
    }
});