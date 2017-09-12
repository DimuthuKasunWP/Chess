

var eligiblewhitepawn1;
var eligiblewhitepawn2;
var eligiblewhitepawn3;
var eligiblewhitepawn4;
var eligiblewhitepawn5;
var eligiblewhitepawn6;
var eligiblewhitepawn7;
var eligiblewhitepawn8;
var eligiblewhiterook1;
var eligiblewhiteknight1;
var eligiblewhitebishop1;
var eligiblewhiteking;
var eligiblewhitequeen;
var eligiblewhitebishop2;
var eligiblewhiteknight2;
var eligiblewhiterook2;

var eligibleblackpawn1;
var eligibleblackpawn2;
var eligibleblackpawn3;
var eligibleblackpawn4;
var eligibleblackpawn5;
var eligibleblackpawn6;
var eligibleblackpawn7;
var eligibleblackpawn8;
var eligibleblackrook1;
var eligibleblackknight1;
var eligibleblackbishop1;
var eligibleblackking;
var eligibleblackqueen;
var eligibleblackbishop2;
var eligibleblackknight2;
var eligibleblackrook2;


    $("#img-white-pawn-1").click(function () {
        // console.log($("#img-white-pawn-1").parent().attr("id"));
        if($("#img-white-pawn-1").parent().attr("id")==="49" ) {
            resetColor();
            $("#div-thisside-line1-1").children().css("background", "yellow");
            $("#div-thisside-line2-1").children().css("background", "yellow");
            eligiblewhitepawn1 = ["#div-thisside-line1-1", "#div-thisside-line2-1"];
            // revertpawn(eligiblewhitepawn1);
        }else if($("#"+(($("#img-white-pawn-1").parent().attr("id"))-8)).children().length===0){
            $("#"+(($("#img-white-pawn-1").parent().attr("id"))-8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-white-pawn-1").parent().attr("id"))-7)).children().length>0||$("#"+(($("#img-white-pawn-1").parent().attr("id"))-9)).children().length>0)&&($("#"+(($("#img-white-pawn-1").parent().attr("id"))-14)).children().length===0||$("#"+(($("#img-white-pawn-1").parent().attr("id"))-17)).children().length===0)){
            $("#"+(($("#img-white-pawn-1").parent().attr("id"))-7)).css("background", "red");

        }



    });




    $("#img-white-pawn-2").click(function () {
        if($("#img-white-pawn-2").parent().attr("id")==="50" ) {
        resetColor();
        $("#div-thisside-line1-2").children().css("background", "yellow");
        $("#div-thisside-line2-2").children().css("background", "yellow");

        }else if($("#"+(($("#img-white-pawn-2").parent().attr("id"))-8)).children().length===0){
            $("#"+(($("#img-white-pawn-2").parent().attr("id"))-8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-white-pawn-2").parent().attr("id"))-7)).children().length>0||$("#"+(($("#img-white-pawn-2").parent().attr("id"))-9)).children().length>0)&&($("#"+(($("#img-white-pawn-2").parent().attr("id"))-14)).children().length===0||$("#"+(($("#img-white-pawn-2").parent().attr("id"))-17)).children().length===0)){
            $("#"+(($("#img-white-pawn-2").parent().attr("id"))-7)).css("background", "red");

        }
    });


    $("#img-white-pawn-3").click(function () {
        if($("#img-white-pawn-3").parent().attr("id")==="51" ) {
        resetColor();
        $("#div-thisside-line1-3").children().css("background", "yellow");
        $("#div-thisside-line2-3").children().css("background", "yellow");

        }else if($("#"+(($("#img-white-pawn-3").parent().attr("id"))-8)).children().length===0){
            $("#"+(($("#img-white-pawn-3").parent().attr("id"))-8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-white-pawn-3").parent().attr("id"))-7)).children().length>0||$("#"+(($("#img-white-pawn-3").parent().attr("id"))-9)).children().length>0)&&($("#"+(($("#img-white-pawn-3").parent().attr("id"))-14)).children().length===0||$("#"+(($("#img-white-pawn-3").parent().attr("id"))-17)).children().length===0)){
            $("#"+(($("#img-white-pawn-3").parent().attr("id"))-7)).css("background", "red");

        }
    });


    $("#img-white-pawn-4").click(function () {
        if($("#img-white-pawn-4").parent().attr("id")==="52" ) {
        resetColor();
        $("#div-thisside-line1-4").children().css("background", "yellow");
        $("#div-thisside-line2-4").children().css("background", "yellow");
        }else if($("#"+(($("#img-white-pawn-4").parent().attr("id"))-8)).children().length===0){
            $("#"+(($("#img-white-pawn-4").parent().attr("id"))-8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-white-pawn-4").parent().attr("id"))-7)).children().length>0||$("#"+(($("#img-white-pawn-4").parent().attr("id"))-9)).children().length>0)&&($("#"+(($("#img-white-pawn-4").parent().attr("id"))-14)).children().length===0||$("#"+(($("#img-white-pawn-4").parent().attr("id"))-17)).children().length===0)){
            $("#"+(($("#img-white-pawn-4").parent().attr("id"))-7)).css("background", "red");

        }

    });


    $("#img-white-pawn-5").click(function () {
        if($("#img-white-pawn-5").parent().attr("id")==="53" ) {
        resetColor();
        $("#div-thisside-line1-5").children().css("background", "yellow");
        $("#div-thisside-line2-5").children().css("background", "yellow");
        }else if($("#"+(($("#img-white-pawn-5").parent().attr("id"))-8)).children().length===0){
            $("#"+(($("#img-white-pawn-1").parent().attr("id"))-8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-white-pawn-5").parent().attr("id"))-7)).children().length>0||$("#"+(($("#img-white-pawn-5").parent().attr("id"))-9)).children().length>0)&&($("#"+(($("#img-white-pawn-5").parent().attr("id"))-14)).children().length===0||$("#"+(($("#img-white-pawn-5").parent().attr("id"))-17)).children().length===0)){
            $("#"+(($("#img-white-pawn-5").parent().attr("id"))-7)).css("background", "red");

        }

    });



    $("#img-white-pawn-6").click(function () {
        if($("#img-white-pawn-6").parent().attr("id")==="54" ) {3
        resetColor();
        $("#div-thisside-line1-6").children().css("background", "yellow");
        $("#div-thisside-line2-6").children().css("background", "yellow");

        }else if($("#"+(($("#img-white-pawn-6").parent().attr("id"))-8)).children().length===0){
            $("#"+(($("#img-white-pawn-6").parent().attr("id"))-8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-white-pawn-6").parent().attr("id"))-7)).children().length>0||$("#"+(($("#img-white-pawn-6").parent().attr("id"))-9)).children().length>0)&&($("#"+(($("#img-white-pawn-6").parent().attr("id"))-14)).children().length===0||$("#"+(($("#img-white-pawn-6").parent().attr("id"))-17)).children().length===0)){
            $("#"+(($("#img-white-pawn-6").parent().attr("id"))-7)).css("background", "red");

        }
    });


    $("#img-white-pawn-7").click(function () {
        if($("#img-white-pawn-7").parent().attr("id")==="55" ) {
        resetColor();
        $("#div-thisside-line1-7").children().css("background", "yellow");
        $("#div-thisside-line2-7").children().css("background", "yellow");

        }else if($("#"+(($("#img-white-pawn-7").parent().attr("id"))-8)).children().length===0){
            $("#"+(($("#img-white-pawn-7").parent().attr("id"))-8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-white-pawn-7").parent().attr("id"))-7)).children().length>0||$("#"+(($("#img-white-pawn-7").parent().attr("id"))-9)).children().length>0)&&($("#"+(($("#img-white-pawn-7").parent().attr("id"))-14)).children().length===0||$("#"+(($("#img-white-pawn-7").parent().attr("id"))-17)).children().length===0)){
            $("#"+(($("#img-white-pawn-7").parent().attr("id"))-7)).css("background", "red");

        }
    });


    $("#img-white-pawn-8").click(function () {
        if($("#img-white-pawn-8").parent().attr("id")==="56" ) {
        resetColor();
        $("#div-thisside-line1-8").children().css("background", "yellow");
        $("#div-thisside-line2-8").children().css("background", "yellow");

        }else if($("#"+(($("#img-white-pawn-8").parent().attr("id"))-8)).children().length===0){
            $("#"+(($("#img-white-pawn-8").parent().attr("id"))-8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-white-pawn-8").parent().attr("id"))-7)).children().length>0||$("#"+(($("#img-white-pawn-8").parent().attr("id"))-9)).children().length>0)&&($("#"+(($("#img-white-pawn-8").parent().attr("id"))-14)).children().length===0||$("#"+(($("#img-white-pawn-8").parent().attr("id"))-17)).children().length===0)){
            $("#"+(($("#img-white-pawn-8").parent().attr("id"))-7)).css("background", "red");

        }
    });


    $("#img-black-pawn-1").click(function () {
        if($("#img-black-pawn-1").parent().attr("id")==="9" ) {
        resetColor();
        $("#div-oppo-line1-1").children().css("background", "yellow");
        $("#div-oppo-line2-1").children().css("background", "yellow");

        }else if($("#"+(($("#img-black-pawn-1").parent().attr("id"))+8)).children().length===0){
            $("#"+(($("#img-black-pawn-1").parent().attr("id"))+8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-black-pawn-1").parent().attr("id"))+7)).children().length>0||$("#"+(($("#img-black-pawn-1").parent().attr("id"))+9)).children().length>0)&&($("#"+(($("#img-black-pawn-1").parent().attr("id"))+14)).children().length===0||$("#"+(($("#img-black-pawn-1").parent().attr("id"))+17)).children().length===0)){
            $("#"+(($("#img-black-pawn-1").parent().attr("id"))+7)).css("background", "red");

        }
    });


    $("#img-black-pawn-2").click(function () {
        if($("#img-black-pawn-2").parent().attr("id")==="10" ) {
        resetColor();
        $("#div-oppo-line1-2").children().css("background", "yellow");
        $("#div-oppo-line2-2").children().css("background", "yellow");

        }else if($("#"+(($("#img-black-pawn-2").parent().attr("id"))+8)).children().length===0){
            $("#"+(($("#img-black-pawn-2").parent().attr("id"))+8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-black-pawn-2").parent().attr("id"))+7)).children().length>0||$("#"+(($("#img-black-pawn-2").parent().attr("id"))+9)).children().length>0)&&($("#"+(($("#img-black-pawn-2").parent().attr("id"))+14)).children().length===0||$("#"+(($("#img-black-pawn-2").parent().attr("id"))+17)).children().length===0)){
            $("#"+(($("#img-black-pawn-2").parent().attr("id"))+7)).css("background", "red");

        }
    });



    $("#img-black-pawn-3").click(function () {
        if($("#img-black-pawn-3").parent().attr("id")==="11" ) {
        resetColor();
        $("#div-oppo-line1-3").children().css("background", "yellow");
        $("#div-oppo-line2-3").children().css("background", "yellow");

        }else if($("#"+(($("#img-black-pawn-3").parent().attr("id"))+8)).children().length===0){
            $("#"+(($("#img-black-pawn-3").parent().attr("id"))+8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-black-pawn-3").parent().attr("id"))+7)).children().length>0||$("#"+(($("#img-black-pawn-3").parent().attr("id"))+9)).children().length>0)&&($("#"+(($("#img-black-pawn-3").parent().attr("id"))+14)).children().length===0||$("#"+(($("#img-black-pawn-3").parent().attr("id"))+17)).children().length===0)){
            $("#"+(($("#img-black-pawn-3").parent().attr("id"))+7)).css("background", "red");

        }
    });


    $("#img-black-pawn-4").click(function () {
        if($("#img-black-pawn-4").parent().attr("id")==="12" ) {
        resetColor();
        $("#div-oppo-line1-4").children().css("background", "yellow");
        $("#div-oppo-line2-4").children().css("background", "yellow");
        }else if($("#"+(($("#img-black-pawn-4").parent().attr("id"))+8)).children().length===0){
            $("#"+(($("#img-black-pawn-4").parent().attr("id"))+8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-black-pawn-4").parent().attr("id"))+7)).children().length>0||$("#"+(($("#img-black-pawn-4").parent().attr("id"))+9)).children().length>0)&&($("#"+(($("#img-black-pawn-4").parent().attr("id"))+14)).children().length===0||$("#"+(($("#img-black-pawn-4").parent().attr("id"))+17)).children().length===0)){
            $("#"+(($("#img-black-pawn-4").parent().attr("id"))+7)).css("background", "red");

        }
    });


    $("#img-black-pawn-5").click(function () {
        if($("#img-black-pawn-5").parent().attr("id")==="13" ) {
        resetColor();
        $("#div-oppo-line1-5").children().css("background", "yellow");
        $("#div-oppo-line2-5").children().css("background", "yellow");

        }else if($("#"+(($("#img-black-pawn-5").parent().attr("id"))+8)).children().length===0){
            $("#"+(($("#img-black-pawn-5").parent().attr("id"))+8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-black-pawn-5").parent().attr("id"))+7)).children().length>0||$("#"+(($("#img-black-pawn-5").parent().attr("id"))+9)).children().length>0)&&($("#"+(($("#img-black-pawn-5").parent().attr("id"))+14)).children().length===0||$("#"+(($("#img-black-pawn-5").parent().attr("id"))+17)).children().length===0)){
            $("#"+(($("#img-black-pawn-5").parent().attr("id"))+7)).css("background", "red");

        }
    });


    $("#img-black-pawn-6").click(function () {
        if($("#img-black-pawn-6").parent().attr("id")==="14" ) {
        resetColor();
        $("#div-oppo-line1-6").children().css("background", "yellow");
        $("#div-oppo-line2-6").children().css("background", "yellow");

        }else if($("#"+(($("#img-black-pawn-6").parent().attr("id"))+8)).children().length===0){
            $("#"+(($("#img-black-pawn-6").parent().attr("id"))+8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-black-pawn-6").parent().attr("id"))+7)).children().length>0||$("#"+(($("#img-black-pawn-6").parent().attr("id"))+9)).children().length>0)&&($("#"+(($("#img-black-pawn-6").parent().attr("id"))+14)).children().length===0||$("#"+(($("#img-black-pawn-6").parent().attr("id"))+17)).children().length===0)){
            $("#"+(($("#img-black-pawn-6").parent().attr("id"))+7)).css("background", "red");

        }

    });

    $("#img-black-pawn-7").click(function () {
        if($("#img-black-pawn-7").parent().attr("id")==="15" ) {
        resetColor();
        $("#div-oppo-line1-7").children().css("background", "yellow");
        $("#div-oppo-line2-7").children().css("background", "yellow");
        }else if($("#"+(($("#img-black-pawn-7").parent().attr("id"))+8)).children().length===0){
            $("#"+(($("#img-black-pawn-7").parent().attr("id"))+8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-black-pawn-7").parent().attr("id"))+7)).children().length>0||$("#"+(($("#img-black-pawn-7").parent().attr("id"))+9)).children().length>0)&&($("#"+(($("#img-black-pawn-7").parent().attr("id"))+14)).children().length===0||$("#"+(($("#img-black-pawn-7").parent().attr("id"))+17)).children().length===0)){
            $("#"+(($("#img-black-pawn-7").parent().attr("id"))+7)).css("background", "red");

        }

    });



    $("#img-black-pawn-8").click(function () {
        if($("#img-black-pawn-8").parent().attr("id")==="16" ) {
        resetColor();
        $("#div-oppo-line1-8").children().css("background", "yellow");
        $("#div-oppo-line2-8").children().css("background", "yellow");

        }else if($("#"+(($("#img-black-pawn-8").parent().attr("id"))+8)).children().length===0){
            $("#"+(($("#img-black-pawn-8").parent().attr("id"))+8)).css("background", "yellow");
            // $("#div-thisside-line2-1").children().css("background", "yellow");
        }else if(($("#"+(($("#img-black-pawn-8").parent().attr("id"))+7)).children().length>0||$("#"+(($("#img-black-pawn-8").parent().attr("id"))+9)).children().length>0)&&($("#"+(($("#img-black-pawn-8").parent().attr("id"))+14)).children().length===0||$("#"+(($("#img-black-pawn-8").parent().attr("id"))+17)).children().length===0)){
            $("#"+(($("#img-black-pawn-8").parent().attr("id"))+7)).css("background", "red");

        }
    });


function  allowdrop(ev) {
    resetColor();
    console.log("allow drop");
    ev.preventDefault();
}
function drag(ev) {

    console.log("drag") ;
    ev.dataTransfer.setData("text",ev.target.id);
}
function drop(ev){

    console.log("drop");
    ev.preventDefault();
    // revert();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));



}
revertpawn(eligiblewhitepawn1);
function  resetColor() {
    $("#1").css("background", "white");
    $("#3").css("background", "white");
    $("#5").css("background", "white");
    $("#7").css("background", "white");
    $("#9").css("background", "saddlebrown");
    $("#11").css("background", "saddlebrown");
    $("#13").css("background", "saddlebrown");
    $("#15").css("background", "saddlebrown");
    $("#17").css("background", "white");
    $("#19").css("background", "white");
    $("#21").css("background", "white");
    $("#23").css("background", "white");
    $("#25").css("background", "saddlebrown");
    $("#27").css("background", "saddlebrown");
    $("#29").css("background", "saddlebrown");
    $("#31").css("background", "saddlebrown");
    $("#33").css("background", "white");
    $("#35").css("background", "white");
    $("#37").css("background", "white");
    $("#39").css("background", "white");
    $("#41").css("background", "saddlebrown");
    $("#43").css("background", "saddlebrown");
    $("#45").css("background", "saddlebrown");
    $("#47").css("background", "saddlebrown");
    $("#49").css("background", "white");
    $("#51").css("background", "white");
    $("#53").css("background", "white");
    $("#55").css("background", "white");
    $("#57").css("background", "saddlebrown");
    $("#59").css("background", "saddlebrown");
    $("#61").css("background", "saddlebrown");
    $("#63").css("background", "saddlebrown");


    $("#2").css("background", "saddlebrown");
    $("#4").css("background", "saddlebrown");
    $("#6").css("background", "saddlebrown");
    $("#8").css("background", "saddlebrown");
    $("#10").css("background", "white");
    $("#12").css("background", "white");
    $("#14").css("background", "white");
    $("#16").css("background", "white");
    $("#18").css("background", "saddlebrown");
    $("#20").css("background", "saddlebrown");
    $("#22").css("background", "saddlebrown");
    $("#24").css("background", "saddlebrown");
    $("#26").css("background", "white");
    $("#28").css("background", "white");
    $("#30").css("background", "white");
    $("#32").css("background", "white");
    $("#34").css("background", "saddlebrown");
    $("#36").css("background", "saddlebrown");
    $("#38").css("background", "saddlebrown");
    $("#40").css("background", "saddlebrown");
    $("#42").css("background", "white");
    $("#44").css("background", "white");
    $("#46").css("background", "white");
    $("#48").css("background", "white");
    $("#50").css("background", "saddlebrown");
    $("#52").css("background", "saddlebrown");
    $("#54").css("background", "saddlebrown");
    $("#56").css("background", "saddlebrown");
    $("#58").css("background", "white");
    $("#60").css("background", "white");
    $("#62").css("background", "white");
    $("#64").css("background", "white");
}


// }
// function revertpawn(array){
//     if((array.includes())){
//         console.log("fufdkkdfkldjflsfjaf;jaslfjaslkfdas");
//
//
//     }else{
//         $("#img-white-pawn-1").revert;
//
//     }
//
// }












