/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
//$(document).ready(function () {
//    "use strict";
//    $("#clickMe").click(function (e) {
//        alert("hello world!");
//    });
//});

$(document).ready(function(){
    var $inputbtn = $('input.btn:not(.non)');
    var $result = $('input#results');
    var $display = $('p#display');
    var $equation = "";
    $display.hide();
    $result.on('blur', function(){
        $equation = $result.val();
    });
    $inputbtn.on('click', function(e){
        var $this = $(e.currentTarget).val();
        if($this === "X"){
            $this = "*";
        }
        $equation += $this;
        $result.val($equation);
    });
    $('#clear').on('click', function(){
        $equation = "";
        $result.val($equation);
        $('p#display').slideUp().html("");
    });
    $('#clearlast').on('click', function(){
        var a = $equation;
        var b = String(a);
        var c = b.substr(0, b.length - 1);
        $equation = c;
        $result.val($equation);
    });
    $('input#sum').on('click', function(){
        var value = eval($equation);
        console.log(value);
        var i = $.isNumeric(value);
        console.log(i);
        
        $('p#display').slideDown().html(value);
    })
});